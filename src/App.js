import { useEffect, useState } from "react";
import RepoList from "./RepoList";
import RepoDetails from "./RepoDetails";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RepoContext } from "./contexts/RepoContext";

export default function App() {
  const [userName, setUserName] = useState("");
  const [repoData, setRepoData] = useState([]);

  function searchRepos() {
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepoData(data);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    searchRepos();
    console.log("click");
  }

  return (
    <RepoContext.Provider value={repoData}>
      <div className="App">
        <header>
          <div className="header-container">
            <span>Github Repos</span>
          </div>
        </header>
        <section>
          <div className="search">
            <div className="search-container">
              <form className="input-container">
                <i className="fa fa-search"></i>
                <input
                  type="text"
                  name="filter"
                  id="filter"
                  value={userName}
                  placeholder="Filter by repo"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button className="button-container" onClick={handleSubmit}>
                  Find Repo
                </button>
              </form>
            </div>
          </div>

          <div className="list">
            <div className="repo-container">
              <Router>
                <Routes>
                  <Route
                    path="/"
                    element={<RepoList repoData={repoData} />}
                  ></Route>
                  <Route path="/repo" element={<RepoDetails />}></Route>
                </Routes>
              </Router>
            </div>
          </div>
        </section>
      </div>
    </RepoContext.Provider>
  );
}
