import Snippet from "../models/Snippet.js";
console.log("✅ NEW snippetController LOADED");

/**
 * TEST 2 – SEARCH
 * GET /api/snippets/search?q=keyword
 */
export const searchSnippets = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const snippets = await Snippet.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { language: { $regex: q, $options: "i" } },
        { tags: { $regex: q, $options: "i" } }
      ]
    });

    res.status(200).json(snippets);
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err.message });
  }
};

/**
 * TEST 1 – SEED
 * POST /api/snippets/seed
 */
export const seedSnippets = async (req, res) => {
  try {
    await Snippet.deleteMany({});

    const data = [
      {
        title: "MongoDB Connection Example",
        code: "mongoose.connect(process.env.MONGO_URI);",
        language: "javascript",
        tags: ["mongodb", "database"]
      },
      {
        title: "Express Server Boilerplate",
        code: "const app = express(); app.listen(5001);",
        language: "javascript",
        tags: ["express", "node"]
      }
    ];

    await Snippet.insertMany(data);

    res.status(200).json({
      message: "Sample snippets inserted successfully",
      count: data.length
    });
  } catch (err) {
    console.error("SEED ERROR:", err.message);
    res.status(500).json({
      message: "Seeding failed",
      error: err.message
    });
  }
};
