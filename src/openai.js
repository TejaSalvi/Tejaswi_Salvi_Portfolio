const axios = require("axios");
const { openaiApiKey, openaiModel } = require("./config");

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

async function reviewDiff(diff, filePath) {
  const prompt = `
You are a senior software engineer doing code review.

File: ${filePath}

Diff:
${diff}

Tasks:
1. Identify bugs, security issues, and bad practices.
2. Suggest concrete improvements.
3. Be concise but specific.
4. If code is fine, say so briefly.
`;

  const res = await axios.post(
    OPENAI_URL,
    {
      model: openaiModel,
      messages: [
        { role: "system", content: "You are a strict, helpful code reviewer." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    },
    {
      headers: {
        Authorization: `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json"
      }
    }
  );

  return res.data.choices[0].message.content.trim();
}

module.exports = { reviewDiff };
