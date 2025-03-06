import { useState } from "react";
import { IData } from "../App";

interface IProps {
  addData: (data: IData) => void;
}

function AddData(_props: IProps) {
  const [post, setPost] = useState({} as IData);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    _props.addData(post);

    
  };

  return (
    <div className="content-app">
      <div className="flex flex-col gap-2 m-5">
        <h1 className="text-2xl font-bold">Add Posts</h1>
        {post?.title}
        <br />
        {post?.description}
        {post?.username}
        <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
          <input
            type="text"
            className="input input-sm w-full"
            placeholder="Title"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="input input-sm  w-full"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
          />
          <input
            type="text"
            className="input input-sm w-full"
            placeholder="Your username"
            onChange={(e) => setPost({ ...post, username: e.target.value })}
          />
          <button type="submit" className="btn btn-sm">
            Add data
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddData;
