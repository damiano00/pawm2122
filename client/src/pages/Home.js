import React, { useState } from "react";
import TaskManager from "../components/TaskManager";

const INIT_TASKS = [
    {
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
    }
];

function Home() {
    const [initiallist, setlist] = useState(INIT_TASKS);
    const dataReceiveHandler = (props) => {
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

export default Home;