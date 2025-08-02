import { useState } from 'react'
import './TodoList.css'

function Header({ title }) {
    return (
        <div className="todo-header">
            <h1>{title}</h1>
        </div>
    );
}

function ControlPanel({ onClick}) {
    return (
        <div className="todo-cpanel">
            <form>
                <input 
                    type="text" 
                    placeholder="Introduzir novo item aqui!"
                />
                <button onClick={onClick}>Adicionar</button>
            </form>
        </div>
    );
}

function List({ maxHeight, listOfItems, onDeleteItem }) {
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
            <div className="todo-list" style={{height: maxHeight}}>
                <p>Sem itens!</p>
            </div>
        );
    }

    return (
        <div className="todo-list" style={{height: maxHeight}}>
            <table className="items">
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
}

export default function TodoList({ title, width, height }) {    
    const [listOfItems, setListOfItems] = useState([]);

    function handleButtonClick(e) {
        e.preventDefault();
        const inputField = document.querySelector(".todo-input input");
        const text = inputField.value.trim();
        if (!text) return;
                
        for (let t of listOfItems) {
            if (t == text) return;
        }
        
        inputField.value = "";
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

    if (!height || height < 300)
        height = 300;

    const listHeight = height ? height - 172 : height;
    const mainStyle = {
        width: width,
        height: height,
    }

    return (
        <div className="todo" style={mainStyle}>
            <Header title={title} />
            <ControlPanel
                onClick={handleButtonClick}
            />
            <List 
                maxHeight={listHeight}
                listOfItems={listOfItems}
                onDeleteItem={handleItemDeletion}
            />
        </div>
    );
}