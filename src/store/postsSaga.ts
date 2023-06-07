import { put } from "redux-saga/effects";
import api from "../api/api";
import { getPostsSuccess } from "./posts";

function* workGetPostsFetch(): any {
  const posts = yield api.get("/posts").then((response) => response.data);
  yield put(getPostsSuccess(posts));
}

export default workGetPostsFetch;
