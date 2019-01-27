import React, { Component } from 'react';
import InputForm from './Input';
import ShowItem from './Show';
import './reset.css';
import './App.css';



class App extends Component {

  _get_localStorage = () => {
    const start_arr = JSON.parse(localStorage.getItem("data"));
    return (start_arr!==null ? start_arr : []);
  }

  constructor(props) {
    super(props);
    this.state = {itemarr:this._get_localStorage()};
  }

  _putState = (added_data, added_number) => {
    let added_array = this.state.itemarr;
    let d = new Date();
    let ms_set = d.getTime();
    added_array.unshift({item:added_data, number:added_number, time_set : ms_set, time_passed : 0});
    localStorage.setItem("data", JSON.stringify(added_array));
    this.setState({itemarr:added_array});
  }

  _delete_target = target_id => {
    let sliced_array = this.state.itemarr;
    sliced_array.splice(target_id,1);
    localStorage.setItem("data", JSON.stringify(sliced_array));
    this.setState(sliced_array);
  }

  _get_targetnode = targetnode => {
    let i = 0;
    while(targetnode.className === "contents" ){
      targetnode = targetnode.previousSibling;  
      i++; 
    }
    this._delete_target(i-1);
  }

  render() {
    return (
      <>
        <div className = "container">
        <InputForm getdata = {this._putState} />
        
        {  
          this.state.itemarr.map( (itemcontainer,index) =>
            { 
              return <ShowItem item = {itemcontainer.item} number = {itemcontainer.number} time = {itemcontainer.time_passed} getnode = {this._get_targetnode} key={index} />
            }   
          ) 
        }
        </div>
      </>
    );
  }



  componentDidMount() {
    setInterval( () => {
      let d = new Date();
      let ms_now = d.getTime();
      let basic_array = this.state.itemarr;  
      basic_array.map( item => item.time_passed = (ms_now - item.time_set)/(1000) );   
      localStorage.setItem("data", JSON.stringify(basic_array));
      this.setState({itemarr:basic_array});
    }, 1000);    
  }
}

export default App;


