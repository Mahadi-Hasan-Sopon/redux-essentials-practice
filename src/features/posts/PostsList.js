import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

const PostsList = () => {
  const posts = useSelector((state) => state.posts)

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
      <div style={{ marginTop: '5px', marginLeft: '0', padding: 0 }}>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
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
