const RepoDetails = (element) => {
  return (
    <>
      <div className="deatils">
        <div className="left-section">
          <div>
            <img src={element.owner?.avatar_url} alt="" srcset="" />
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    </>
  );
};

export default RepoDetails;
