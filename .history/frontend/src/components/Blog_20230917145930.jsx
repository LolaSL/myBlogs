import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStyles  from "./utils";
import { toast } from 'react-toastify';
import { getError } from '../errors.js';

const Blog = ({
  title,
  description,
  imageURL,
  userName,
  createdAt,
  isUser,
  id,
}) => {
  console.log(title, isUser);
  const classes = useStyles();

  const navigate = useNavigate();

  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`); 
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5050/api/blog/${id}`)
      .catch((error) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then((data) => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  return (
    <div>
      {" "}
      <Card
        sx={{
          width: "45%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": { boxShadow: "10px 10px 20px #ccc" },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton sx={{ marginLeft: "auto" }} onClick={handleEdit}>
              <EditIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              className={classes.font}
              sx={{
                bgcolor: "#6f7b80",
                width: "55px",
                height: "55px",
                fontSize: "10px",
                mb: 2,
              }}
              aria-label="user name"
            >
              {userName}
            </Avatar>
          }
          action={<IconButton aria-label="settings"></IconButton>}
          className={classes.font}
          title={title}
          subheader={createdAt}
        />
        <CardMedia
          component="img"
          style={{ borderRadius: "10px" }}
          height="80%"
          src={imageURL}
          alt="card media"
        />
        <CardContent>
          <hr align="left" width="100%;" />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>{userName}</b> {":"}
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;
