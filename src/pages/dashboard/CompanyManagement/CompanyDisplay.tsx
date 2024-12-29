import { Building2, MapPin, Users, Phone, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { jobFilter } from "@/services/jobsApi";

const CompanyDisplay = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { category } = useParams();

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await jobFilter(category); // Fetch jobs by category
        setJobs(response); // Update the jobs state
      } catch (err) {
        setError("Failed to load jobs. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, [category]);

  if (loading) {
    return <div className="min-h-screen">Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-red-500 min-h-screen">{error}</div>;
  }

  return (
    <div className="w-full p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Search Results ({jobs.length})
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs &&
          jobs.map((job) => (
            <Card
              key={job.jobId}
              className="bg-white hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="text-primary" size={24} />
                  {job.jobTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={16} />
                  <span>{job.category}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  <a
                    href={`mailto:${job.email}`}
                    className="text-primary hover:underline"
                  >
                    {job.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={16} />
                  <span>Experience: {job.experience}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <span>
                    Salary: ${job.minimumSalary} - ${job.maximumSalary}
                  </span>
                </div>

                <p className="text-gray-600 mt-4 line-clamp-3">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill.skillId}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm"
                    >
                      {skill.skillName}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  <Button asChild className=" text-white" size="sm">
                    <a href={`/job-details/id=${job.jobId}`}>View</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
      {jobs.length === 0 && (
        <div className="flex w-full flex-col items-center justify-center min-h-[30vh] bg-background">
          <img
            alt="magnifying-glass"
            src="https://openui.fly.dev/openui/100x100.svg?text=🔍"
            className="mb-4"
          />
          <h1 className="text-lg font-semibold text-muted-foreground">
            Sorry! No result found :(
          </h1>
          <p className="text-sm text-muted-foreground text-center mt-2">
            We're sorry what you were looking for. Please try another way
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyDisplay;
