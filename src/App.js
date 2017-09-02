import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
//import TodoItem from './TodoItem';
import './App.css';

var self = this;

class TodoItem extends Component {
    done() {
        debugger
        self.props.done(this.props.todo);
    }
    render() {
        return <li onClick={this.done}>{this.props.todo}</li>
    }
}

class App extends Component {
    constructor() {
        super();
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        this.state = {
            todos: todos
        };
    }
    // addTask = () => {
    //     this.setState({
    //         newItem: this.state.item
    //     })
    // };
    addTask = () => {
        let todos = this.state.todos;
        todos.push(ReactDOM.findDOMNode(this.refs.myInput).value);
        ReactDOM.findDOMNode(this.refs.myInput).value = "";
        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ todos: todos });
    }

    done = (todo) => {
        let todos = this.state.todos;
        todos.splice(todos.indexOf(todo), 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.setState({ todos: todos });
    }

    handleChange = (e) => {
        this.setState({item: e.target.value})
    };
    _handleKeyPress = (e) => {
        debugger;
        if (e.key === 'Enter') {
            this.setState({todos: e.target.value})
        }
    };
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React4</h2>
                </div>
                <h1>How to start a project list</h1>
                <input
                    ref="myInput"
                    autoFocus={true}
                    type="text"
                />
                <button onClick={this.addTask}>Click it</button>
                <ul>
                    {
                        this.state.todos.map(function(todo) {
                            debugger;
                            return <TodoItem todo={todo} done={this.done} />
                        }.bind(this))
                    }
                </ul>
            </div>
        );
    }

}

export default App;
