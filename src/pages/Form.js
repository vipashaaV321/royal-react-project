import React from 'react';
import { useState, useRef } from 'react';
import useInput from '../hooks/useInput';
import '../TextInput.css';
export const SimpleForm = () => {
  const [style, setStyle] = useState({});

  function textChange(e) {
    if (e.target.value === '') setStyle({ border: '1px solid red' });
    else setStyle({ border: '1px solid green' });
  }
  const emailRef = useRef('');
  const {
    value: enterdName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    hasError: nameValidation
  } = useInput();
  const {
    value: enterdPassword,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    hasError: passwordValidation
  } = useInput();

  //form validation...
  let formIsValid = false;

  if (nameValidation) {
    formIsValid = false;
  } else {
    formIsValid = true;
  }

  const submit = e => {
    e.preventDefault();

    if (enterdName.trim() === '') {
      nameValidation = false;
      return;
    }
    console.log('submit called.....');
    console.log('email ==>', emailRef.current.value);
  };

  return (
    <form onSubmit={submit}>
      <div className="form-control">
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          value={enterdName}
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {enterdName}

        {/* <input type="text" id="name" onChange={(e)=>{setname(e.target.value)}}></input> */}
        {!nameValidation && <p>Name must not be empty !!</p>}
      </div>

      <div className="form-control">
        <label htmlFor="password">Enter Password</label>
        <input
          type="text"
          value={enterdPassword}
          id="password"
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          onInput={textChange}
          style={style}
        />
        {enterdPassword}

        {/* <input type="text" id="name" onChange={(e)=>{setname(e.target.value)}}></input> */}
        {!passwordValidation && <p>password must not be empty !!</p>}
      </div>

      <div className="form-control">
        <label htmlFor="email">Enter Email</label>
        <input ref={emailRef} type="text" id="email" />
      </div>
      <div className="form-action">
        <input disabled={formIsValid} type="submit" value="SUBMIT" />
      </div>
    </form>
  );
};
