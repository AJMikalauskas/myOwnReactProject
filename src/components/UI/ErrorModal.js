import React, { useState } from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from 'react-dom'


//Find a solution for the errorModalHandler to be inside of the UserInput.js file
    // Made a Backdrop and ModalOveraly so these elemnts could be above the root by portals and can be found inside index.html
const Backdrop = props =>
{
            // Replaced by just calling a function inside userinput.js, using onConfirm or props.onConfirm
    // const [errorModalShowing, showErrorModal] = useState();

    // const closeErrorModalHandler = () =>
    // {
    //     // sets errorModalShowing to false and sends this data up into UserInput.js by the props.testName(falseValue) 
    //     showErrorModal(false);
    //     props.cancelErrorModal(errorModalShowing);
    // }
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay = props =>
{
        // Replaced by just calling a function inside userinput.js, using onConfirm or props.onConfirm
    // const [errorModalShowing, showErrorModal] = useState();

    // const closeErrorModalHandler = () =>
    // {
    //     // sets errorModalShowing to false and sends this data up into UserInput.js by the props.testName(falseValue) 
    //     showErrorModal(false);
    //     props.cancelErrorModal(errorModalShowing);
    // }

    return (<Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.errorMessage}</p>
    </div>
    <footer className={styles.actions}>
      <Button type="button" onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>);
}

const ErrorModal = (props) => {

        // Replaced by just calling a function inside userinput.js
    // const [errorModalShowing, showErrorModal] = useState();

    // const closeErrorModalHandler = () =>
    // {
    //     // sets errorModalShowing to false and sends this data up into UserInput.js by the props.testName(falseValue) 
    //     showErrorModal(false);
    //     props.cancelErrorModal(errorModalShowing);
    // }

  return (
    //   You'd want this overall modal to be about the actual <div id="root" seen in index.html and the dev tools of chrome
        // add above div id of root:
            // <div id="backdrop-root"></div> 
            // <div id="overlay-root"></div> - replace with overlay for sidebars and othe rlements that could be overlayed instead of just modal
            // This uses usePortal() from reactdom import
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<ModalOverlay onConfirm={props.onConfirm} title={props.title} errorMessage={props.errorMessage}/>, document.getElementById('overlay-root'))}
    {/* Replaced by Bakdrop and ModalOverlay above
     <div className={styles.backdrop} onClick={closeErrorModalHandler}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={closeErrorModalHandler}>Okay</Button>
        </footer>
      </Card>
    </div> */}
    </React.Fragment>
  );
};

export default ErrorModal;
