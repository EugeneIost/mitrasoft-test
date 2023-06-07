import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useStoreDispatch } from "../../../store/store";
import PostsItem from "../PostsItem/PostsItem";
import { getPostsFetch } from "../../../store/posts";

export interface IPostsListProps {}

export default function PostsList(props: IPostsListProps) {
  const dispatch = useStoreDispatch();

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  const posts = useSelector((state: RootState) => state.posts.posts);

  return (
    <div>
      {posts.map((post) => (
        <PostsItem key={post.id} post={post} />
      ))}
    </div>
  );
}
