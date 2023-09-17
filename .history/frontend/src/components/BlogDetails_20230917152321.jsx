// import React, { useEffect, useState } from 'react';
// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import { useNavigate, useParams } from 'react-router-dom';
// import  useStyles from "./utils";

// const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

// const BlogDetails = () => {
//   const classes = useStyles();
// const navigate =  useNavigate()
//   const [blog, setBlog] = useState();
//   const [inputs, setInputs] = useState({});
//   const id = useParams().id;
  
//   console.log( id);
  
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const fetchDetails = async() => {
//     const res = await axios.get(`http://localhost:5050/api/blog/${id}`)
//     .catch((err) => console.log(err));
//   const data = await res.data;
//   return data;
//   };

//   useEffect(() => {
//     fetchDetails().then(data => {
//       setBlog(data.blog);
//       setInputs({
//         title: data.blog.title,
//         description: data.blog.description,
//       })
//     })
  
//   }, [id]);

//   const sendRequest = async (e) => {
//     const res = await axios.put(`http://localhost:5050/api/blog/update/${id}`, {
//       title: inputs.title,
//       description: inputs.description,
//     })
//     .catch((error) => console.error(error));
//   const data = await res.data;
//   return data;
// };
//   console.log(blog);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     sendRequest().then((data) => console.log(data)).then(() => navigate("/myBlogs/"))
    
//   };
  
//   return (
//     <div>
//       {inputs &&
//         <form onSubmit={handleSubmit}>
//           <Box
//             border={3}
//             borderColor="#105e65"
//             borderRadius={10}
//             boxShadow="10px 10px 20px #ccc"
//             padding={3}
//             margin="auto"
//             marginTop={3}
//             display="flex"
//             flexDirection="column"
//             width={"80%"}
//           >
//             <Typography className={classes.font } variant="h2" padding={3} color="grey" textAlign="center">
//               Whrite your blog
//             </Typography>
//             <InputLabel    className={classes.font } sx={labelStyles}>Title</InputLabel>
//             <TextField
//             className={classes.font }
//               name="title"
//               value={inputs.title}
//               onChange={handleChange}
//               margin="auto"
//               variant="outlined"
//             />
//             <InputLabel   className={classes.font } sx={labelStyles}>Description</InputLabel>
//             <TextField
//                  className={classes.font }
//               name="description"
//               value={inputs.description}
//               onChange={handleChange}
//               margin="auto"
//               variant="outlined"
//             />
//             <Button
//                  className={classes.font }
//               type="submit"
//               variant="contained"
//               sx={{ borderRadius: 4, marginTop: 2 }}
//               color="primary"
//             >
//               Post
//             </Button>
//           </Box>
//         </form>}
//     </div>
//   )
// }

// export default BlogDetails

