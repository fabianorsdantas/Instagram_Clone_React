export default function PostItem({ isVideo, post, postAlt, cls, updateCls }) {
    return (
      <div className={cls}>
        {isVideo ? (
          <video controls autoPlay muted>
            <source src={`./assets/posts/${post}.mp4`} type="video/mp4" />
            <source src={`./assets/posts/${post}.ogg`} type="video/ogg" />
          </video>
        ) : (
          <img onDoubleClick={updateCls} src={`./assets/posts/${post}.png`} alt={postAlt} />
        )}
        <ion-icon name="heart"></ion-icon>
      </div>
    );
  }