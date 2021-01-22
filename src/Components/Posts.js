import React, { useState } from "react";
import Tippy from "@tippy.js/react"
import "tippy.js/dist/tippy.css"

const Posts = ({ posts, loading }) => {

  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [conference, setConference] = useState();
  const [division, setDivision] = useState();


  const Tooltips = () => {
    return <span>
      <div><h6>{name}</h6>
        <h6>city : {city}</h6>
        <h6>Conference : {conference}</h6>
        <h6>Division : {division}</h6>
      </div></span>

  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <div className="d-flex" style={{ flexFlow: "wrap" }}>
    {posts.map(post => (
      <div>

        <Tippy content={<Tooltips />} placement="right">
          <div className="card mt-1 border-0" style={{ width: 250, height: 100, }} onMouseOver={() => {
            setName(post.full_name);
            setCity(post.city);
            setConference(post.conference);
            setDivision(post.division);
            <div><h1>{console.log(post.id)}</h1></div>
          }}>
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
              <h4>{post.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted " style={{ fontSize: " 0.8rem" }}>{post.division}</h6>
            </div>
          </div>
        </Tippy>
      </div>
    ))}


  </div>;

}

export default Posts;
