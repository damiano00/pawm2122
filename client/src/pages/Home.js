import React, { useState } from "react";
import TaskManager from "../components/TaskManager";
import { onAuthStateChanged } from 'firebase/auth';
import { ref, onValue } from 'firebase/database';
import { database, auth } from '../firebase-config';

const INIT_TASKS = [];
/*    {
    taskid: "t1",
    taskaction: "Sample Task 1",
    status: "Y",
    date: new Date(2022, 4, 22),
    },
    {
    taskid: "t2",
    taskaction: "Sample Task 2",
    status: "N",
    date: new Date(2022, 4, 20),
    }*/

export default function Home(props) {
    //const[userID, setUserID] = useState();

    onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){}
    })

    getData();

    function snapshotToArray(snapshot) {
        var tmp = {};
        snapshot.forEach(function(childSnapshot){
            tmp.taskid = childSnapshot.child('taskID').val();
            tmp.taskaction = childSnapshot.child('taskAction').val();
            tmp.status = childSnapshot.child('taskStatus').val();
            tmp.date = childSnapshot.child('taskDate').val();
            INIT_TASKS.push({...tmp});
        })
        console.log('INIT TASK -->' + INIT_TASKS);
    };

    function getData(){
        console.log('passo dentro getData()');
        const data = ref(database, 'users/' + auth.currentUser.uid);    
        onValue(data, (snapshot) => {
            snapshotToArray(snapshot);
        });
    }

    const [initiallist, setlist] = useState(INIT_TASKS);

    const dataReceiveHandler = (props) => {
        console.log('passo dentro handler(props)');
        const iselementPresent = initiallist.some((p) => p.taskid === props.taskid);
        console.log("is element present", iselementPresent);
        if (iselementPresent) {
            const remainngitems = initiallist.filter(
                (p) => p.taskid !== props.taskid
            );
            console.log("remaining elements", remainngitems);
            setlist(remainngitems);
            const updateditems = [...remainngitems, props];
            setlist(updateditems);
        } else {
            setlist((initiallist) => [...initiallist, props]);
        }
    };

  return (
    <div className="App">
        <TaskManager
        onDatareceived={dataReceiveHandler}
        taskslist={initiallist}
        ></TaskManager>
    </div>
  );
}