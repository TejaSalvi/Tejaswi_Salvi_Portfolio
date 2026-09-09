const axios = require("axios");
const { owner, repo, pullNumber, githubToken } = require("./config");

const GITHUB_API = "https://api.github.com";

async function getChangedFiles() {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/pulls/${pullNumber}/files`;
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
      "User-Agent": "ai-code-reviewer",
      Accept: "application/vnd.github+json"
    }
  });
  return res.data;
}

async function createReviewComment(path, position, body) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/pulls/${pullNumber}/comments`;
  await axios.post(
    url,
    {
      body,
      path,
      position
    },
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "User-Agent": "ai-code-reviewer",
        Accept: "application/vnd.github+json"
      }
    }
  );
}

async function createSummaryComment(body) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/issues/${pullNumber}/comments`;
  await axios.post(
    url,
    { body },
    {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "User-Agent": "ai-code-reviewer",
        Accept: "application/vnd.github+json"
      }
    }
  );
}

module.exports = {
  getChangedFiles,
  createReviewComment,
  createSummaryComment
};
