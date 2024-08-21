import express, { Request, Response } from "express";
import cors from "cors";
import dbconnection from "./config/db";
import jobs from "./routes/jobs.route";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
dbconnection();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobs);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
