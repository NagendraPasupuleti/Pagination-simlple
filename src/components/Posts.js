import React from "react";

const Posts=({posts,loading})=>{
    if(loading){
        return <h3>Loading.......</h3>
    }

    return(
        <ul className="list-group mb-3">

                {
                    posts.map(post=>
                        <li key={post.id} className="list-group-item  blue-gradient-rgba text-white mb-1">{post.title}</li>

                    )
                }




        </ul>
    )
}
export  default Posts