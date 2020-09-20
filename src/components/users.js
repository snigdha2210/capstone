import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "../apis/axios";
import { Link } from "react-router-dom";

const UserPage = (data) => {
  const listItems = data.map((todo) => (
    <li
      style={
        todo.completed ? { textDecoration: "line-through", color: "red" } : {}
      }
    >
      {todo.title}
    </li>
  ));

  ReactDOM.render(
    <div style={{ margin: "2em" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>TODO List</h2>
      <ul style={{ fontSize: "1.5em" }}>{listItems}</ul>
      <a href="/users"> Back to Users Page</a>
    </div>,
    document.getElementById("users")
  );
};

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: []
    };
  }

  onClickHandler(ID) {
    const id = ID;
    axios
      .get(`/users/${id}/todos`, {})
      .then((res) => {
        const data = res.data;
        UserPage(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUsersData() {
    axios
      .get(`/users`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const users = data.map((u) => (
          <div className="item" key={u.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{u.name}</h2>
                <p>{u.email}</p>
              </div>
            </div>
            <div class="right floated content">
              <button
                class="ui primary button"
                onClick={(e) => this.onClickHandler(u.id)}
              >
                <Link
                  to={`/users/:${u.id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  TODO
                </Link>
              </button>
            </div>
          </div>
        ));

        this.setState({
          users
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.getUsersData();
    document.title = "Users Page";
  }
  render() {
    return (
      <>
        <div className="ui container" id="users">
          <Link to="/">
            <h4 style={{ textAlign: "center", marginTop: "2em" }}>Home</h4>
          </Link>
          <div className="ui relaxed animated divided list">
            {this.state.users}
          </div>
        </div>
      </>
    );
  }
}
