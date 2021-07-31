import Header from './Components/Header';
import { useState } from 'react';
import { EmployeeList } from './Components/EmployeeList';
import { AddEmployee } from './Components/addEmployee';
import React from 'react';
import { Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Product } from './pages/Product';
import { ProductDetail } from './pages/ProductDetail';
//add validation...

function App() {
  var title = 'Emp management';

  const onDelete = employee => {
    console.log('delete called...', employee);
    setEmployees(
      employeeList.filter(e => {
        return e !== employee;
        //101 --> 102 <-- >103
      })
    );
  };

  const addEmployee = (employeename, age) => {
    console.log('adding ', employeename, age);
    if (employeename === '' || age === '') {
      alert('please fill email');
    }
    //auto increment... eId will ....
    const employee = {
      eId: Math.random(Math.random() * 100) + 1,
      eName: employeename,
      eAge: age
    };
    //spread operator  ... to use expand and iterate in array we can use spread operator,... angular ,java
    //array ->push
    setEmployees([...employeeList, employee]);
  };
  const [employeeList, setEmployees] = useState([
    {
      eId: 101,
      eName: 'jay',
      eAge: 20
    },
    {
      eId: 102,
      eName: 'raj',
      eAge: 25
    },
    {
      eId: 103,
      eName: 'parth',
      eAge: 23
    }
  ]);

  return (
    <>
      <div className="container">
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/product-detail/:productId/:productName">
          <ProductDetail />
        </Route>
      </div>

      <Header title={title} searchBar={true} />
      <AddEmployee addEmployee={addEmployee} />
      <EmployeeList employeeList={employeeList} onDelete={onDelete} />
    </>
  );
}

export default App;
