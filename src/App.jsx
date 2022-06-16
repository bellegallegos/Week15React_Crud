import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Waiter from './Waiter';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: "Grimaldi's Reservation Request List",
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.name.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let psize = this.refs.psize.value;
    let location = this.refs.location.value;
    let pnumber = this.refs.pnumber.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){   //new
      let data = {
        name, psize, location, pnumber, address
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].psize = psize;
      datas[index].location = location;
      datas[index].pnumber = pnumber;
      datas[index].address = address;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.psize.value = data.psize;
    this.refs.location.value = data.location;
    this.refs.pnumber.value = data.pnumber;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  

  

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="Name" className="formField" />
          <input type="text" ref="psize" placeholder="Party Size" className="formField" />
          <input type="text" ref="location" placeholder="Location: Inside or Outside" className="formField" />
          <input type="text" ref="pnumber" placeholder="Phone Number" className="formField" />
          <input type="text" ref="address" placeholder="E-mail Address" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <div><Header /> </div>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. Server Assigned: <Waiter/> <br></br>
               Party: {data.name}, {data.psize}, {data.location}, {data.pnumber}, {data.address}  
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;