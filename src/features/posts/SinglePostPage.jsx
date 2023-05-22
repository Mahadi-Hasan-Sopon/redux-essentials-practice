import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { TimeAgo } from './TimeAgo'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { selectPostById } from './postsSlice'

const SinglePostPage = ({ match }) => {
  const { postId } = match.params

  // const post = useSelector((state) =>
  //   state.posts.find((post) => post.id === postId))

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post Not Found...</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>

        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <div className="post-time-div">
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <Link to="/" className="button muted-button">
          Go Back
        </Link>
      </article>
    </section>
  )
}

export default SinglePostPage
