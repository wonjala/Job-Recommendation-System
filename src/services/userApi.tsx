import axios from "axios";
import clsx from "clsx";

// API base URL from environment variables
const BASE_URL = "http://localhost:8080/jrs/user/";
// const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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

const cache = new Map();

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Basic ${btoa(`john_doe:Password`)}`,
  },
  validateStatus: (status) => true,
});

// POST request to save user data
export const saveUser = async (userData) => {
  const transformedData = {
    ...userData,
    createdDate: new Date(),
    lastUpdatedDate: new Date(),
  };

  console.log("Sending data:", transformedData);
  try {
    const response = await api.post(`save`, transformedData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    }
    throw error;
  }
};

// Fetch all users
export const fetchAllUsers = async () => {
  const cacheKey = "fetchAllUsers";
  if (cache.has(cacheKey)) {
    console.log("Returning cached users data");
    return cache.get(cacheKey);
  }

  try {
    const response = await api.get(`getAll`);
    cache.set(cacheKey, response.data); // Cache the response
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

/**
 * Fetch job details by ID
 * @param jobId - The ID of the job to fetch
 * @returns The job details
 */
// Fetch user by ID
export const fetchUserById = async (id) => {
  try {
    const response = await api.get(`getById`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
};

// Fetch matching jobs by user ID
export const fetchMatchingJobsBySkill = async (userId) => {
  try {
    const response = await api.post(`matchingJobsBySkill`, userId);
    return response.data;
  } catch (error) {
    console.error(`Error fetching matching jobs for user ID ${userId}:`, error);
    throw error;
  }
};
