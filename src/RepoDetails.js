import { useContext } from "react";
import { RepoContext } from "./contexts/RepoContext";
import "./styles.css";

const RepoDetails = (props) => {
  const ownerName = useContext(RepoContext);
  // console.log({ ownerName });
  return ownerName.map((val, ind) => (
    <div className="deatils" key={val.id}>
      <div className="left-section">
        <div>
          <img
            className="repo-detail-image"
            src={val.owner?.avatar_url}
            alt=""
          />
          <span className="repo-detail-visibilty">{val.visibility}</span>
        </div>
      </div>
      <div className="right-section">
        <div>{val.name}</div>
        <div>{`${val.forks} forks`}</div>
        <div>{val.description}</div>
      </div>
    </div>
  ));
};

export default RepoDetails;
