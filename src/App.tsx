import React from 'react';
import './App.css';

// TODO js Dimych tests and etc


const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']

const users = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Ignat'},
]


const liElements = users.map((n => <div key={n.id}><li>{n.name}</li></div>))

function App() {
    return (
        <div className="App">
            {liElements}
        </div>
    );
}

export default App;
