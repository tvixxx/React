import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const todoChangeHandler = (val) => store.dispatch({type: 'CURRENT_UPDATE', payload: val});

const render = () => {
    const state = store.getState();
    ReactDOM.render(
        <App todos={state.todos}
             currentTodo={state.currentTodo}
             changeCurrent={todoChangeHandler}
        />,
        document.getElementById('root')
    );
};

render();
store.subscribe(render);

// setTimeout(() => {
//     store.dispatch({type: 'TODO_ADD', payload: {id: 4, name: 'New Todo', isComplete: false}})
// },1000);

registerServiceWorker();
