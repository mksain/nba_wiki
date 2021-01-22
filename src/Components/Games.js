import React, { useEffect, useState } from "react";
import GamesPost from "./GamesPost"

const Games = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await fetch('https://www.balldontlie.io/api/v1/games');
            const dataa =await res.json();
            setPosts(dataa.data);
            setLoading(false);
        }

        fetchPosts();
    }, []);

    console.log(posts);

    return (
        <div className="container mt-5 pt-3 px-5 pb-3" style={{boxShadow:"0px 1px 11px 0px #babbbd"}}>
             <GamesPost posts={posts} loading={loading}/>
             
        </div>
    );
}
export default Games;