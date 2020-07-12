import React, { Component } from "react";
import "./ToDoApp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default class ToDoApp extends Component {
  state = {
    inputText: "",

    items: [],
  };
  handleChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  storeItems = (event) => {
    event.preventDefault();
    const { inputText, items } = this.state;

    this.setState({
      items: [...items, inputText],
      inputText: "",
    });
  };

  deleteItem = (index) => {
    const newItem = this.state.items;

    newItem.splice(index, 1);

    this.setState({
      items: newItem,
    });
  };

  render() {
    const { inputText, items } = this.state;
    console.log(items);

    return (
      <div className="todo-container">
        
          <h1>To Do App </h1>

          <form className="input-section" onSubmit={this.storeItems}>
            <div className="input-div">
              <input
                type="text"
                value={inputText}
                onChange={this.handleChange}
                placeholder="Enter Items..."
              />
            </div>
            <div className="plus">
              <FontAwesomeIcon icon={faPlus} onClick={this.storeItems} />
            </div>
          </form>
        
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <div className="fa-edit">
                <FontAwesomeIcon icon={faEdit} onClick={() => this.editItem} />
              </div>
              <div className="fa-trash">
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => this.deleteItem(index)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
