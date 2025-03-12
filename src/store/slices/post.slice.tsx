import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../context/post/Post";

const PostSlice = createSlice({
  name: "POST_ACTION",
  initialState: {
    data: [
      { title: "", description: "", id: "", username: " yogesh" },
    ] as IData,
  },
  reducers: {
    updatePosts: (state) => {
      state.data = null;
    },
  },
});

export const updatePosts = PostSlice.actions.updatePosts;
export default PostSlice;
