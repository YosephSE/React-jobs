import express, { Request, Response } from "express";
import cors from "cors";
import jobs from "./routes/jobs";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobs);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});