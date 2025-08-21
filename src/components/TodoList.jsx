import { useState } from 'react'
import './TodoList.css'

const MIN_HEIGHT = 400;

function Header({ title }) {
    return (
        <div className="todo-header">
            <h1>{title}</h1>
        </div>
    );
}

function PanelButton({text, onClick}) {
    return <button onClick={onClick}>{text}</button>
}

function ControlPanel({ 
    inputText, 
    onInputChange, 
    onAddItem,
    onInputReset,
    onListReset,
    onDeleteSelected,
}) {
    return (
        <div className="todo-cpanel">
            <form>
                <div className="input-control">
                    <input
                        type="text"
                        value={inputText}
                        placeholder="Introduzir novo item aqui!"
                        onChange={onInputChange}
                    />
                </div>
                <div className="button-list">
                    <PanelButton
                        text={'Adicionar'}
                        onClick={onAddItem}
                    />
                    <PanelButton
                        text={'Limpar'}
                        onClick={onInputReset}
                    />
                    <PanelButton
                        text={'Eliminar T/ Itens'}
                        onClick={onListReset}
                    />
                    <PanelButton
                        text={'Eliminar Selecionados'}
                        onClick={onDeleteSelected}
                    />
                </div>
            </form>
        </div>
    );
}

function ItemButton({text, onClickEvent}) {
    return (
        <button onClick={onClickEvent}>
            {text}
        </button>
    );
}

function Item({
    index,
    item,
    isSelected,
    onDone,
    onDelete,
    onSelectItem
}) {
    return (
        <tr className={'item' + (isSelected ? ' selected' : '')}>
            <td onClick={(e) => onSelectItem(e, index)}>
                {item.text}
            </td>
            <td>
                <ItemButton
                    title={'Mark as Done'}
                    text={item.done ? '--' : 'V'}
                    onClickEvent={() => onDone(index)}
                />
            </td>
            <td>
                <ItemButton
                    title={'Delete Item'}
                    text={'X'}
                    onClickEvent={() => onDelete(index)}
                />
            </td>
        </tr>
    );
}

function List({
    maxHeight,
    listOfItems,
    listOfSelectedItems,
    onMarkDone,
    onDeleteItem,
    onSelectItem,
}) {
    const items = listOfItems.map((item, index) => {
        return (
            <Item
                key={index}
                index={index}
                item={item}
                isSelected={listOfSelectedItems.has(index)}
                onDone={onMarkDone}
                onDelete={onDeleteItem}
                onSelectItem={onSelectItem}
            />
        );
    });

    return (!items.length) ? (
            <div className="todo-list" style={{ height: maxHeight }}>
                <p>Sem itens!</p>
            </div>
        ) : (
            <div className="todo-list" style={{ height: maxHeight }}>
                <table className="items">
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )
}

export default function TodoList({ title, width, height }) {
    const [listOfItems, setListOfItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [inputText, setInputText] = useState('');

    // ControlPanel handlers
    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleInputReset(e) {
        e.preventDefault();
        setInputText('');
    }

    function handleListReset(e) {
        e.preventDefault();
        setListOfItems([]);
        setSelectedItems(new Set());
    }

    function handleAddItem(e) {
        e.preventDefault();
        const text = inputText.trim();
        if (!text) return;

        for (let item of listOfItems)
            if (text === item.text) return;

        const newItem = {text: text, done: false};
        setListOfItems([newItem, ...listOfItems]);
        setInputText('');
    }

    function handleDeleteSelected(e) {
        e.preventDefault();
        const newListOfItems = listOfItems.filter(
            (_, index) => !selectedItems.has(index)
        );

        setListOfItems(newListOfItems);
        setSelectedItems(new Set());
    }

    // List handlers
    function handleItemDeletion(itemIndex) {
        setListOfItems(listOfItems.filter(
            (_, index) => index != itemIndex
        ));

        // remove selection
        if (selectedItems.has(itemIndex)) {
            const newList = new Set(selectedItems);
            newList.delete(itemIndex);
            setSelectedItems(newList);
        }
    }

    function handleDoneClick(itemIndex) {
        const newList = [...listOfItems];
        newList[itemIndex].done = !newList[itemIndex].done;
        setListOfItems(newList);
    }

    function handleSelectItem(e, index) {
        const newSelection = new Set(selectedItems);

        if (newSelection.has(index)) {
            if (e.ctrlKey || newSelection.size === 1) {
                newSelection.delete(index);
            } else {
                newSelection.clear();
                newSelection.add(index);
            }
        }else {
            if (!e.ctrlKey && newSelection.size >= 1)
                newSelection.clear();
            newSelection.add(index);
        }
        setSelectedItems(newSelection);
    }

    if (!height || height < MIN_HEIGHT)
        height = MIN_HEIGHT;

    const listHeight = height - 216;

    const mainStyle = {
        width: width,
        height: height,
    }

    return (
        <div className="todo" style={mainStyle}>
            <Header title={title} />
            <ControlPanel
                inputText={inputText}
                onInputChange={handleInput}
                onAddItem={handleAddItem}
                onInputReset={handleInputReset}
                onListReset={handleListReset}
                onDeleteSelected={handleDeleteSelected}
            />
            <List
                maxHeight={listHeight}
                listOfItems={listOfItems}
                listOfSelectedItems={selectedItems}
                onMarkDone={handleDoneClick}
                onDeleteItem={handleItemDeletion}
                onSelectItem={handleSelectItem}
            />
        </div>
    );
}