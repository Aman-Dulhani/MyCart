import React from "react";
import DropDown from './DropDown'
import { useState } from 'react'
import { search } from '../actions/cartActions'
import { connect } from 'react-redux'

const Search = (props) => {

  const { Search } = props
  const [searchText, setSearchText] = useState('')

  const onChange = (e) => {
    setSearchText(e.target.value)
    console.log(e.target.value)
    Search(e.target.value)
  }

  return(
    <div className="searchBar">
      <DropDown />
      <div className='inputBar'>
          <input
          className="search"
          placeholder='Search By Name'
          type="text"
          value={searchText}
          onChange={onChange}
          />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    Search: text => {dispatch(search(text))}
  }
} 

export default connect(null,mapDispatchToProps)(Search);
