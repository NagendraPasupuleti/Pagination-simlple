import React, {useEffect, useState} from 'react';
import './App.css';
import Axios from "axios"
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";


function App() {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage]=useState(5)

    useEffect(()=>{
        const fetchUsers=async ()=>{
            setLoading(true)
            let response=await Axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(response.data)
            setLoading(false)
        }
        fetchUsers()
    },[])

    //Get current Posts

    const indexOfLastPage=currentPage*postsPerPage;
    const indexOfFirstPage=indexOfLastPage-postsPerPage;
    const currentPosts=posts.slice(indexOfFirstPage,indexOfLastPage)
    const paginate=(number)=>{
        setCurrentPage(number)

    }
  return (
    <div className="App">
        <div className="container">
            <div className="row">
                <div className="col">
                   <h5 className="text-primary font-weight-bold my-3 mt-5">My Bolg Data</h5>
                    <Posts posts={currentPosts} loading={loading}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                </div>
            </div>
        </div>



    </div>
  );
}

export default App;
