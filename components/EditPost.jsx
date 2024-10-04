import { useLoaderData } from "react-router-dom";

const EditPost = () => {
  const loadedPost = useLoaderData();
  const handleUpdatePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const image = form.image.value;
    const editedPosts = { title, image, description };
    console.log(editedPosts);
    fetch(`http://localhost:5000/posts/${loadedPost._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPosts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Update this post</h1>
      <form
        onSubmit={handleUpdatePost}
        className="w-1/2 text-start mx-auto p-5 border-red-400 border-[1px] rounded-lg"
      >
        <div className="">
          <label className="text-nowrap">Post Title:</label>
          <input
            defaultValue={loadedPost.title}
            className="w-full bg-white border-[1px] border-black h-8 rounded-sm"
            type="text"
            name="title"
            id=""
          />
        </div>
        <div className="">
          <label className="text-nowrap">Post image:</label>
          <input
            defaultValue={loadedPost.image}
            className="w-full bg-white border-[1px] border-black h-8 rounded-sm"
            type="text"
            name="image"
            id=""
          />
        </div>
        <div className="">
          <label className="text-nowrap">Post Description:</label>
          <textarea
            defaultValue={loadedPost.description}
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
          value="Save"
        />
      </form>
    </div>
  );
};

export default EditPost;
