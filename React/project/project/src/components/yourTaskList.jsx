import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Task from "./task";
import Addtask from "./addtask";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { getTaskList } from "../redux/actions";
import image1 from '../images/1.jpg'
import image2 from '../images/2.JPG'
import image3 from '../images/3.JPG'
import image4 from '../images/4.JPG'
import image5 from '../images/5.jpg'
import Images from "./images";
function mapStateToProps(state) {
    return {
        taskList: state.tasks.taskList,
    };
}
  
export default connect(mapStateToProps)(function YourTaskList(props) {
    const newNavigate=useNavigate();
    debugger
    useEffect(()=> {
        GetYourTask()
    }, []);
    const [flag,SetFlag]=useState(false);
    const [Flag2, SetFlag2] = useState(false);
    const { taskList, dispatch } = props;
    const location = useLocation();
    const userCurrent = location.state.userCurrent;
    const [picture,setpicture]=useState(false);
    var i;
    const GetYourTask = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/task/${userCurrent}`);
             if (response.status==200) {
                dispatch(getTaskList(response.data));
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    const Set = (() => {
        newNavigate('/addtask');
    })
    return (
        <>
            {taskList.map((currectTask)=>(
                <Task currectTask={currectTask}></Task>
            ))}
            <Button onClick={Set} variant="text" sx={{color:"black"}}>Add Task</Button>
            <Button onClick={()=>setpicture(!picture)} variant="text" sx={{color:"black"}}>לתמונות</Button>
               { picture&&<Images >
                <img src={image1} width={500}></img>
                <img src={image2} width={500}></img>
                <img src={image3} width={500}></img>
                <img src={image4} width={500}></img>
                <img src={image5} width={500}></img>
                </Images>
               }
        </>
    )

})