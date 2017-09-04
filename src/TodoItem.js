import React from 'react';
import createReactClass from 'create-react-class';

const TodoItem = createReactClass({
	done() {
        this.props.done(this.props.todo);
    },
    render() {
        return <li onClick={this.done}>{this.props.todo}</li>
    }
});

export default TodoItem;