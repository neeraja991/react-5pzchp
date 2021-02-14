import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
      completed: {},
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.term.length < 34) {
      this.setState({
        term: "",
        items: [...this.state.items, this.state.term]
      });
    } else {
      alert("limit to 33 characters");
    }
  };

  handleRemove(index, event) {
    if (confirm("are you sure?")) {
      let todoArray = this.state.items;
      todoArray.splice(index, 1);
      this.setState({
        items: todoArray
      });
    }
  }
  handleCheck(index, event) {
    // code to create line through completed item
    this.setState(state => ({
      completed: { ...state.completed, [index]: !state.completed[index] }
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>To Do App</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input
            className="input"
            value={this.state.term}
            onChange={this.onChange}
          />
          <button className="btn btn-primary">Submit</button>
        </form>
        <ol className="list-group">
          {this.state.items.map((item, index) => (
            <li
              style={{
                textDecoration: this.state.completed[index]
                  ? "line-through"
                  : ""
              }}
              key={index}
            >
              <input
                id="chk"
                onChange={() => this.handleCheck(index)}
                type="checkbox"
              />{" "}
              {item}
              <button
                className="btn btn-info"
                onClick={event => this.handleRemove(index, event)}
              >
                X
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}





export default App;
