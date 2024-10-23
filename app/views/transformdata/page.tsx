'use client'

import React, { useState, useEffect } from 'react'
import transformData from '../../utils/tranformdata'

const Transformdata = () => {
  const [userData, setUserData] = useState({})

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users')
      const result = await response.json()      
      const transformedData = transformData(result.users)
      setUserData(transformedData)
    } catch (error) {
      console.log(error);
    }    
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
    <div>
      <h1>User Data</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}

export default Transformdata