import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8008;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
