//code here :)
var TodoInput = React.createClass({
  render:function(){
    return (
      <div className="todo-input">
        I want Input
      </div>
    );
  }
});

var TodoList = React.createClass({
  render:function(){
    return(
      <ul className="todo-list">
        This is todoList
        <TodoItem/>
      </ul>
    );
  }
});

var TodoItem= React.createClass({
  render:function(){
    return(
      <li className="todo-item">
        This is TodoItem
      </li>
    );
  }
});

var Todo = React.createClass({
  render:function(){
    return(
      <div className="todo">
        <h1>This is Todo List</h1>
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
});


ReactDOM.render(
  <Todo/>,
  document.getElementById('content')
);
