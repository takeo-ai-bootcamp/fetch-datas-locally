import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./slices/post.slice";

const store = configureStore({
  reducer: {
    posts: PostSlice.reducer,
  },
});

export default store;
