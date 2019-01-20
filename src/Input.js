import React, { Component } from 'react';import styled from "styled-components";
import './reset.css';
import './App.css';
  
  class InputForm extends Component {
    constructor(props) {
      super(props);
      this.state = {textvalue: '', numbervalue : ''};
  
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange1(event) {
      event.preventDefault();
      this.setState({textvalue: event.target.value});
    }
    handleChange2(event) {
      event.preventDefault();
      this.setState({numbervalue: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.getdata(this.state.textvalue, this.state.numbervalue);
      this.setState({textvalue: '', numbervalue : ''});
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input className="inputbox1" type="text" value={this.state.textvalue} onChange={this.handleChange1} />
            <input className="inputbox2" type="text" value={this.state.numbervalue} onChange={this.handleChange2} />
            <button className="inputbox3" type="submit">+</button>
          </div>
        </form>
      );
    }
  }
  
  // const Inputarea = styled.input`
    


  // `
  // const Inputbutton = styled.input`
  // `
  
  
  export default InputForm;
  