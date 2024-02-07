import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
function mapStateToProps(state) {
  return {
    taskList: state.tasks.taskList,
  };
}
export default connect(mapStateToProps)(function Task(props) {
  const newNavigate = useNavigate();
  const { currectTask, dispatch } = props;
  const [flag,SetFlag]=useState(false);
  const del = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/task/${currectTask.taskId}`
      );
      debugger;
      if (response.status == 200) {
        dispatch(deleteTask(currectTask));
        alert("the task successesfully delete");
        newNavigate("/yourTaskList", {
          state: { userCurrent: currectTask.password },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const edit = async () => {
    try {
      // const newDescription={
      //   description: 
      // }
      const response = await axios.put(
        `http://localhost:5000/task/${currectTask.taskId}`
      );
      if (response.status == 200) {
        dispatch(updateTask(currectTask,currectTask.password));
        alert("the task successesfully update");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: '3%',
          marginLeft:'38%',
          maxWidth: 300,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {currectTask.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {currectTask.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {currectTask.deadLine}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ cursor: "pointer" }} variant="body2">
                  <Stack direction="row" spacing={2} sx={{paddingLeft:'14%',}}>
                    <Button
                      variant="outlined"
                      onClick={del}
                      color="inherit"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      onClick={()=>SetFlag(!flag)}
                      color="inherit"
                      endIcon={<BorderColorIcon />}
                    >
                      Edit
                    </Button>
                  </Stack>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {currectTask.taskId}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* {flag&&<div } */}
    </>
  );
});
