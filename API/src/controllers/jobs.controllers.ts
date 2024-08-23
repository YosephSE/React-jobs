import mongoose from "mongoose";
import Job from "../models/job.model";
import { Request, Response } from "express";

const allJobs = async (req: Request, res: Response) => {
  try {
    const limit = parseInt(req.query.limit as string) || 100;

    const jobs = await Job.find().sort({ updatedAt: -1 }).limit(limit);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addJob = async (req: Request, res: Response) => {
  try {
    if (
      !req.body.title ||
      !req.body.type ||
      !req.body.company.name ||
      !req.body.company.description ||
      !req.body.company.contactEmail ||
      !req.body.company.contactPhone ||
      !req.body.location ||
      !req.body.salary ||
      !req.body.description
    ) {
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
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const singleJob = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: "Please provide an ID" });
    } else if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteJob = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({ error: "Please provide an ID" });
    } else if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid ID" });
    }
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const editJob = async (req: Request, res: Response) => {
  const id = req.params.id;
  const job = req.body;
  if (!id) {
    return res.status(400).json({ error: "Please provide an ID" });
  } else if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  } else if (
    !job.title ||
    !job.type ||
    !job.company.name ||
    !job.company.description ||
    !job.company.contactEmail ||
    !job.company.contactPhone ||
    !job.location ||
    !job.salary ||
    !job.description
  ) {
    return res.status(400).json({ error: "Please fill all fields" });
  }
  try {
    await Job.findByIdAndUpdate(id, job, { new: true });
    res.json({ message: "Job Updated Successfully!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
export { allJobs, addJob, singleJob, deleteJob, editJob };
