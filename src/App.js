import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [repoData, setRepoData] = useState("");
  const [repoName, setRepoName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/saxenatanya/repos`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, description, image }) => {
    setRepoName(name);
    setDescription(description);
    setImage(image);
  };

  {
    console.log({ repoData });
  }

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <span>Github Repos</span>
        </div>
      </header>
      <section>
        <div className="search">
          <div className="search-container">
            <div className="input-container">
              <i className="fa fa-search"></i>
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filter by title"
              />
            </div>
            <div className="button-container">
              {/* <button onClick={}> Find Repo </button> */}
            </div>
          </div>
        </div>
        <div className="list">
          <div className="repo-container">
            <div className="title">
              <div className="top">
                <img src="${image}" alt="" srcset="" />
              </div>
              <div className="reponame"></div>
              <div className="description">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
