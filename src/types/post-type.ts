import IComment from "./comment-type";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  comments: IComment[];
}

export default IPost;
