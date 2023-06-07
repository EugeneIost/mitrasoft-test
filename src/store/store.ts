import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts";
import createSagaMidleware from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { useDispatch } from "react-redux";
import workGetPostsFetch from "./postsSaga";
import workGetPostCommentsFetch from "./postCommentsSaga";

const sagaMiddleware = createSagaMidleware();

function* sagas() {
  yield takeEvery("posts/getPostsFetch", workGetPostsFetch);
  yield takeEvery("posts/getPostCommentsFetch", workGetPostCommentsFetch);
}

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
