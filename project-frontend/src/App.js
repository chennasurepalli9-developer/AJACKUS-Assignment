import { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    department: '', 
    myList : [],
  }

  saveId = (event) =>{
    this.setState({id: event.target.value})
  }

  saveFirstName = (event) =>{
    this.setState({firstname: event.target.value})
  }

  saveLastName = (event) =>{
    this.setState({lastname: event.target.value})
  }

  saveMail = (event) =>{
    this.setState({email: event.target.value})
  }

  saveDepartment = (event) =>{
    this.setState({department: event.target.value})
  }

  saveData = (event) =>{
    event.preventDefault()

    const {id, firstname, lastname, email, department} = this.state
    const newObject = {
      id,
      firstname,
      lastname,
      email,
      department
    }
    this.setState((prev) =>({myList: [...prev.myList, newObject], 
                            id: '', 
                            firstname: '',
                            lastname: '',
                            email: '',
                            department: ''}))
  }

  render(){
    const {id, firstname, lastname, email, department, myList} = this.state
    
    console.log(myList)

    return(
      <div className="bg-container">
      <h1 className="heading">User Details</h1>
      <form className="form-container" onSubmit={this.saveData}>
        <label className="label">Id</label>
        <input value={id} placeholder="Id" type="text" className="input-elements" onChange={this.saveId} />
        <label className="label">First Name</label>
        <input value={firstname} placeholder="First Name" type="text" className="input-elements" onChange={this.saveFirstName} />
        <label className="label">Last Name</label>
        <input value={lastname} placeholder="Last Name" type="text" className="input-elements" onChange={this.saveLastName} />
        <label className="label">Email</label>
        <input value={email} placeholder="Email" type="text" className="input-elements" onChange={this.saveMail} />
        <label className="label">Department</label>
        <input value={department} placeholder="department" type="text" className="input-elements" onChange={this.saveDepartment}/>
        <button className="add-button" type="submit">Add</button>
      </form>
      </div>
    )
  }
}

export default App