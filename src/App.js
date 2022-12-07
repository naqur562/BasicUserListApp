import React from 'react';
import "./App.css"
import { useState } from "react"

import InputForm from "./components/InputForm"
import UserList from "./components/UserList"

function App() {

  const [allUsers, setAllUsers] = useState([])

  const addUser = (newUser) => {
    setAllUsers(prevValue => {
      return (
        [
          newUser,
          ...prevValue
        ]
      )
    })
  }

  return (
    <div>
      <InputForm 
        newUser = {addUser}
      />
      <UserList 
        allUsers = {allUsers}
      />
    </div>
  );
}

export default App;
