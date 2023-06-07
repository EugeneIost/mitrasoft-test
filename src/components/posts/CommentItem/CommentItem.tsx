import IComment from "../../../types/comment-type";
import styles from "./CommentItem.module.scss";

export interface ICommentItemProps {
  comment: IComment;
}

export default function CommentItem({ comment }: ICommentItemProps) {
  return (
    <div className={styles["comment"]}>
      <h3 className={styles["comment__header"]}>{comment.email}</h3>
      <p className={styles["comment__body"]}>{comment.body}</p>
    </div>
  );
}
