import React from 'react'
 import Contacts from './Contacts'
  import Exprience from './Exprience'
import Personal from './Personal'
import './style.css'

  
  const UserCV = () => {
    return (
      <div className='style'>   
      <Personal/>
      <Exprience/>
      <Contacts/>
      </div>
    )
  }
  
  export default UserCV