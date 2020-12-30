import React, {useState, useEffect} from "react"
import Post from "./Post";
import Spinner from "./Spinner";
import Button from "./Button";

const Posts = ({posts}) => {
    const [currentPosts, setCurrentPosts] = useState(12)

    const postCount = posts.slice(0, currentPosts)

    // render first 12 post
    const renderPosts = postCount.map(({id, title}) => {
        return <Post key={id} title={title} id={id}/>
    })

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

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
                    <section>
                        <Button className='load-more'
                                onClick={() => setCurrentPosts(currentPosts + 12)} type='button'>
                            load more
                        </Button>
                    </section>
            }
        </div>
    )
}

export default Posts
