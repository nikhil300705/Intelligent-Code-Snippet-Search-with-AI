import express from "express";
import { searchSnippets, seedSnippets } from "../controllers/snippetController.js";

const router = express.Router();

router.get("/search", searchSnippets);
router.post("/seed", seedSnippets);

export default router;
