import {users, posts} from '../../db/db.json'
import Profile from './Profile'

const PostCard = () => {

    return (
        <>
        <section className='my-profile'></section>
        {posts.map(post => (
            <article className='postcard' key={post.postId}>
                <h2>{post.userId}</h2>
                <img src={post.imageUrl} alt={post.title} loading='lazy' className='w-1/4'/>
                <span>{post.title}</span>
            </article>
        ))}
        </>
    )
    
}

export default PostCard