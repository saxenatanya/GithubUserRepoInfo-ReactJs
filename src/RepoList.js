import RepoDetails from "./RepoDetails";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
const repoDetail = [
  {
    id: 367340762,
    node_id: "MDEwOlJlcG9zaXRvcnkzNjczNDA3NjI=",
    name: "3ColumnCardFrontEndMentorChallenge",
    full_name: "saxenatanya/3ColumnCardFrontEndMentorChallenge",
    private: false,
    owner: {
      login: "saxenatanya",
      id: 82470912,
      node_id: "MDQ6VXNlcjgyNDcwOTEy",
      avatar_url: "https://avatars.githubusercontent.com/u/82470912?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/saxenatanya",
      html_url: "https://github.com/saxenatanya",
      followers_url: "https://api.github.com/users/saxenatanya/followers",
      following_url:
        "https://api.github.com/users/saxenatanya/following{/other_user}",
      gists_url: "https://api.github.com/users/saxenatanya/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/saxenatanya/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/saxenatanya/subscriptions",
      organizations_url: "https://api.github.com/users/saxenatanya/orgs",
      repos_url: "https://api.github.com/users/saxenatanya/repos",
      events_url: "https://api.github.com/users/saxenatanya/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/saxenatanya/received_events",
      type: "User",
      site_admin: false
    },
    html_url:
      "https://github.com/saxenatanya/3ColumnCardFrontEndMentorChallenge",
    description:
      "this repo contains solution to 3cloumn card challenge on frontendmentor",
    fork: false,
    url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge",
    forks_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/forks",
    keys_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/teams",
    hooks_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/hooks",
    issue_events_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/events",
    assignees_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/tags",
    blobs_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/languages",
    stargazers_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/stargazers",
    contributors_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/contributors",
    subscribers_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/subscribers",
    subscription_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/subscription",
    commits_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/merges",
    archive_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/downloads",
    issues_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/labels{/name}",
    releases_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/saxenatanya/3ColumnCardFrontEndMentorChallenge/deployments",
    created_at: "2021-05-14T11:24:09Z",
    updated_at: "2021-06-19T12:46:56Z",
    pushed_at: "2021-06-19T12:46:53Z",
    git_url:
      "git://github.com/saxenatanya/3ColumnCardFrontEndMentorChallenge.git",
    ssh_url:
      "git@github.com:saxenatanya/3ColumnCardFrontEndMentorChallenge.git",
    clone_url:
      "https://github.com/saxenatanya/3ColumnCardFrontEndMentorChallenge.git",
    svn_url:
      "https://github.com/saxenatanya/3ColumnCardFrontEndMentorChallenge",
    homepage: null,
    size: 10,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main"
  }
];

const RepoList = (props) => {
  const [hidelist, setHideList] = useState(false);

  function renderRepoDetails(e, element) {
    // e.preventDefault();
    console.log("renderRepoDetails click");
    console.log({ element });
    return (
      <div className="deatils">
        <div className="left-section">
          <div>
            <img src={element.owner?.avatar_url} alt="" />
          </div>
        </div>
        <div className="right-section"></div>
      </div>
    );
  }

  return hidelist ? (
    <RepoDetails repoDetail={repoDetail} />
  ) : (
    props.repoData1.map((element) => (
      <div className="title" key={element.id}>
        <div className="top">
          <div>
            <img src={element.owner?.avatar_url} alt="" />
          </div>
          <div className="repo-content">
            {/* <Link to="/repo" className="btn btn-primary">
              {" "}
              {element?.name}
            </Link> */}
            <div className="reponame" onClick={() => setHideList(true)}>
              {" "}
              {element?.name}
            </div>
            <div className="description">
              <span>{element?.description}</span>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default RepoList;
