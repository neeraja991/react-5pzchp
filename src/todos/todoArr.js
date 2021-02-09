import React from "react";
import { data } from "./data";

const UseStateArray = () => {
  //const [people, setPeople] = React.useState(data);
  const [todo, setTodo] = React.useState(data);
  const [todoisComplete, setToDoisComplete] = React.useState(data);
  //const [todo, setTodo] = useState<ITodo[]>([]);
  /* const completeItem = id => {
    let filtered = todo.filter(list => list.isCompleted == list.isCompleted);
    if (filtered) {
      filtered = false;
    } else {
      filtered = true;
    }
    console.log(filtered);
    setTodo(filtered);
  };*/

  const changeItem = isCompleted => {
    let filtered = todoisComplete.filter(
      list => list.isCompleted == list.isCompleted
    );
    if (filtered) {
      filtered = true;
    } else {
      filtered = false;
    }
    console.log("x");
    setToDoisComplete(filtered);
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
          {todo.map(list => {
            const { id, name, isCompleted } = list;

            return (
              <div key={id} className="item">
                <h4 onClick={() => changeItem(isCompleted)}>{name}</h4>
                <button onClick={() => removeItem(id)}>Remove</button>
              </div>
            );
          })}
          <button className="btn" onClick={() => setTodo([])}>
            Clear Items
          </button>
        </div>
      </div>
    </>
  );
};

export default UseStateArray;
