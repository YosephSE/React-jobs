import Job from "../models/job.model";
import { Request, Response } from "express";

const allJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

const addJob = async (req: Request, res: Response) => {
    try {
        if(!req.body.title || !req.body.type || !req.body.company.name || !req.body.company.description || !req.body.company.contactEmail || !req.body.company.contactPhone || !req.body.location || !req.body.salary || !req.body.description) {
            return res.status(400).json({ error: "Please fill all fields" });
        }
      const job = new Job({
        title: req.body.title,
        type: req.body.type,
        company: {
          name: req.body.company.name,
          description: req.body.company.description,
          contactEmail: req.body.company.contactEmail,
          contactPhone: req.body.company.contactPhone,
        },
        location: req.body.location,
        salary: req.body.salary,
        description: req.body.description,
      });
      const newJob = await job.save();
      res.json(newJob);
    }catch (error) {
      res.status(500).json({ error: error });
}}

export { allJobs, addJob };