import React, { useState } from "react";
import "../index.css"
import Pagination from "./Pagination";
const GamesPost = ({ posts, loading }) => {
  var date;
  var n;

  const [dateon, setDateon] = useState();
  const [time, setTime] = useState();

  //team data fetch

  const [home_team_name, set_home_team_Name] = useState();
  const [home_team_city, set_home_team_city] = useState();
  const [home_team_confrence, set_home_team_confrence] = useState();
  const [home_team_division, set_home_team_division] = useState();
  const [home_team_score, set_home_team_score] = useState();

  const [visitor_team_name, set_visitor_team_Name] = useState();
  const [visitor_team_city, set_visitor_team_city] = useState();
  const [visitor_team_confrence, set_visitor_team_confrence] = useState();
  const [visitor_team_division, set_visitor_team_division] = useState();
  const [visitor_team_score, set_visitor_team_score] = useState();
  // const []

  date = new Date(dateon);
  const currdate = date.toDateString();

  const [showPerpage, setshowPerpage] = useState(8);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerpage,
  });
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <div><div className="d-flex" style={{ flexFlow: "wrap" }}>
    {posts.slice(pagination.start, pagination.end).map(post => (
      <div key={post.id}>
        <div className="card mt-1 border-0" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ width: 250, height: 100, }} >
          <div className="card-body" onClick={() => {
            //send data in useState
            setDateon(post.date);
            setTime(post.time);
            set_home_team_Name(post.home_team.full_name);
            set_home_team_city(post.home_team.city);
            set_home_team_confrence(post.home_team.conference);
            set_home_team_division(post.home_team.division);
            set_home_team_score(post.home_team_score);

            set_visitor_team_Name(post.visitor_team.full_name);
            set_visitor_team_city(post.visitor_team.city);
            set_visitor_team_confrence(post.visitor_team.conference);
            set_visitor_team_division(post.visitor_team.division);
            set_visitor_team_score(post.visitor_team_score);


          }}>
            <div style={{ display: "none" }}>{date = new Date(post.date),
              n = date.toDateString()}</div>
            <h4>{n}</h4>
            <h6 className="card-subtitle mb-2 text-muted  pt-1 " style={{ fontSize: " 0.8rem" }}>{post.status}</h6>
          </div>
        </div>

        {/* //modal for games */}

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" style={{ maxWidth: 800 }}>
            <div className="modal-content">
              <div className="modal-header justify-content-center d-block border-0 mb-3">
                <h4 className="modal-title " style={{ "color": "#f86e1d" }} id="exampleModalLabel">Game Description</h4>
                <div>{currdate}{time}</div>
              </div>
              <div className="modal-body">
                <div className="row justify-content-around">
                  <div className="col-4">
                    <ul className="list-group" style={{ alignItems: "end" }}>
                      <li className="list-group-item border-0" style={{ "fontWeight": "bold", fontSize: 19 }}>Home Team</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}>{home_team_name}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>City : </span>{home_team_city}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Conference : </span>{home_team_confrence}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Division : </span> {home_team_division}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Home Team Score : </span> {home_team_score}</li>
                    </ul>

                  </div>
                  <div className="col-4">
                    <ul className="list-group" style={{ alignItems: "end" }}>
                      <li className="list-group-item border-0" style={{ "fontWeight": "bold", fontSize: 19 }}>Visitor Team</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}>{visitor_team_name}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>City : </span>{visitor_team_city}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Conference : </span>{visitor_team_confrence}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Division : </span>{visitor_team_division}</li>
                      <li className="list-group-item border-0" style={{ padding: ".3rem 1rem" }}><span style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Visitor Team Score :</span> {visitor_team_score}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-0 mt-4">
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>


      </div>



    ))}


  </div>
    <Pagination showPerPage={showPerpage} onPaginationChange={onPaginationChange}
      total={posts.length} />
  </div>;

}

export default GamesPost;
