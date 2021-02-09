import React, { useState, useEffect } from "react";
import { data } from "./data";
//const url = "http://localhost:3000/Todos";

const UseEffectFetchData = () => {
  const [todo, setTodo] = useState([]);
  const [state, setState] = useState([]);
  const getTodos = async () => {
    const response = await fetch(url);
    const todos = await response.json();
    setTodo(todos);
  };

  const getInitialState = () => {
    return {
      isCompleted: false
    };
  };
  const onHandleClick = () => {
    // toggle the strikethrough state
    this.setState({ isCompleted: !this.state.isCompleted });
  };

  useEffect(() => {
    getTodos();
    //getInitialState();
    // onHandleClick();
  }, []);

  const changeItem = id => {
    let filtered = todo.filter(list => !list.isCompleted);

    console.log(filtered);
    setTodo(filtered);
  };

  const removeItem = id => {
    let newTodo = todo.filter(list => list.id !== id);
    setTodo(newTodo);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#236778"
        }}
      >
        <div>
          <h3>ToDo List</h3>
          <ul className="users">
            {todo.map(list => {
              const { id, Desc, isCompleted } = list;

              return (
                <ul key={id} className="todos">
                  <h4>{Desc}</h4>
                  <button onClick={() => removeItem(id)}>Remove</button>
                </ul>
              );
            })}

            <button className="btn" onClick={() => setTodo([])}>
              Clear Items
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UseEffectFetchData;
