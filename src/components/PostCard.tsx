import {users, posts} from '../../db/db.json'
import Profile from './Profile'

const PostCard = () => {

    return (

        <>
        <h1 className='news-feed'>See what's new today!</h1>
        <section className='my-profile'></section>
        {posts.map(post => (
            <article className='postcard' key={post.postId}>
                <h2>{post.userId}</h2>
                <span>{post.title}</span>
                <img src={post.imageUrl} alt={post.title} loading='lazy' className='w-1/4'/>
            </article>
        )
        
        )}
        </>
    )
    
}

export default PostCard