import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog.jsx";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const sendRequest = async () => {
    const res = await axios
      .get(
        `http://localhost:5050/api/blog?page=${currentPage}&limit=${postsPerPage}`
      )
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      {currentPosts &&
        currentPosts.map((blog, index) => (
          <Blog
            key={index}
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
            createdAt={blog.user.createdAt}
          />
        ))}
      <ul className="pagination">
        {Array.from(
          { length: Math.ceil(blogs.length / postsPerPage) },
          (_, index) => (
            <li key={index} className="page-item">
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Blogs;


