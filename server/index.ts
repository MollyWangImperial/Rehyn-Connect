import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createAliraSpeaker, createAliraVoiceRouter } from "./alira-voice";
import { createAliraSpeakRouter } from "./alira-speak";
import { createLoungePhotoCheckRouter } from "./lounge-photo-check";
import { createFeedbackRouter } from "./feedback";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Read aloud (Library, My Time) in Alira's voice.
  const speakAlira = createAliraSpeaker({ root: path.resolve(__dirname, "..") });
  app.use("/api/alira/speak", createAliraSpeakRouter(speakAlira));
  app.use("/api/lounge/photo-check", createLoungePhotoCheckRouter({ root: path.resolve(__dirname, "..") }));
  // The Library's Feedback button: each message goes to the server log (server/feedback.ts).
  app.use("/api/feedback", createFeedbackRouter());
  // Its /status is Render's health check.
  app.use(
    "/api/alira/voice",
    createAliraVoiceRouter({ root: path.resolve(__dirname, "..") })
  );

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production" || path.basename(__dirname) === "dist"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
