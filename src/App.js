// import logo from './logo.svg';
 import './App.css';
import UserInput from './components/User/UserInput/UserInput';
import React, { useState } from 'react';
import AddUserList from './components/User/AddUser/AddUserList';

function App() {
  const [usersList, addToUserList] = useState([{ id: "2", userNameAndAge: 'alexa 31'}]);


  const addUserHandler = (userNameAndAge) =>
  {
    console.log(userNameAndAge);
    addToUserList(prevUsers => {
      const updateUsers = [...prevUsers];
      updateUsers.unshift({id: Math.random().toString(), userNameAndAge: userNameAndAge });
      console.log(updateUsers);
      return updateUsers;
    });
    //console.log(usersList);
  }
  return (
    // You can also import React, {useState, Fragment} from 'react'
      // and instead of using <React.Fragment> tags, you can use <Fragment> tags
    <React.Fragment>
      <UserInput onAddUser={addUserHandler}/>
      <AddUserList users={usersList}/>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
