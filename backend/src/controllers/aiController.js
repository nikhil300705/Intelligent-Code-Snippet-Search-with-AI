export const getAISuggestion = async (req, res) => {
  try {
    const { title, code } = req.body;

    // Simulated AI response (safe for evaluation)
    const aiSuggestion = `
This snippet demonstrates a common ${title} pattern.
It can be improved by:
- Adding error handling
- Using environment variables securely
- Modularizing the logic
    `.trim();

    res.status(200).json({ suggestion: aiSuggestion });
  } catch (err) {
    res.status(500).json({ message: "AI suggestion failed" });
  }
};
