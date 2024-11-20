import { useState } from "react";
import PostFooter from "./post/PostFooter";
import PostHeader from "./post/PostHeader";
import PostItem from "./post/PostItem";

export default function Post({
  creator,
  isVideo,
  post,
  postAlt,
  likesImage,
  likesUser,
  likesCount,
  commentsCount,
  lastComment
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCounter, setLikesCounter] = useState(likesCount);
  const [cls, setCls] = useState("post-item hidden");

  function updateIsLiked() {
    if (isLiked) {
      setLikesCounter(likesCounter - 1);
    } else {
      setLikesCounter(likesCounter + 1);
    }
    setIsLiked(!isLiked);
  }

  function updateCls() {
    if (!isLiked) {
      setIsLiked(true);
      setLikesCounter(likesCounter + 1);
    }
    setCls("post-item");
    setTimeout(() => setCls("post-item hidden"), 500);
  }

  return (
    <article className="post">
      <PostHeader creator={creator} />
      <PostItem isVideo={isVideo} post={post} postAlt={postAlt} cls={cls} updateCls={updateCls} />
      <PostFooter
        isLiked={isLiked}
        updateIsLiked={updateIsLiked}
        likesImage={likesImage}
        likesUser={likesUser}
        likesCounter={likesCounter}
        commentsCount={commentsCount}
        lastComment={lastComment}
      />
    </article>
  );
}