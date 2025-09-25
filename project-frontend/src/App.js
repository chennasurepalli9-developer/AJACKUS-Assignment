import { Component } from "react";

import "./App.css";

class app extends Component {
  render(){
    return(
      <>
        <h1>User Details</h1>
      <form>
        <label>Id</label>
        <input type="text" />
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="text" />
        <label>Department</label>
        <input type="text" />
      </form>
      </>
    )
  }
}

export default app