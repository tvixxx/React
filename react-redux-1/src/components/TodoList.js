import React from 'react';

const TodoItem = ({name, isComplete}) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete}/> {name}
    </li>
);

export default (props) => (
    <ul>
        {props.todos.map(todo => <TodoItem  key={todo.id} {...todo} /> )}
    </ul>
);

