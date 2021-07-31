import React from 'react';

export const Employee = ({ employee, onDelete }) => {
  return (
    <div>
      <h4>{employee.eId}</h4>
      <h4>{employee.eName}</h4>
      <h4>{employee.eAge}</h4>
      <button
        className="btn btn-danger"
        onClick={() => {
          onDelete(employee);
        }}
      >
        DELETE
      </button>
    </div>
  );
};
