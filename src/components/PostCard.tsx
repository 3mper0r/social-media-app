import {posts} from '../../db/db.json'


const PostCard = () => {

    return (
        <>
        <section className='my-profile'></section>
        {posts.map(post => (
            <article className='grid grid-cols-1 place-items-center' key={post.postId}>
                <h2 className='grid font-bold text-sm'>@{post.userId}</h2>
                <img src={post.imageUrl} alt={post.title} loading='lazy' className='w-1/5'/>
                <span className='text-sm'>{post.userId} - {post.title}</span>
            </article>
        ))}
        </>
    )
    
}

export default PostCard