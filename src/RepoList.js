import RepoDetails from "./RepoDetails";
import { useContext } from "react";
import { RepoContext } from "./contexts/RepoContext";
import { Link } from "react-router-dom";

const RepoList = (props) => {
  const valueName = useContext(RepoContext);
  console.log({ valueName });

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
          <div className="description">
            <span>{element?.description}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default RepoList;
