import React, { Component } from "react";
import Search from "./Search";
import Calculate from "./Calculate";
import axios from "axios";

class PortfolioContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      name: '',
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      name: e.target.value
    }, ()=>this.search())
  }

  search(){
    axios.post("http://localhost:3000/search", {
      search: this.state.name
    }).then( (data) => { 
      this.setState({
        search_results: [...data.data.currencies]
      })
    }).catch((data) =>{
      debugger
    })
  }

  render(){
    return(
      <div>
        <Search searchResults={this.state.search_results} handleChange = {this.handleChange}/>
        <Calculate />
      </div>
    );    
  }
}

export default PortfolioContainer;