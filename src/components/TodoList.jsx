import { useState } from 'react'
import './TodoList.css'

function Header({ title }) {
    return (
        <div className="todo-header">
            <h1>{title}</h1>
        </div>
    );
}

function Input({ text, onTextChange, onClick}) {
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

function List({ listOfItems }) {
    if (!listOfItems) return <p>Sem Itens!</p>;

    const items = listOfItems.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item}</td>
                <td>X</td>
            </tr>
        );
    });

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

export default function TodoList({ title }) {    
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
    
    return (
        <div className="todo-container">
            <Header title={title} />
            <Input
                text={inputText}
                onTextChange={handleInputText}
                onClick={handleButtonClick}
            />
            <List 
                listOfItems={listOfItems}
            />
        </div>
    );
}