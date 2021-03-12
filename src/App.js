import React from 'react'
import './App.css';
import Documentation from "./Documentation"
import Counter from "./Counter"
import Employee from "./Employee"

// const employeInfo = [
//   {
//     employeeId: "1",
//     firstName: "Jack",
//     lastName: "Smith",
//     age: "21"
//   },
//   {
//     employeeId: "2",
//     firstName: "Stephanie",
//     lastName: "Kyle",
//     age: "21"
//   },
//   {
//     employeeId: "3",
//     firstName: "George",
//     lastName: "Masih",
//     age: "21"
//   },
//   {
//     employeeId: "4",
//     firstName: "Anthony",
//     lastName: "Whate",
//     age: "21"
//   }
// ]

const employee = {
  id: "ABC",
  name: "Anthony",
  salary: "$10k",
  address: {
    salary: "$80k",
    street: "210 Washington Street",
    country: "Canada",
    province: "Ontario",
    zones: {
      plantZone: "78",
      alienZone: "41"
    }
  }
};

function App() {
  {/* Destructuring and Aliasing */ }
  // const { name, id, address } = employee;
  // const { name, id, salary: employeeSalary, address } = employee;
  // const { salary: addressSalary } = address;

  const {
    name,
    id,
    address: {
      street,
      country,
      province,
      zones: { plantZone: myPlantZone, alienZone }
    }
  } = employee;

  return (
    <div className="App">
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{street}</h2>
      <h2>{country}</h2>
      <h2>{myPlantZone}</h2>

      {/* <h2>{employeeSalary}</h2>
      <h2>{addressSalary}</h2> */}

      {/* <h2>{`The employee's address: ${street}, ${country}, ${province}`}</h2> */}

      {/* <header className="App-header">
        <h2>Welcome to my counter</h2> */}
      {/* <Counter /> */}
      {/* <Employee firstName="Jack" lastName="Peppy" />
        <Employee firstName="Smith" lastName="kayle" />
        <Employee firstName="George" lastName="Masih" />
        <Employee firstName="Anthony" lastName="Whate" /> */}


      {/* {employeInfo.map(employee => {
          // const { firstName, lastName, age } = employee;
          return (
            <Employee key={employee.employeeId} {...employee} />
          )
        })} */}
      {/* </header> */}
    </div>
  );
}

export default App;
