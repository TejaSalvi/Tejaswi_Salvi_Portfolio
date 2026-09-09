const OWNER = process.env.GITHUB_REPOSITORY?.split("/")[0];
const REPO = process.env.GITHUB_REPOSITORY?.split("/")[1];
const PULL_NUMBER = process.env.PR_NUMBER || process.env.GITHUB_REF?.split("/").pop();

module.exports = {
  owner: OWNER,
  repo: REPO,
  pullNumber: Number(PULL_NUMBER),
  githubToken: process.env.GITHUB_TOKEN,
  openaiApiKey: process.env.OPENAI_API_KEY,
  openaiModel: process.env.OPENAI_MODEL || "gpt-4o-mini"
};
