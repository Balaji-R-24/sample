import React from 'react';
import { Redirect } from 'react-router-dom'


class Customerform extends React.Component
{
     constructor(props){
          super(props);
          this.state={
               fields:{
                  
                    firstname:'',
                    lastname:'',
                    dob:'',
                    address1:'',
                    address2:'',
                    area:'',
                    city:'',
                    state:'',
                    country:'',
                    pincode:'',
                    mobileno:'',
                    emailid:''
               },
               backtologin:"false",
               errors: {}
}
          this.backtologin=this.backtologin.bind(this);
          this.formcontentchange=this.formcontentchange.bind(this);
          this.submitcustomerform=this.submitcustomerform.bind(this);
     }
     backtologin()
     {
          this.setState({backtologin:true})
     }
     formcontentchange(e){
          
            let fields = this.state.fields;
            fields[e.target.name] = e.target.value;
            this.setState({
              fields
            });
      
          
     }
     submitcustomerform(e)
     {
        
           e.preventDefault();
          if (this.validateForm()) 
          {
               let fields = {};
          
               fields["firstname"] = "";
               
               fields["lastname"] = "";
               fields["dob"] = "";
               
               fields["address1"] = "";
               fields["address2"] = "";
               
               fields["area"] = "";
               fields["city"] = "";
               
               fields["state"] = "";
               fields["country"] = "";
               
               fields["pincode"] = "";
               fields["mobileno"] = "";
               
               fields["emailid"] = "";
               this.setState({fields:fields});
          }
     }
     validateForm() {

          let fields = this.state.fields;
          let errors = {};
          let formIsValid = true;

          // validation of firstname
          if(!fields["firstname"])
          {
               formIsValid=false;
               errors["firstname"] = "*Please enter your firstname.";
          }
          if (typeof fields["firstname"] !== "undefined") 
          {
            //regular expression for email validation
            var patternfirstname= /^[a-zA-Z]+$/;
            if (!patternfirstname.test(fields["firstname"])) {
              formIsValid = false;
              errors["firstname"] = "*Please enter valid firstname.";
            }
          }
          // validation of lastname
          if(!fields["lastname"])
          {
               formIsValid=false;
               errors["lastname"] = "*Please enter your lastname.";
          }
          if (typeof fields["lastname"] !== "undefined") 
          {
            //regular expression for email validation
            var patternlastname = /^[a-zA-Z]+$/;
            if (!patternlastname.test(fields["lastname"])) {
              formIsValid = false;
              errors["lastname"] = "*Please enter valid lastname.";
            }
          }

          //validation of Date of Birth


          if (!fields["dob"])
          {
           formIsValid = false;
           errors["dob"] = "*Please enter your date of birth.";
         }
     
         if (typeof fields["dob"] !== "undefined") 
         {
           //regular expression for email validation
           var patterndob = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
           if (!patterndob.test(fields["dob"])) {
             formIsValid = false;
             errors["dob"] = "*Please enter valid Date of Birth.";
           }
         }

         //validation of mobileno
         
         if (!fields["mobileno"])
         {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your Mobile number.";
        }
    
        if (typeof fields["mobileno"] !== "undefined") 
        {
          //regular expression for email validation
          var patternmobileno = /^([0-9]{10})$/;
          if (!patternmobileno.test(fields["mobileno"])) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter valid Mobile number.";
          }
        }
 

          //validation of email id
          if (!fields["emailid"])
           {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
          }
      
