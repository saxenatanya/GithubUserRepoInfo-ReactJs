import "./styles.css";

const RepoDetails = (props) => {
  return (
    <>
      {console.log({ props })}
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
