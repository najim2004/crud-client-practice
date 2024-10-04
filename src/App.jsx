import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handlePublish = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.value;
    const posts = { title, image, description };
    console.log(posts);
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(posts),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <h1>CRUD Practice</h1>
      <form
        onSubmit={handlePublish}
        className="w-1/2 text-start mx-auto p-5 border-red-400 border-[1px] rounded-lg"
      >
        <div className="">
          <label className="text-nowrap">Post Title:</label>
          <input
            placeholder="Post title"
            className="w-full bg-white border-[1px] border-black h-8 rounded-sm"
            type="text"
            name="title"
            id=""
          />
        </div>
        <div className="">
          <label className="text-nowrap">Post image:</label>
          <input
            placeholder="Post title"
            className="w-full bg-white border-[1px] border-black h-8 rounded-sm"
            type="text"
            name="image"
            id=""
          />
        </div>
        <div className="">
          <label className="text-nowrap">Post Description:</label>
          <textarea
            placeholder="Description"
            className="w-full bg-white border-[1px] border-black rounded-sm"
            type="text"
            name="description"
            id=""
            rows={10}
          />
        </div>
        <input
          type="submit"
          className="btn w-full bg-purple-500 text-white"
          value="Publish Now"
        />
      </form>
      <Link to={"/posts"}>
        <button className="btn">See posts</button>
      </Link>
    </>
  );
}

export default App;
