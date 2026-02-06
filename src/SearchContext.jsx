import React, { useContext } from 'react'
import { data } from './NavBar';
const SearchContext = () => {
  let search=useContext(data);
  console.log(search)
  return (
    <div>
      
    </div>
  )
}

export default SearchContext
