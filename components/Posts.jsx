import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Posts = () => {
  const loadedPosts = useLoaderData();
  const [aposts, setPosts] = useState(loadedPosts);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          setPosts(aposts.filter((post) => post._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {aposts?.map((post) => (
        <div key={post._id} className="w-1/2 mx-auto">
          <img src={post.image} alt="" />
          <h3 className="my-5 text-2xl font-bold">{post.title}</h3>
          <p className="">{post.description}</p>
          <Link to={`/posts/${post._id}`}>
            <button className="btn">edit</button>
          </Link>
          <button onClick={() => handleDelete(post._id)} className="btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
