import React, { Component } from 'react';

class TodoItem extends Component {
    done() {
        debugger
        this.props.done(this.props.todo);
    }
    render() {
        return <li onClick={this.done}>{this.props.todo}</li>
    }
}

export default TodoItem;