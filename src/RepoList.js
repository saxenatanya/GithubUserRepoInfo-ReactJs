import RepoDetails from "./RepoDetails";
import { useContext, useState } from "react";
import { RepoContext } from "./contexts/RepoContext";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RepoList = (props) => {
  const [repoDetailsData, setRepoDetailsData] = useState([]);

  const valueName = useContext(RepoContext);
  console.log({ valueName });

  // function renderRepoDetails(e, element) {
  //   fetch(`https://api.github.com/users/${props.username}/${props.name}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setRepoDetailsData(data);
  //   });
  // }

  return valueName.map((element) => (
    <div className="title" key={element.id}>
      <div className="top">
        <div>
          <img src={element.owner?.avatar_url} alt="" />
        </div>
        <div className="repo-content">
          <Link to="/repo" className="reponame" element={<RepoDetails />}>
            {element?.name}
          </Link>
          {/* <Route path="/:{element.name}" element={<RepoDetails />}></Route> */}

          <div className="description">
            <span>{element?.description}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default RepoList;
