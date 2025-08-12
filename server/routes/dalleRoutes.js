import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const router = express.Router();

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.post("/", async (req, res) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return res
        .status(500)
        .send("Missing OPENAI_API_KEY in server environment");
    }

    const { prompt } = req.body;
    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).send("Prompt is required");
    }

    const aiResponse = await openai.createImage({
      prompt: prompt.trim(),
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    const message =
      error?.response?.data?.error?.message ||
      error?.message ||
      "Something went wrong";
    console.error(error?.response?.data || error);
    res.status(500).send(message);
  }
});

export default router;
