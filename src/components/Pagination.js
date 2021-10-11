import React from "react";

const Pagination=({postsPerPage,totalPosts,paginate})=>{
    const pageNumbers=[]
    for (let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)

    }
    return(
        <ul className="pagination   d-flex align-items-center justify-content-center  text-center ">
            {
                pageNumbers.map(number=>{
                    return(
                        <li className="page-item bg-dark  active ">
                            <a onClick={()=>paginate(number)} href="!#" className="page-link mx-0 text-white font-weight-bold active ">
                                  {number} </a>
                        </li>
                    )

                })
            }


        </ul>
    )
}
export default Pagination