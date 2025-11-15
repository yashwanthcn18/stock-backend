import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "AIzaSyALlIX_C_2wFvg54CvD1Ptq9aAcfqur7MM";

app.post("/analyze", async (req, res) => {
  const query = req.body.query;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: query }] }],
      }),
    }
  );

  const data = await response.json();
  res.json(data);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
