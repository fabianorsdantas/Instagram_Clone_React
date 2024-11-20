import Comments from "./post-footer/Comments";
import LikesInfo from "./post-footer/LikesInfo";
import Reactions from "./post-footer/Reactions";

export default function PostFooter({
  isLiked,
  updateIsLiked,
  likesImage,
  likesUser,
  likesCounter,
  commentsCount,
  lastComment
}) {
  return (
    <div className="post-footer">
      <Reactions isLiked={isLiked} updateIsLiked={updateIsLiked} />
      <LikesInfo likesImage={likesImage} likesUser={likesUser} likesCounter={likesCounter} />
      <Comments commentsCount={commentsCount} lastComment={lastComment} />
    </div>
  );
}