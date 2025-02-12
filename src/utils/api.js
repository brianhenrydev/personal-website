import axios from "axios";

const username = "brianhenrydev";

export const getProjects = () =>
	axios
		.get(`https://api.github.com/users/${username}/repos?visibility=public`)
		.then(({ data }) => data);

export const getRepoCommits = (repoName) =>
	axios
		.get(`https://api.github.com/repos/${username}/${repoName}/commits`)
		.then(({ data }) => data);

export const getPullRequests = () =>
	axios
		.get(`https://api.github.com/search/issues?q=author:${username}+type:pr`)
		.then(({ data }) => data);

export const getTotalCommits = () =>
	axios
		.get(`https://api.github.com/users/${username}/events?type=PushEvent`)
		.then(({ data }) => data);
