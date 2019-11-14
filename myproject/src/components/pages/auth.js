import React from 'react';
import './auth.css';

import { Redirect } from 'react-router-dom'
 class Authorize extends React.Component
 {
    constructor(props){
      super(props);
        this.state={
    
          pagemove:"false",
          fields: {
            emailid:"balaji@gmail.com",
            password:"Balaji@123"
          },
          errors: {}
        }
      this.submitHandler=this.submitHandler.bind(this);
      this.handlechange=this.handlechange.bind(this);
      this.validateForm=this.validateForm.bind(this);
    }
    handlechange(e) 
    {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }
   submitHandler(e)
   {

    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
   
        fields["emailid"] = "";
      
        fields["password"] = "";
        this.setState({fields:fields});
      
        this.setState({pagemove:true})
    }
  }
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   
    if (!fields["emailid"])
     {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") 
    {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) 
    {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined")
     {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }
     
   render()
   {
     if(this.state.pagemove===true){
      return <Redirect to='/events' />
     }
  
     return(
          <form className="auth-form"  action="" onSubmit={this.submitHandler}>

            <div >
              <label htmlFor="email " className=" form-control btn-primary">E-mail</label>
              <input type="email"  className=" form-control" name="emailid" id="email" value={this.state.fields.emailid} onChange={this.handlechange} />
              <div style={{color: "red"}} className="errorMsg">{this.state.errors.emailid}</div>
            </div>
            <div >
              <label htmlFor="password" className=" form-control btn-primary">Password</label>
              <input type="password"   className=" form-control" name="password" id="password" value={this.state.fields.password} onChange={this.handlechange} />
              <div style={{color: "red"}} className="errorMsg">{this.state.errors.password}</div>
            </div>

        
            <div className="form-actions">
            <button type="submit"  className=" form-control">sign up</button>
             
            </div>

        </form>
     );
   }
 }

  export default Authorize;