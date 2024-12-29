import axios from "axios";

// API base URL from environment variables
const BASE_URL = "http://localhost:8080/jrs/jobs/";

export interface PostJobData {
  title: string;
  description: string;
  company: string;
  location: string;
  jobType?: string;
  salaryRange?: string;
  logo?: string;
}

export interface JobApplication {
  fullName: string;
  email: string;
  coverLetter?: string;
  resume: Object | File;
  jobId: string;
  jobTitle: string;
  createdAt?: Date; // Add this line to include 'createdAt'
}

interface SkillSchema {
  skillName: string;
}

interface JobFormData {
  jobTitle: string;
  category: string;
  location: string;
  jobType: string;
  experience: string;
  minimumSalary: number;
  maximumSalary: number;
  email: string;
  jobTags: string;
  description: string;
  requirement: string;
  skills: SkillSchema[];
}

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa("john_doe:Password")}`,
  },
  validateStatus: (status) => true,
});

// POST request to submit job data
export const createJob = async (jobData: JobFormData) => {
  const transformedData = {
    ...jobData,
    minimumSalary: parseInt(jobData.minimumSalary.toString()),
    maximumSalary: parseInt(jobData.maximumSalary.toString()),
    skills: jobData.skills.map((skill) => ({
      skillName: skill.skillName, // Fix the structure of skill name mapping
    })),
    createdDate: new Date(),
    lastUpdatedDate: new Date(),
  };

  try {
    const response = await api.post("save", transformedData); // Updated to use the correct endpoint
    return response.data;
  } catch (error) {
    console.error("Error saving job:", error);
    throw error;
  }
};

// Apply job application
export const applyJob = async (applicationData: JobApplication) => {
  try {
    const response = await api.post("application", applicationData); // Use the correct endpoint
    return response.data;
  } catch (error) {
    console.error("Error submitting job application:", error);
    throw error;
  }
};

// Fetch all jobs
export const fetchJobs = async () => {
  try {
    const response = await api.get("getAll");
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Fetch job details by ID
export const fetchJobById = async (jobId: string) => {
  try {
    const response = await api.get("getById", {
      params: { id: jobId }, // Ensure the correct query param is sent
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching job with ID ${jobId}:`, error);
    throw error;
  }
};

// Filter jobs by job title
export const jobFilter = async (category: string) => {
  try {
    const response = await api.get("findJob", {
      params: { category }, // Pass the jobTitle directly in the params
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching job with title ${jobTitle}:`, error);
    throw error;
  }
};
