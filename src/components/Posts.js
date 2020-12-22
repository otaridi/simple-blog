import React  from "react"
import Post from "./Post";
import '../spinner.css'
import useFetch from "../hooks/useFetch";

const POSTS = 'https://jsonplaceholder.typicode.com/posts'


const Posts = () => {
    const [data, setData] = useFetch(POSTS)
    return (
        <div className='post-container'>
            {
                data.length === 0 ?
                    <div className="lds-ripple">
                        <div/>
                        <div/>
                    </div> :
                    data.map(el => {
                        const IMAGE = `https://picsum.photos/id/${el.id}/200/300`
                        return <Post key={el.id} title={el.title} image={IMAGE}/>
                    })
            }
        </div>
    )
}

export default Posts
