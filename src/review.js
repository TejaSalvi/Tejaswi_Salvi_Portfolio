const { getChangedFiles, createReviewComment, createSummaryComment } = require("./github");
const { reviewDiff } = require("./openai");

async function main() {
  try {
    console.log("🔍 Fetching changed files...");
    const files = await getChangedFiles();

    if (!files.length) {
      console.log("No changed files found.");
      return;
    }

    const summary = [];
    let positionFallback = 1;

    for (const file of files) {
      if (!file.patch) continue;

      console.log(`🧠 Reviewing ${file.filename}...`);
      const aiReview = await reviewDiff(file.patch, file.filename);

      summary.push(`- **${file.filename}**\n${aiReview}`);

      // Fallback: comment near top of file (position 1)
      await createReviewComment(file.filename, positionFallback, `🤖 AI Review:\n\n${aiReview}`);
      positionFallback++;
    }

    if (summary.length) {
      const body = `
### 🤖 AI Code Review Summary

${summary.join("\n\n")}
`;
      await createSummaryComment(body);
      console.log("✅ AI review comments posted.");
    } else {
      console.log("No patches to review.");
    }
  } catch (err) {
    console.error("❌ Error running AI review:", err.message);
    process.exit(1);
  }
}

main();
