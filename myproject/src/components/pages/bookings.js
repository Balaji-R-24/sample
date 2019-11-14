import React,{Component} from 'react';
import {Table, Button } from 'reactstrap';
import axios from 'axios';
class Bookings extends Component
{
    constructor(props)
    {
      super(props);
      this.state=
      {
        books:[]
      }
    }
    componentDidMount()
    {
      axios.get('http://jsonplaceholder.typicode.com/users').then((response)=>{
        console.log("hello");
        this.setState({books:response.data})
      });
    }
    render()
    {
      let books=this.state.books.map((book)=>{
      return(
        <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.name}</td>
        <td>{book.username}</td>
        <td>
          <Button color="success" size="sm" className="mr-2"> Edit</Button>
          <Button color="danger" size="sm" >Delete</Button>
        </td>
      </tr>
      )});
      return(<div className="App container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {books}
          </tbody>
        </Table>
      </div>)
    }
}
export default Bookings;