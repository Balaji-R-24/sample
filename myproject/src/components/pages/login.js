import React from 'react';
// import axios from 'axios';


export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password:''
    }
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange = event => {
    let name=event.target.name;
    let value=event.target.value;


   this.setState({[name]:value})
   
  
  }

  handleSubmit = event => {
    event.preventDefault();
  
    console.log(this.state)
    const url='http://127.0.0.1:5001/student1';
    fetch(url,{
			method: 'POST',
			body: JSON.stringify(
			this.state
			),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			})
	}
   
  

  render() {
    // let {userid,passwordid}=this.state;
    return (
      <div>
        <form  method="POST" name="myform" onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="username" value={this.userid}
            onChange={this.handleChange} />
            <input type="text" name="password" value={this.passwordid} 
            onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}