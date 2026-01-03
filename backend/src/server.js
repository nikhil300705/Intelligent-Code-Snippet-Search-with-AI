import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import snippetRoutes from "./routes/snippetRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

/* ---------- Middlewares ---------- */
app.use(cors());
app.use(express.json());

/* ---------- Database ---------- */
connectDB();

/* ---------- Routes ---------- */
app.use("/api/snippets", snippetRoutes);
app.use("/api/ai", aiRoutes);

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.send("Code Snippet Search API is running 🚀");
});

/* ---------- Server ---------- */
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
