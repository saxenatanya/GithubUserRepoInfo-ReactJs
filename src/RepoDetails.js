import { useContext } from "react";
import { RepoContext } from "./contexts/RepoContext";
import "./styles.css";

const RepoDetails = (props) => {
  const ownerName = useContext(RepoContext);
  console.log({ ownerName });
  return (
    <>
      <div className="deatils">
        <div className="left-section">
          <div>
            <img
              className="repo-detail-image"
              src={props.repoDetail[0].owner?.avatar_url}
              alt=""
              srcset=""
            />
            <span className="repo-detail-visibilty">
              {props.repoDetail[0].visibility}
            </span>
          </div>
        </div>
        <div className="right-section">
          <div>{props.repoDetail[0].name}</div>
          <div>{`${props.repoDetail[0].forks} forks`}</div>
          <div>{props.repoDetail[0].description}</div>
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
