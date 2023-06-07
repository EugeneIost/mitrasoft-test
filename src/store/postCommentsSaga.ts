import { put } from "redux-saga/effects";
import api from "../api/api";
import { getPostCommentsSuccess } from "./posts";

function* workGetPostCommentsFetch(action: any): any {
  const payload = yield api
    .get(`/posts/${action.payload}/comments`)
    .then((response) => response.data);
  yield put(getPostCommentsSuccess(payload));
}

export default workGetPostCommentsFetch;
