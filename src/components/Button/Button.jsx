import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../context'
import './Button.css'
 


function Button(props) {
  
  const {despatcherEvents} = useContext(AppContext)

  let categoriesSelected = "New"
  function sidebarHandler(){
    despatcherEvents('Side-Bar-Click', props.item.name);
    categoriesSelected = props.item.name
  }

  return (
    <Link className='side-btn'>
    <div className="btn-left">
    <button
        onClick={sidebarHandler}
        style={{ background: props.item.name === categoriesSelected && '#FC1503' }}
        type="button"
        className="btn btn-outline-light left-section-button p-1 px-3"
      >
        {props.item.icon}
        <span className="mx-1 btn-text">{props.item.name}</span>
      </button>
      </div>
      </Link>
    );
}

export default Button