import React, { Component } from "react";

class Search extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const searchResults = this.props.searchResults.map( curr => <li key={curr.id}
    data-id = {curr.id}  className = "currency-list-item">
      <a href="#" className = "currency">
        <span>{ curr.name }</span>
        <span>{ curr.currency_symbol }</span>
      </a>
    </li>)
    return(
      <div>
        <h1>CryptoCurrency Portfolio Container</h1>
        <form>
          <div className = "form-group">
            <label>Search for a CryptoCurrency:</label><br/>
            <input autoComplete="off" type="text" name="name"
            className="field" placeholder="Ex:- bitcoin, litecoin" 
            value={this.props.name} onChange={this.props.handleChange}>
            </input>
          </div>
          <div>
            {searchResults}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;