import React,{Component} from 'react';
import Recipe from './recipe';
import {db} from './db';
import './main.css';

class Todo extends Component {

    render() {
        return (
            <div className="card-flex">
                <Recipe data={db} />
            </div>
        );
    }
}

export default Todo;