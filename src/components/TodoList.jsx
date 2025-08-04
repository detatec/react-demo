import { useState } from 'react'
import './TodoList.css'

function Header({ title }) {
    return (
        <div className="todo-header">
            <h1>{title}</h1>
        </div>
    );
}

function ControlPanel({ onClick }) {
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

function List({ maxHeight, listOfItems, onDeleteItemAt }) {
    const items = listOfItems.map((item, index) => {
        return (
            <tr key={index}>
                <td >{item}</td>
                <td>
                    <button onClick={onDeleteItemAt(index)}>X</button>
                </td>
            </tr>
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

    function handleButtonClick(e) {
        e.preventDefault();

        const inputField = document.querySelector(".todo-cpanel input");
        const text = inputField.value.trim();
        if (!text) return;

        for (let t of listOfItems) {
            if (t == text) return;
        }

        inputField.value = "";
        setListOfItems([...listOfItems, text]);
    }

    function handleItemDeletion(itemIndex) {
        return function() {
            const newList = [];
            listOfItems.forEach((item, index) => {
                if (index !== itemIndex)
                    newList.push(item);
            });

            setListOfItems(newList);
        }
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
                onClick={handleButtonClick}
            />
            <List
                maxHeight={listHeight}
                listOfItems={listOfItems}
                onDeleteItemAt={handleItemDeletion}
            />
        </div>
    );
}