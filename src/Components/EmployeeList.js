import React from 'react';
import { Employee } from './Employee';

export const EmployeeList = props => {
  return (
    <div className="container">
      <h3 className="text-center">Employee LIST</h3>

      {props.employeeList.length <= 0
        ? 'No Employee Found'
        : props.employeeList.map(employee => {
            return (
              <Employee
                employee={employee}
                key={employee.eId}
                onDelete={props.onDelete}
              />
            );
          })}
      {/* <Employee employee = {props.employeeList[0]}/> */}
    </div>
  );
};
