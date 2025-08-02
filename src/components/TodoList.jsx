import { useState } from 'react'
import './TodoList.css'

function Header({ title }) {
    return (
        <div className="todo-header">
            <h1>{title}</h1>
        </div>
    );
}

function ControlPanel({ text, onTextChange, onClick}) {
    return (
        <div className="todo-input">
            <form>
                <input 
                    type="text" 
                    value={text}
                    placeholder="Introduzir novo item aqui!"
                    onChange={onTextChange}
                />
                <button onClick={onClick}>Adicionar</button>
            </form>
        </div>
    );
}

function List({ listOfItems, onDeleteItem }) {
    const items = listOfItems.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item}</td>
                <td><button onClick={() => onDeleteItem(index)}>X</button></td>
            </tr>
        );
    });

    if (!items.length) {
        return (
            <div className="todo-list">
                <p>Sem itens!</p>
            </div>
        );
    }

    return (
        <div className="todo-list">
            <table className="items">
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
}

export default function TodoList({ title, width, height }) {    
    const [inputText, setInputText] = useState('');
    const [listOfItems, setListOfItems] = useState([]);

    function handleInputText(e) {
        setInputText(e.target.value);
    }

    function handleButtonClick(e) {
        e.preventDefault();
        const text = inputText.trim();
        if (!text) return;

        setInputText('');
        for (let t of listOfItems) {
            if (t == text) return;
        }
        
        setListOfItems([...listOfItems, text]);
    }

    function handleItemDeletion(itemIndex) {
        const newList = [];
        listOfItems.forEach((item, index) => {
            if (index !== itemIndex)
                newList.push(item);
        });

        setListOfItems(newList);
    }

    const style = {
        width: width,
        height: height,
    }
    
    return (
        <div className="todo" style={style}>
            <Header title={title} />
            <ControlPanel
                text={inputText}
                onTextChange={handleInputText}
                onClick={handleButtonClick}
            />
            <List 
                listOfItems={listOfItems}
                onDeleteItem={handleItemDeletion}
            />
        </div>
    );
}