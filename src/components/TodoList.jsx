import { useState } from 'react'
import './TodoList.css'

function Header({ title }) {
    return (
        <div className="todo-header">
            <h1>{title}</h1>
        </div>
    );
}

function ControlPanel({ inputText, onInputChange, onAddItem }) {
    return (
        <div className="todo-cpanel">
            <form>
                <input
                    type="text"
                    value={inputText}
                    placeholder="Introduzir novo item aqui!"
                    onChange={onInputChange}
                />
                <button onClick={onAddItem}>Adicionar</button>
            </form>
        </div>
    );
}

function List({ maxHeight, listOfItems, onMarkDone, onDeleteItem }) {
    const items = listOfItems.map((item, index) => {
        return (
            <Item
                key={index}
                index={index}
                item={item}
                onDone={onMarkDone}
                onDelete={onDeleteItem}
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

function Item({index, item, onDone, onDelete}) {
    return (
        <tr className={item.done ? 'item-done' : ''}>
            <td>{item.text}</td>
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

function ItemButton({text, onClickEvent}) {
    return (
        <button onClick={onClickEvent}>
            {text}
        </button>
    );
}

export default function TodoList({ title, width, height }) {
    const [listOfItems, setListOfItems] = useState([]);
    const [inputText, setInputText] = useState('');

    function handleInput(e) {
        setInputText(e.target.value);
    }

    function handleAddItem(e) {
        e.preventDefault();
        if (!inputText) return;

        const text = inputText.trim();
        for (let t of listOfItems)
            if (text == t) return;

        setListOfItems([createItem(text), ...listOfItems]);
        setInputText('');
    }

    function handleItemDeletion(itemIndex) {
        setListOfItems(listOfItems.filter(
            (_, index) => index != itemIndex
        ));
    }

    function handleDoneClick(itemIndex) {
        const newList = [...listOfItems];
        newList[itemIndex].done = !newList[itemIndex].done;
        setListOfItems(newList);
    } 

    if (!height || height < 300)
        height = 300;

    const listHeight = height - 172;

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
            />
            <List
                maxHeight={listHeight}
                listOfItems={listOfItems}
                onMarkDone={handleDoneClick}
                onDeleteItem={handleItemDeletion}
            />
        </div>
    );
}

// Todo Items domain
function createItem(text) {
    return {text: text, done: false}
}