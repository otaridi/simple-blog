import React, {useState, useRef, useEffect} from "react"
import Post from "./Post";
import Spinner from "./Spinner";

const Posts = ({posts}) => {
    const [currentPosts, setCurrentPosts] = useState(12)

    const postCount = posts.slice(0, currentPosts)

    const renderPosts = postCount.map(({id, title}) => {
        return <Post key={id} title={title} id={id}/>
    })
    return (
        <div>
            <div className='post-container'>
                {
                    posts.length === 0 ?
                        <Spinner/>
                        : renderPosts
                }
            </div>

            {
                currentPosts >= posts.length ? null
                    :
                    <section className='load-more'>
                        <button onClick={() => setCurrentPosts(currentPosts + 12)}>load more
                        </button>
                    </section>
            }
        </div>
    )
}

export default Posts
