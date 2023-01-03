import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css";

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true
      }
    }

    handleLogin() {
        
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>NavBarForm</h1>
        <button></button>
      </div>
    )
  }
}

export default NavBarForm