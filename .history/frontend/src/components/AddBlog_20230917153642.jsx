import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useStyles from "./utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlog = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5050/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      });
      const data = res.data;
      toast.success("Blog posted successfully!"); 
      return data;
    } catch (error) {
      toast.error("Failed to post blog."); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then(() => navigate("/blogs"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="#105e65"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={3}
          display="flex"
          flexDirection="column"
          width={"80%"}
        >
          <Typography className={classes.font} variant="h2" padding={3} color="grey" textAlign="center">
            Write your blog
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Title
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Description
          </InputLabel>
          <TextField
            className={classes.font}
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            ImageURL
          </InputLabel>
          <TextField
            className={classes.font}
            name="imageURL"
            value={inputs.imageURL}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            className={classes.font}
            type="submit"
            variant="contained"
            sx={{ borderRadius: 4, marginTop: 2 }}
            color="primary"
          >
            Post
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlog;

