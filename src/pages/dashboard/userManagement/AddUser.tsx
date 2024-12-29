import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import InputTag from "@/components/common/InputTags";
import { createUser, saveUser } from "@/services/userApi";

const userFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  languages: z
    .string()
    .min(2, { message: "Languages must be at least 2 characters" }),
  title: z.string().min(2, { message: "Title must be at least 2 characters" }),
  age: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => val >= 18, { message: "Must be at least 18 years old" })
    .refine((val) => val <= 100, { message: "Must be at most 100 years old" }),
  currentSalary: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => val > 0, { message: "Salary must be a positive number" }),
  expectedSalary: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => val > 0, { message: "Salary must be a positive number" }),
  description: z.string().min(1, { message: "Description is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  city: z.string().min(1, { message: "City is required" }),
});

const AddUser = () => {
  const [skills, setSkills] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const form = useForm({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      languages: "",
      title: "",
      age: "",
      currentSalary: "",
      expectedSalary: "",
      description: "",
      email: "",
      skills: [
        {
          skillName: "",
        },
      ],
      phone: "",
      country: "",
      city: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        skills: skills.map((name) => ({
          skillName: name,
        })),
      };
      console.log(formattedData);
      const response = await saveUser(formattedData);
      console.log(response);
      setShowAlert(true);
      setAlertMessage("User profile created successfully!");
      setIsError(false);
      form.reset();
      setSkills([]);
    } catch (err) {
      console.error("Submission error:", err);
      setIsError(true);
      setAlertMessage(
        err.response?.data?.message ||
          "Error creating user profile. Please try again."
      );
      setShowAlert(true);
    }
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Create User Profile
        </h2>
      </div>

      {showAlert && (
        <Alert
          className={`mb-4 ${
            isError ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"
          }`}
        >
          <AlertDescription>{alertMessage}</AlertDescription>
        </Alert>
      )}

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Professional Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter professional title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Languages</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter languages (comma-separated)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Salary</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter current salary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expectedSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expected Salary</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter expected salary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter professional description"
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit" className="py-4 text-white">
                Create
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddUser;
