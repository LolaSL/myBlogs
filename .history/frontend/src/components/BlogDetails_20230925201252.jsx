import React, { useEffect, useState } from 'react';
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import useStyles from "./utils";
import { toast } from "react-toastify";


const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogDetails = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const id = useParams().id;

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const fetchDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5050/api/blog/${id}`);
      const data = res.data;
      setInputs({
        title: data.blog.title,
        description: data.blog.description,
      });
    } catch (error) {
      toast.error("Failed to fetch blog details."); // Display error message
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  const sendRequest = async () => {
    try {
      await axios.put(`http://localhost:5050/api/blog/update/${id}`, {
        title: inputs.title,
        description: inputs.description,
      });
      toast.success("Blog updated successfully!"); 
      navigate("/myBlogs/");
    } catch (error) {
      toast.error("Failed to update blog."); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
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
          <InputLabel className={classes.font} sx={labelStyles}>Title</InputLabel>
          <TextField
            className={classes.font}
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="auto"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>Description</InputLabel>
          <TextField
            className={classes.font}
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="auto"
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
}

export default BlogDetails;
