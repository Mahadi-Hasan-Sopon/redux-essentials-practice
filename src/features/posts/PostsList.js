import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectAllPosts, fetchPosts } from './postsSlice'

const PostsList = () => {
  //const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)
  const postStatus = useSelector((state) => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedPost = orderedPosts.map((post) => (
    <article
      style={{ marginTop: '25px' }}
      className="post-excerpt"
      key={post.id}
    >
      <h3>{post.title}</h3>

      <p className="post-content">{post.content.substr(0, 100)}</p>
      <ReactionButtons post={post} />
      <div className="post-time-div">
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Full Post
      </Link>
      <Link to={`/editPost/${post.id}`} className="button">
        Edit Post
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
