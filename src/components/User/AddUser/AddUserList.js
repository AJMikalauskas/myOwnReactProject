import React from "react";
import Card from "../../UI/Card";
import AddUser from "./AddUser";
import styles from './AddUserList.module.css'

const AddUserList = props => {

    console.log(props.users);
    return (
        <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            //   userNameAndAge={user.userNameAndAge}, don't have to have the li element
                // be in AddUser.js, it can be in this file with just a div for AddUser.js
                    // AddUser file is almost considered not to be needed since it can all be put in this file.
             <AddUser key={user.id}> 
             {user.userNameAndAge}
             </AddUser>
          ))}
        </ul>
      </Card>
    );
}

export default AddUserList;