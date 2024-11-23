import { Post } from "./Post"

export const Posts = () => {
  const objPost = [
    { 
      srcTopo: "./assets/meowed.svg", 
      altTopo: "meowed", 
      srcPost: "assets/gato-telefone.svg", 
      altPost: "gato-telefone", 
      srcLike: "assets/respondeai.svg", 
      altLike: "respondeai", 
      like: 101.523 
    },
    { 
      srcTopo: "./assets/barked.svg", 
      altTopo: "barked", 
      srcPost: "assets/dog.svg", 
      altPost: "dog", 
      srcLike: "assets/adorable_animals.svg", 
      altLike: "adorable_animals", 
      like: 99.159 
    },
    { 
      srcTopo: "./assets/meowed.svg", 
      altTopo: "meowed", 
      srcPost: "assets/gato-telefone.svg", 
      altPost: "gato-telefone", 
      srcLike: "assets/respondeai.svg", 
      altLike: "respondeai", 
      like: 1.000
    }
  ]

  return (
    <>
      {objPost.map(i =>
      <div className="posts">
        <Post
          key={i.altTopo}
          srcTopo={i.srcTopo}
          altTopo={i.altTopo}
          srcPost={i.srcPost}
          altPost={i.altPost}
          srcLike={i.srcLike}
          altLike={i.altLike}
          like={i.like} />
        </div>
      )}
    </>
  )
}