import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  const renderedPost = posts.map((post) => (
    <article className="post-excerpt post-article" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <div>
      <h2>Posts</h2>
      {renderedPost}
    </div>
  )
}

export default PostsList
