'use client'

import React, { useState, useEffect } from 'react'

const tranformdata = () => {
  const [userData, setUserData] = useState([])

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/users')
      const result = await response.json()
      tranformData(result)
    } catch (error) {
      console.log(error);
    }    
  }

  const tranformData = (responseValue) => {
    const users = responseValue.users
    const result = {}
    const arrOfAge = []
    users.forEach((user) => {
      const { company, address, age, hair, firstName, lastName, gender } = user
      const department = company.department
      const potalCode = address.postalCode
      const hairColor = hair.color
      const fullName = `${firstName}${lastName}`
      arrOfAge.push(age)
      const minAge = Math.min(...arrOfAge)
      const maxAge = Math.max(...arrOfAge)
      if (!result[department]) {
        result[department] = {
          male: 0,
          female: 0,
          ageRange: "",
          hair: {
            Black: 0,
            Blond: 0,
            Chestnut: 0,
            Brown: 0,
            Gray: 0,
            Red: 0,
            White: 0,
            Green: 0,
            Purple: 0
          },
          addressUser: {},
        }        
      }
      result[department][gender]++;
      result[department].hair[hairColor]++;    
      result[department].addressUser[fullName] = potalCode;
      result[department].ageRange = minAge+'-'+maxAge      
                  
    })
    
    setUserData((prev) => [...prev, result])

    console.log(userData);
    
  }

  useEffect(() => {
    fetchUserData()
  }, [])


  return (
    <div>
      <h1>User Data</h1>
      {/* <div>
        {userData}
      </div> */}
    </div>
  );
}

export default tranformdata