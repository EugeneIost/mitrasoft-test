import IPost from "../types/post-type";
import { createSlice } from "@reduxjs/toolkit";

interface IPostsState {
  posts: IPost[];
  isPostsLoading: boolean;
  isCommentsLoading: boolean;
}

const initialState: IPostsState = {
  posts: [],
  isPostsLoading: false,
  isCommentsLoading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsFetch: (state) => {
      state.isPostsLoading = true;
    },

    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.isPostsLoading = false;
    },

    getPostCommentsFetch: (state, { payload }) => {
      state.isCommentsLoading = true;
    },

    getPostCommentsSuccess: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post.id === action.payload[0].postId
      );
      state.posts[postIndex].comments = action.payload;
      state.isCommentsLoading = false;
    },
  },
});

export const {
  getPostsFetch,
  getPostsSuccess,
  getPostCommentsFetch,
  getPostCommentsSuccess,
} = postsSlice.actions;
