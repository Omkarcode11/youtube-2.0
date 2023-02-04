import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../../context'; 

function SearchBar() {
   const [searchVal,setSearchVal] = useState('')
   const {despatcherEvents} = useContext(AppContext)
 
function search(){
  despatcherEvents('search', searchVal);
}

  return (
    <form className="d-flex  my-lg-0">
      <input
        className="form-control "
        type={'text'}
        placeholder="Search.."
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <Link className="Link" to={`/`}>
        <button onClick={search} className="btn btn-dark mx-1" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </Link>
    </form>
  );
}

export default SearchBar