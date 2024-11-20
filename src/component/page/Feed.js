import Post from "./feed/Post";

export default function Feed() {
  const posts = [
    {
      id: 1,
      creator: "meowed",
      isVideo: false,
      post: "cat",
      postAlt: "gatinho com celular nas patas",
      likesImage: "respondeai",
      likesUser: "respondeai",
      likesCount: 101523,
      commentsCount: 12345,
      lastComment: "📱 do 😺 melhor que o meu!"
    },
    {
      id: 2,
      creator: "barked",
      isVideo: false,
      post: "dog",
      postAlt: "cachorro dormindo",
      likesImage: "adorableanimals",
      likesUser: "adorable_animals",
      likesCount: 99159,
      commentsCount: 9876,
      lastComment: "Owww! Queria ser fofa assim dormindo 💤"
    },
    {
      id: 3,
      creator: "meowed",
      isVideo: true,
      post: "video",
      postAlt: "",
      likesImage: "respondeai",
      likesUser: "respondeai",
      likesCount: 123456,
      commentsCount: 23456,
      lastComment: "😻 fofo D+!!"
    }
  ];
  return (
    <div className="feed">
      {posts.map(p => (
        <Post key={p.id} {...p} />
      ))}
    </div>
  );
}