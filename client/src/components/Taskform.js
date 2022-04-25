import React, { useState } from "react";
import "./Taskform.css";
import { database, auth } from '../firebase-config';
import { ref, set} from 'firebase/database';
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (currentUser) => {})

const Taskform = (props) => {
  
  const taskSubmithandler = (event) => {
    event.preventDefault();
    console.log("in submit handler");
    console.log(inputEntered);
    updateInput(() => "");

    const newtask = {
      taskid: Math.round((Math.random()*10000)).toString(),
      taskaction: inputEntered,
      status: "N",
      date: new Date(),
    };
    props.ondataadd(newtask);

    set(ref(database, 'users/' + auth.currentUser.uid +'/'+ newtask.taskid), {
        taskID: newtask.taskid,
        taskAction: newtask.taskaction,
        taskStatus: newtask.status,
        taskDate: newtask.date,
    });
  };

  const [inputEntered, updateInput] = useState("");

  const enterTextlistener = (event) => {
    console.log(event.target.value);
    updateInput(() => event.target.value);
  };

  return (
    <form onSubmit={taskSubmithandler}>
      <div className="taskform">
        <div className="plusclass">+</div>
        <input
          className="ipclass"
          type="text"
          pattern=".*"
          placeholder="Add a new task"
          value={inputEntered}
          onChange={enterTextlistener}
        />
      </div>
    </form>
  );
};

export default Taskform;