import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("  https://api.npoint.io/b4ead184047c83f15b75/blogs")
        .then((res) => {
           if (!res.ok) {
             // error coming back from server
             throw Error("could not fetch the data for that resource");
           } 
          return res.json();
        })
        .then((data) => {
          setError(null);
          setIsPending(false);
          setBlogs(data);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
