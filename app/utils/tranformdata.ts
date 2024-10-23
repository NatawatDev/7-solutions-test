import { UserData, KeyDepartmentData, DepartmentData } from "../types";

const countUsersGender = (departmentData: DepartmentData, gender: string) => {
  if (gender === 'male') {
    departmentData.male += 1
  } else if (gender === 'female') {
    departmentData.female += 1
  }
}

const countUsersHair = (departmentData: DepartmentData, hairColor: string) => {
  if (!departmentData.hair[hairColor]) {
    departmentData.hair[hairColor] = 0;
  }
  departmentData.hair[hairColor] += 1;
}

const transformData = (value: UserData[]) => {
  const users = value
  const result: KeyDepartmentData = {}
  const arrOfAge: number[] = []
  
  users.forEach((user) => {
    const { company, address, age, hair, firstName, lastName, gender } = user
    const department = company.department
    const postalCode = address.postalCode
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
        hair: {},
        addressUser: {},
      }        
    }
    const departmentData = result[department]

    countUsersGender(departmentData, gender)
    countUsersHair(departmentData, hairColor)

    departmentData.addressUser[fullName] = postalCode
    
    departmentData.ageRange = `${minAge}-${maxAge}`                     
  })
  
  return result
}

export default transformData 