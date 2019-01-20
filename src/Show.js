import React, { Component } from 'react';import styled from "styled-components";
import './reset.css';
import './App.css';

  class ShowItem extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      event.preventDefault();
      this.props.getnode(event.target.parentNode.parentNode);
    }
  
    render() {
      return (
        <>
            <div className = "contents">
              <div className = "contents_container">
                <span className = "contents1">{this.props.item}</span>
                <span className = "contents2">{this.props.number}</span>
                <button className = "contents3" onClick={this.handleClick}>x</button>
              </div>
              <span className = "contents4">{Math.floor(this.props.time/60/60)}{" h"}</span>
            </div> 
        </>
      );
    }
  }

  
  export default ShowItem;