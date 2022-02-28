import React, { useState, useRef } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ErrorModal from "../../UI/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";
import styles from "./UserInput.module.css";

const UserInput = (props) => {
    //Testing out useRef, takes default value its set to and returns value that can be manipulated in the DOM
    const nameInputRef = useRef();
    const ageInputRef = useRef();

  // Track values of age and username
//   const [startUsernameValue, changeUserNameValue] = useState("");
//   const [startAgeValue, changeAgeValue] = useState("");

  // Track whether error modal showing - true/false
  const [errorModalShowing, showErrorModal] = useState(false);
  const [errorModalJSXShowing, showErrorModalJSX] = useState(
    <ErrorModal title="" errorMessage="" />
  );

//   const trackUsernameInputValue = (event) => {
//     //Code for if there is an empty username field
//     // Maybe run an (or operand) statement checking if the input field for age is empty too
//     changeUserNameValue(event.target.value);
//     //event.target.id = event.target.value;
//     console.log(event.target.value);
//   };

//   const trackAgeInputValue = (event) => {
//     changeAgeValue(event.target.value);
//     //event.target.id = event.target.value;
//     console.log(event.target.value);
//   };

  const addUserHandler = (event) => {
    // Stops the reloading of the page when the form info is submitted
    event.preventDefault();

    //See what refs are outputting
    console.log(nameInputRef);
    console.log(ageInputRef);
        //This is to show the values of the inputs from the ref - has a property of value
            // returns not every keystroke but the value on submitting the form - helper constants
                // These can replace the value of the states in the if statements and beyond
        const enteredUserName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value
    console.log(enteredUserName);
    console.log(enteredAge);

    //Reset values of Username and Age to an empty string
    //console.log(startUsernameValue, startAgeValue);

    // Can run this if two-way binding is active by setting the value property/attribute to the startUserNameValue and startAgeValue
    // This not only sets the const start...Value to an empty string but also the value of the input which is reflected visually
    // in the UI.
    // Can also check if either value is empty and if so, console.log and reutrn to exit out of the arrow function

    if (
      enteredUserName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      //Show error modal - cancelErrorModal calls the function itself which gets in the false value data
      showErrorModalJSX(
        <ErrorModal
          title="Invalid Input"
          errorMessage="Please enter a valid name and age (non-empty values)"
          onConfirm={cancelErrorModal}
        />
      );
      showErrorModal(true);
      //   showErrorModal(true);
      //   showErrorModalJSX(<ErrorModal title="Invalid Input" errorMessage="Please enter a valid name and age (non-empty values)." />);
      //   console.log(
      //     "One of the fields is empty, plese fill in both fields to proceed."
      //   );
      return;
    }
    //Checks if the age is less than 1 which isn't possible for humans, so if so, it will exit this function and log a msg to the console
    if (Number(enteredAge) < 1) {
      //Show Error Modal - need to compensate for cancelling the error modal when 'okay' btn is clicked  - cancelErrorModal calls the function itself which gets in the false value date
      showErrorModalJSX(
        <ErrorModal
          title="Invalid Input"
          errorMessage="Please enter a valid age (greater than 0)"
          onConfirm={cancelErrorModal}
        />
      );
      showErrorModal(true);
      //showErrorModalJSX(<ErrorModal title="Invalid Input" errorMessage="Please enter a valid age (greater than 0)" />);
      //   console.log(
      //     "Your Age needs to be greater than 0, please input a correct value"
      //   );
      return;
    }

    props.onAddUser(enteredUserName + " " + enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // changeUserNameValue("");
    // changeAgeValue("");
  };

  const cancelErrorModal = () => {
      // storedState is the false value from the errorModal and will stop showing the error modal if the 'okay' button is clicked
    showErrorModal(false);
  };
  return (
    // This is possible by adding props.className to the card.js file and additionally adding the styles.card from the module of card
    // {errorModalShowing == true && errorModalCode}

    // Wrapper can be replaced by <React.Fragment> tags
    <Wrapper>
        {/* errorModalShowing is an original value of false, but can be set to true if error. 
            Can be overridden to false by pressing the okay button in error modal pop up.
        */}
      {errorModalShowing === true && errorModalJSXShowing}

      <Card className={styles.input}>
        {/* <div className={styles.input}> */}
        <form onSubmit={addUserHandler}>
          <label>Username</label>
          <input
            id="username"
            type="text"
            // value={startUsernameValue}
            // onChange={trackUsernameInputValue}
            ref={nameInputRef}
          />
          <label>Age(In Years)</label>
          <input
            id="age"
            type="number"
            // value={startAgeValue}
            // onChange={trackAgeInputValue}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
        {/* </div> */}
      </Card>
    </Wrapper>
  );
};

export default UserInput;
