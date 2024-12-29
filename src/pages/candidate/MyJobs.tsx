import { JobCard } from "@/components/candidate/JobCard";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const appliedJobs = [
  {
    jobTitle: "Digital Marketing Executive",
    companyName: "TechCorp",
    location: "Balkumari, Lalitpur",
    skills: ["SEO", "Social Media", "Content Writing"],
    posted: "11 months ago",
    status: "In Progress",
  },
  {
    jobTitle: "Software Engineer",
    companyName: "InnovateTech",
    location: "Kathmandu, Nepal",
    skills: ["React", "Node.js", "MongoDB"],
    posted: "2 months ago",
    status: "Saved",
  },
  // Add more applied job objects as needed
];

const getJobsBasedOnStatus = (jobs: typeof appliedJobs, status: string) => {
  return jobs.filter((job) => job.status === status);
};

export const MyJobs: React.FC = () => {
  const savedJobs = getJobsBasedOnStatus(appliedJobs, "Saved");
  const inProgressJobs = getJobsBasedOnStatus(appliedJobs, "In Progress");
  const appliedJobsList = getJobsBasedOnStatus(appliedJobs, "Applied");

  return (
    <div className="space-y-4">
      <h3 className="font-medium text-black">My jobs</h3>
      <Tabs defaultValue="applied" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="inProgress">In Progress</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
        </TabsList>
        <TabsContent value="saved">
          {savedJobs.map((job, index) => (
            <JobCard
              key={index}
              jobTitle={job.jobTitle}
              companyName={job.companyName}
              location={job.location}
              skills={job.skills}
              posted={job.posted}
              status={job.status}
            />
          ))}
        </TabsContent>
        <TabsContent value="inProgress">
          {inProgressJobs.map((job, index) => (
            <JobCard
              key={index}
              jobTitle={job.jobTitle}
              companyName={job.companyName}
              location={job.location}
              skills={job.skills}
              posted={job.posted}
              status={job.status}
            />
          ))}
        </TabsContent>
        <TabsContent value="applied">
          {appliedJobsList.map((job, index) => (
            <JobCard
              key={index}
              jobTitle={job.jobTitle}
              companyName={job.companyName}
              location={job.location}
              skills={job.skills}
              posted={job.posted}
              status={job.status}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
