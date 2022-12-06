import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newblogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newblogs);
  };

  useEffect(() => {
    console.log("useeffect ran");
    console.log(blogs);
   
  })
  

  return (
    <div className="home">
     <BlogList blogs={blogs} title= "All Blogs"  handleDelete={handleDelete}/>
     {/* <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title = "Marios blog"/> */}
    </div>
  );
};

export default Home;
