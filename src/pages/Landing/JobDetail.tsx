import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchJobById } from "@/services/jobsApi";
import { useFavorites } from "@/context/FavoritesContext";
import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addFavorite } = useFavorites();

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const jobData = await fetchJobById(id); // Use correct `id` parameter
        if (jobData) {
          setJob(jobData);
        } else {
          setError("Job not found");
        }
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to load job details");
      } finally {
        setLoading(false);
      }
    };

    getJobDetails();
  }, [id]);

  const saveToFavorites = () => {
    if (job) {
      addFavorite(job);
      alert("Job added to favorites!");
    }
  };

  const applyNow = () => {
    navigate("/candidate");
  };

  // Redirect to "Not Found" page if there's an error
  if (error) {
    navigate("/not-found");
    return null;
  }

  if (loading) {
    return <p>Loading job details...</p>;
  }

  return (
    <section className="p-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">{job.title}</h1>
          <p className="text-gray-500 text-sm">{job.company}</p>
          <p className="text-gray-500 text-sm">
            <span className="inline-flex items-center">
              <MapPin className="mr-1" />
              {job.location}
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-grow">
            <h2 className="text-xl font-bold">Description</h2>
            <p className="text-gray-600">{job.description}</p>

            <h2 className="text-xl font-bold mt-8">Requirements</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {Array.isArray(job.requirement)
                ? job.requirement.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))
                : "No specific requirements provided."}
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4 bg-gray-50 rounded-lg shadow">
            <h2 className="text-lg font-bold">Company Info</h2>
            <p className="text-sm text-gray-500">{job.company}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <Button
              onClick={applyNow}
              className="mt-4 w-full bg-blue-600 text-white"
            >
              Apply Now
            </Button>
            <Button
              onClick={saveToFavorites}
              className="mt-4 w-full bg-gray-200 text-gray-600 flex items-center justify-center"
            >
              <Heart className="mr-2 w-5 h-5" />
              Save to Favorites
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
