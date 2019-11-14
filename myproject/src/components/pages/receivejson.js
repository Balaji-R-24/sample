import React from 'react';
import axios from 'axios';

class Receivejson extends React.Component {
  constructor(props){
    super(props);
     this.state = {
      posts: {}
    }

  }
  componentDidMount()
   {
      
    axios.get(`http://localhost:5001/student1`)
    .then(res=>{
        console.log(res);
        this.setState({posts:res.data})
    })
  }

  render() {
    const subject={...this.state.posts.data};
    const postitems=Object.values(subject).map((item,i)=>(
    Object.values(item).map((items,i)=>(
        Object.values(items).map((itemss,i)=>(
        <div key={i}>
              
               <form>
                   username:<input type="text" value={items.usernamedb} readOnly/>
                   password:<input type="text" value={items.passworddb} readOnly/>
               </form>
                {console.log(itemss.usernamedb)}
         
            
            </div>
 ))))));
 
    return(
        <div>
             {postitems}
        </div>
    );
  }
}


export default Receivejson;
