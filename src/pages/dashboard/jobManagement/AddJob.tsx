import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Building2,
  DollarSign,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { createJob } from "@/services/jobsApi";
import { Textarea } from "@/components/ui/textarea";
import InputTag from "@/components/common/InputTags";

const inputStyles =
  "w-full rounded border-[1.5px] border-stroke bg-transparent shadow-none min-h-[4em] py-3 px-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary";

const selectStyles =
  "w-full rounded border-[1.5px] border-stroke shadow-none min-h-[4em] bg-transparent py-3 px-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary";

// const jobFormSchema = z.object({
//   jobTitle: z
//     .string()
//     .min(5, { message: "Job title must be at least 5 characters" })
//     .max(100, { message: "Job title must be less than 100 characters" }),
//   category: z.enum(
//     ["engineering", "design", "marketing", "sales", "hr", "operations"],
//     {
//       required_error: "Please select a department",
//     }
//   ),
//   // jobTags: z.array(z.string()),
//   skills: z.array(z.string()),
//   jobTags: z.string().min(2, { message: "Job tags are required" }),

//   location: z.enum(["remote", "hybrid", "onsite"], {
//     required_error: "Please select a location type",
//   }),
//   jobType: z.enum(["full_time", "part_time", "contract", "internship"], {
//     required_error: "Please select employment type",
//   }),
//   experience: z.enum(["entry", "mid", "senior", "lead", "executive"], {
//     required_error: "Please select experience level",
//   }),
//   salary: z.object({
//     minimumSalary: z.string().min(1, { message: "Minimum salary is required" }),
//     maximumSalary: z.string().min(1, { message: "Maximum salary is required" }),
//   }),
//   email: z.string().email({ message: "Please enter a valid email address" }),
//   description: z
//     .string()
//     .min(100, { message: "Description must be at least 100 characters" })
//     .max(5000, { message: "Description must be less than 5000 characters" }),
//   requirements: z
//     .string()
//     .min(50, { message: "Requirements must be at least 50 characters" })
//     .max(2000, { message: "Requirements must be less than 2000 characters" }),
// });

const jobFormSchema = z.object({
  jobTitle: z
    .string()
    .min(5, { message: "Job title must be at least 5 characters" })
    .max(100, { message: "Job title must be less than 100 characters" }),
  category: z.enum(
    ["engineering", "design", "marketing", "sales", "hr", "operations"],
    {
      required_error: "Please select a department",
    }
  ),
  // skills: z.array(z.string()).optional(),
  jobTags: z.string().min(2, { message: "Job tags are required" }),
  location: z.enum(["remote", "hybrid", "onsite"], {
    required_error: "Please select a location type",
  }),
  jobType: z.enum(["full_time", "part_time", "contract", "internship"], {
    required_error: "Please select employment type",
  }),
  experience: z.enum(["entry", "mid", "senior", "lead", "executive"], {
    required_error: "Please select experience level",
  }),
  minimumSalary: z.string().min(2, { message: "Minimum salary is required" }),
  maximumSalary: z.string().min(2, { message: "Maximum salary is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 100 characters" })
    .max(5000, { message: "Description must be less than 5000 characters" }),
  requirement: z
    .string()
    .min(10, { message: "Requirements must be at least 50 characters" })
    .max(2000, { message: "Requirements must be less than 2000 characters" }),
});