          if (typeof fields["emailid"] !== "undefined") 
          {
            //regular expression for email validation
            var patternemailid = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!patternemailid.test(fields["emailid"])) {
              formIsValid = false;
              errors["emailid"] = "*Please enter valid email-ID.";
            }
          }
      
         //validation of errors
          this.setState({
            errors: errors
          });
          return formIsValid;
      
      
        }

     render()
     {
          if(this.state.backtologin===true)
          {
               return <Redirect to='/auth' />
          }
          const mystyle = {
               color: "red",
               float:"right"
             };
          return(
               <div>
               <form onSubmit={this.submitcustomerform}>
                    <div className="container jumbotron card">
                    <div ><button style={{float:"right"}} className=" btn-danger block" onClick={this.backtologin} >log out</button></div>
                          <div><h1><center>Customerform-registration </center></h1></div>


                    <div className="row ">
                         <div className="col-2 "><center> <label className="form-control btn-primary">firstname<span style={mystyle}>*</span></label></center></div>
                         <div className="col-2 " ><input className="form-control" type="text" name="firstname" onChange={this.formcontentchange}/></div>
                               <div  style={{color: "red"}} className="  col-2 errorMsg">{this.state.errors.firstname}</div>
                         <div className="col-2 "> <center><label className="form-control btn-primary">lastname<span style={mystyle}>*</span></label></center> </div>
                         <div className="col-2 ">  <input className="form-control"type="text" name="lastname"  onChange={this.formcontentchange} /></div>
                               <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.lastname}</div>
                    </div>


                    <div className="row">
                         <div className="col-2 "><center> <label className="form-control btn-primary">Date of Birth<span style={mystyle}>*</span></label></center></div>
                         <div className="col-2"><input className="form-control"type="text" name="dob"  onChange={this.formcontentchange}/></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.dob}</div>
                         <div className="col-2 "> <center><label className="form-control btn-primary">Address1</label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="text" name="address1"  onChange={this.formcontentchange} /></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.address1}</div>
                    </div>
                    
                    <div className="row">
                         <div className="col-2 "> <center><label className="form-control btn-primary">Address2</label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="text" name="address2"  onChange={this.formcontentchange}/></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.address2}</div>
                         <div className="col-2 "> <center><label className="form-control btn-primary">Area</label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="text" name="area"  onChange={this.formcontentchange}/></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.area}</div>
                    </div>
                    
                    <div className="row">
                         <div className="col-2 "> <center><label className="form-control btn-primary">City</label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="text" name="city"  onChange={this.formcontentchange} /></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.city}</div>
                         <div className="col-2 "> <center><label className="form-control btn-primary">State</label></center> </div>
                         <div className="col-2 ">  <select className="form-control" name="country" id="stateSel" size="1">
                                                       <option value="" defaultChecked="selected"> select State</option>
                                                       <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                       <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                       <option value="Assam">Assam</option>
                                                       <option value="Bihar">Bihar</option>
                                                       <option value="Chattisgarh">Chattisgarh</option>
                                                       <option value="Goa">Goa</option>
                                                       <option value="Gujarat">Gujarat</option>
                                                       <option value="Haryana">Haryana</option>
                                                       <option value=" Himachal Pradesh"> Himachal Pradesh</option>
                                                       <option value="Jharkhand">Jharkhand</option>
                                                       <option value="Karnataka">Karnataka</option>
                                                       <option value="Kerala">Kerala</option>
                                                       <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                       <option value="Maharashtra">Maharashtra</option>
                                                       <option value="Manipur">Manipur</option>
                                                       <option value="Meghalaya">Meghalaya</option>
                                                       <option value="Mizoram">Mizoram</option>
                                                       <option value="Nagaland">Nagaland</option>
                                                       <option value=" Odisha"> Odisha</option>
                                                       <option value="Punjab">Punjab</option>
                                                       <option value="Rajasthan">Rajasthan</option>
                                                       <option value=" Sikkim"> Sikkim</option>
                                                       <option value=" Tamil Nadu">Tamil Nadu</option>
                                                       <option value="Telengana">Telengana</option>   <option value=" Tripura"> Tripura</option>
                                                       <option value="  Uttar Pradesh"> Uttar Pradesh</option>
                                                    </select></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.state}</div>
                    </div>
                    
                    <div className="row">
                         <div className="col-2 "> <center><label className="form-control btn-primary">Country</label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="text" name="country"  onChange={this.formcontentchange} /></div>
                               <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.countryid}</div>
                         <div className="col-2 "> <center><label className="form-control btn-primary">Pincode</label></center> </div>
                         <div className="col-2 "> <input className="form-control" type="text" name="pincode"  onChange={this.formcontentchange}/></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.pincode}</div>
                    </div>
                   
                    <div className="row">
                         <div className="col-2 "> <center><label className="form-control btn-primary">Mobileno<span style={mystyle}>*</span></label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="text" name="mobileno"  onChange={this.formcontentchange} /></div>
                               <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.mobileno}</div>
                         <div className="col-2 "> <center><label className="form-control btn-primary">EmailId<span style={mystyle}>*</span></label></center> </div>
                         <div className="col-2 ">  <input className="form-control" type="email" name="emailid"  onChange={this.formcontentchange}/></div>
                              <div style={{color: "red"}} className="col-2 errorMsg">{this.state.errors.emailid}</div>
                    </div> 
                    <div className="row">
                         <div className="col-6"><button className="btn  btn-success" type="submit" >save</button></div>
                     
                         {/* <div className="col-6"> <button className="form-control btn-success " >edit</button></div> */}
                     </div>
               </div>
               </form>
               </div>
          )
       }
}

export default Customerform;
