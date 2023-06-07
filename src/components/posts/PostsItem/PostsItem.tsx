import IPost from "../../../types/post-type";
import { RootState, useStoreDispatch } from "../../../store/store";
import Accordion from "react-bootstrap/Accordion";
import styles from "./PostItem.module.scss";
import userIcon from "../../../assets/icons/user-icon.png";
import { getPostCommentsFetch } from "../../../store/posts";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import CommentItem from "../CommentItem/CommentItem";

export interface IPostsItemProps {
  post: IPost;
}

export default function PostsItem({ post }: IPostsItemProps) {
  const dispatch = useStoreDispatch();
  const isCommentsLoading = useSelector(
    (state: RootState) => state.posts.isCommentsLoading
  );

  return (
    <div className={styles["post-item"]}>
      <div className={styles["post-item__title-container"]}>
        <div className={styles["post-item__user-container"]}>
          <img
            src={userIcon}
            alt="User"
            className={styles["post-item__user-icon"]}
          />
        </div>
        <h1 className={styles["post-item__title"]}>{post.title}</h1>
      </div>

      <p className={styles["post-item__body"]}>{post.body}</p>

      <Accordion>
        <Accordion.Item eventKey={post.id.toString()}>
          <Accordion.Header
            className={styles["accordion__custom"]}
            onClick={() => {
              dispatch(getPostCommentsFetch(post.id));
            }}
          >
            Комментарии
          </Accordion.Header>
          <Accordion.Body>
            {/* <div className={styles["post-item__spinner-container"]}>
              <Spinner animation="border" variant="primary" />
            </div> */}
            {isCommentsLoading && (
              <div className={styles["post-item__spinner-container"]}>
                <Spinner animation="grow" variant="primary" />
              </div>
            )}
            {post.comments?.length > 0 &&
              post.comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