const AddJob = () => {
  // const [jobTags, setJobTags] = useState([]);
  // const [skills, setSkills] = useState([]);

  // const [showAlert, setShowAlert] = useState(false);
  // const [alertMessage, setAlertMessage] = useState("");
  // const [isError, setIsError] = useState(false);

  // const form = useForm({
  //   resolver: zodResolver(jobFormSchema),
  //   defaultValues: {
  //     jobTitle: "",
  //     category: "engineering",
  //     location: "onsite",
  //     jobType: "full_time",
  //     experience: "mid",
  //     jobTags: "",
  //     salary: {
  //       minimumSalary: "0",
  //       maximumSalary: "0",
  //     },
  //     skills: "",
  //     email: "",
  //     description: "",
  //     requirements: "",
  //   },
  // });

  // const onSubmit = async (data) => {
  //   try {
  //     console.log(data);
  //     const response = await createJob(datas);
  //     console.log(response);
  //     setShowAlert(true);
  //     setTimeout(() => setShowAlert(false), 3000);

  //     // setApplicationsJobs(Array.isArray(data) ? data : []); // Ensure jobs is an array
  //   } catch (err) {
  //     console.error(err);
  //     setIsError(true);
  //   }

  //   // try {

  //   //   const response = await api.post("jobs/create", data);
  //   //   setIsError(false);
  //   //   setShowAlert(true);
  //   //   setAlertMessage("Job successfully posted!");
  //   //   form.reset();
  //   // } catch (error) {
  //   //   setIsError(true);
  //   //   setShowAlert(true);
  //   //   setAlertMessage("Error creating job posting. Please try again.");
  //   //   console.error("Error creating job:", error);
  //   // }
  //   // setTimeout(() => setShowAlert(false), 3000);
  // };

  const [skills, setSkills] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const form = useForm({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      jobTitle: "",
      category: "engineering",
      location: "onsite",
      jobType: "full_time",
      experience: "mid",
      jobTags: "",
      minimumSalary: "0",
      maximumSalary: "0",
      skills: [
        {
          skillName: "",
        },
      ],
      email: "",
      description: "",
      requirement: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Transform the data to match backend structure
      const formattedData = {
        ...data,
        minimumSalary: parseInt(data.minimumSalary),
        maximumSalary: parseInt(data.maximumSalary),
        skills: skills.map((name) => ({
          skillName: name,
        })),
      };
      console.log("Submitting job data:", formattedData);
      const response = await createJob(formattedData);
      console.log(response);
      setShowAlert(true);
      setAlertMessage("Job successfully posted!");
      setIsError(false);
      setTimeout(() => setShowAlert(false), 3000);
      form.reset();
      setSkills([]); // Reset skills
    } catch (err) {
      console.error("Submission error:", err);
      setIsError(true);
      setAlertMessage(
        err.response?.data?.message ||
          "Error creating job posting. Please try again."
      );
      setShowAlert(true);
    } finally {
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="w-full p-4">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Create Job Posting
        </h2>
        <div className="flex gap-4">
          <Button className="flex items-center bg-primary text-white py-4 gap-2">
            <Users size={18} />
            <Link to="/admin/jobs" className="text-white">
              View Jobs
            </Link>
          </Button>
        </div>
      </div>

      {showAlert && (
        <Alert
          className={`mb-4 ${
            isError ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
          } dark:bg-green-900 dark:text-green-100`}
        >
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white">
                  <Briefcase size={20} />
                  Basic Information
                </h3>

                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title</FormLabel>
                      <FormControl>
                        <Input
                          className={inputStyles}
                          placeholder="Enter job title"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building2 size={16} />
                        Category
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={selectStyles}>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="engineering">
                            Engineering
                          </SelectItem>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="sales">Sales</SelectItem>
                          <SelectItem value="hr">Human Resources</SelectItem>
                          <SelectItem value="operations">Operations</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="minimumSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <DollarSign size={16} />
                          Minimum Salary
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={inputStyles}
                            placeholder="Min salary"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="maximumSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <DollarSign size={16} />
                          Maximum Salary
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={inputStyles}
                            placeholder="Max salary"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-4">
                <h3 className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white">
                  <Clock size={20} />
                  Job Details
                </h3>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={selectStyles}>
                            <SelectValue placeholder="Select location type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                          <SelectItem value="onsite">On-site</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="jobType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={selectStyles}>
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="full_time">Full Time</SelectItem>
                          <SelectItem value="part_time">Part Time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={selectStyles}>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="mid">Mid Level</SelectItem>
                          <SelectItem value="senior">Senior Level</SelectItem>
                          <SelectItem value="lead">Team Lead</SelectItem>
                          <SelectItem value="executive">Executive</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className={inputStyles}
                        placeholder="Enter contact email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className="w-full my-2">
                    <FormLabel>Skills</FormLabel>
                    <FormControl>
                      <InputTag tags={skills} setTags={setSkills} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobTags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Tags</FormLabel>
                    <FormControl>
                      <Input
                        className={inputStyles}
                        placeholder="Enter job tags (comma-separated)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Description</FormLabel>
                    <FormControl>
                      <Textarea
                        className={inputStyles}
                        placeholder="Enter detailed job description"
                        {...field}
                        rows={6}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requirement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        className={inputStyles}
                        placeholder="Enter job requirements"
                        {...field}
                        rows={4}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-end gap-4">
              <Button type="button" className="py-4" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="py-4 text-white">
                Post Job
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddJob;
