import { Component } from "react";

import "./App.css";

class App extends Component {
  render(){
    return(
      <div className="bg-container">
      <h1 className="heading">User Details</h1>
      <form className="form-container">
        <label className="label">Id</label>
        <input type="text" className="input-elements" />
        <label className="label">First Name</label>
        <input type="text" className="input-elements" />
        <label className="label">Last Name</label>
        <input type="text" className="input-elements" />
        <label className="label">Email</label>
        <input type="text" className="input-elements" />
        <label className="label">Department</label>
        <input type="text" className="input-elements" />
        <button className="add-button" type="submit">Add</button>
      </form>
      </div>
    )
  }
}

export default App