import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "./candidate/Header";
import { X } from "lucide-react";

// Form type definition
type FormType = "login" | "signup" | "reset";

// Login Schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  remember: z.boolean().default(false),
});

// Zod schema based on ProfileSchema entity
const profileSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    role: z.string().default("CANDIDATE"),
    profileData: z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      languages: z.string().min(2, "Languages field is required"),
      title: z.string().min(2, "Title field is required"),
      age: z
        .number()
        .min(18, "Must be at least 18 years old")
        .max(100, "Must be at most 100 years old"),
      currentSalary: z.number().positive("Salary must be a positive number"),
      expectedSalary: z
        .number()
        .positive("Expected salary must be a positive number"),
      description: z.string().min(2, "Description is required"),
      email: z.string().email("Please enter a valid email address"),
      phone: z.string().min(10, "Phone number must be valid"),
      country: z.string().min(2, "Country field is required"),
      city: z.string().min(2, "City field is required"),
      disabilitySupport: z.boolean().default(false),
      skills: z.array(
        z.object({
          skillName: z.string().min(1, "Skill name is required"),
        })
      ),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Reset Password Schema
const resetSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

interface AuthLayoutProps {
  defaultForm?: FormType;
}

const NewAuthLayout = ({ defaultForm = "signup" }: AuthLayoutProps) => {
  const [formType, setFormType] = useState<FormType>(defaultForm);

  return (
    // <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    //   <Header />
    //   <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
    //     <div className="w-full max-w-xl">
    //       <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
    //         {formType === "login" && <LoginForm setFormType={setFormType} />}
    //         {formType === "signup" && <SignUpForm setFormType={setFormType} />}
    //         {formType === "reset" && (
    //           <ResetPasswordForm setFormType={setFormType} />
    //         )}
    //       </div>
    //     </div>
    //   </main>
    // </div>

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="container mx-auto flex flex-col items-center justify-center px-4 py-8 min-h-[calc(100vh-4rem)]">
        <div className="w-full max-w-2xl mx-auto">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-0">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                <nav className="flex space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button
                    onClick={() => setFormType("login")}
                    className={`pb-2 px-1 ${
                      formType === "login"
                        ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    } transition-colors duration-200`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setFormType("signup")}
                    className={`pb-2 px-1 ${
                      formType === "signup"
                        ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    } transition-colors duration-200`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => setFormType("reset")}
                    className={`pb-2 px-1 ${
                      formType === "reset"
                        ? "border-b-2 border-blue-500 text-blue-600 dark:text-blue-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    } transition-colors duration-200`}
                  >
                    Reset Password
                  </button>
                </nav>

                <div className="mt-6">
                  {formType === "login" && (
                    <LoginForm setFormType={setFormType} />
                  )}
                  {formType === "signup" && (
                    <SignUpForm setFormType={setFormType} />
                  )}
                  {formType === "reset" && (
                    <ResetPasswordForm setFormType={setFormType} />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <footer className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            {formType === "login" && (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => setFormType("signup")}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Create one now
                </button>
              </p>
            )}
            {formType === "signup" && (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => setFormType("login")}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
            {formType === "reset" && (
              <p>
                Remember your password?{" "}
                <button
                  onClick={() => setFormType("login")}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Sign in
                </button>
              </p>
            )}
          </footer>
        </div>
      </main>
    </div>
  );
};

const LoginForm = ({
  setFormType,
}: {
  setFormType: (type: FormType) => void;
}) => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Handle login submission
    console.log(values);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-sm text-gray-600">Sign in to access your account</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remember me
                </FormLabel>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>

      <div className="space-y-2 text-center text-sm">
        <button
          onClick={() => setFormType("reset")}
          className="text-blue-600 hover:underline"
        >
          Forgot password?
        </button>
        <p className="text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => setFormType("signup")}
            className="text-blue-600 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

const SignUpForm = ({
  setFormType,
}: {
  setFormType: (type: FormType) => void;
}) => {
  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      role: "CANDIDATE",
      profileData: {
        name: "",
        languages: "",
        title: "",
        age: 18,
        currentSalary: 0,
        expectedSalary: 0,
        description: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        disabilitySupport: false,
        skills: [],
      },
    },
  });

  function onSubmit(values: z.infer<typeof profileSchema>) {
    // Handle signup submission
    const { confirmPassword, ...submitData } = values;

    console.log(submitData);
  }

  return (
    // <div className="space-y-6 bg-red-200">
    //   <div className="space-y-2 text-center">
    //     <h1 className="text-2xl font-bold tracking-tight">Create Account</h1>
    //     <p className="text-sm text-gray-600">Join our inclusive job platform</p>
    //   </div>

    //   <Form {...form}>
    //     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    //       <div className="flex">
    //         {/* Name */}
    //         <FormField
    //           control={form.control}
    //           name="name"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Name</FormLabel>
    //               <FormControl>
    //                 <Input placeholder="John Doe" {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />

    //         {/* Title */}
    //         <FormField
    //           control={form.control}
    //           name="title"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Title</FormLabel>
    //               <FormControl>
    //                 <Input placeholder="Software Engineer" {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //       </div>

    //       <div className="flex">
    //         {/* Languages */}
    //         <FormField
    //           control={form.control}
    //           name="languages"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Languages</FormLabel>
    //               <FormControl>
    //                 <Input placeholder="English, Spanish" {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />

    //         {/* Age */}
    //         <FormField
    //           control={form.control}
    //           name="age"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Age</FormLabel>
    //               <FormControl>
    //                 <Input type="number" {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //       </div>

    //       <div className="flex">
    //         {/* Current Salary */}
    //         <FormField
    //           control={form.control}
    //           name="currentSalary"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Current Salary</FormLabel>
    //               <FormControl>
    //                 <Input type="number" placeholder="50000" {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />

    //         {/* Expected Salary */}
    //         <FormField
    //           control={form.control}
    //           name="expectedSalary"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Expected Salary</FormLabel>
    //               <FormControl>
    //                 <Input type="number" placeholder="60000" {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //       </div>

    //       {/* Description */}
    //       <FormField
    //         control={form.control}
    //         name="description"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Description</FormLabel>
    //             <FormControl>
    //               <Input
    //                 placeholder="Brief description about yourself"
    //                 {...field}
    //               />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* Email */}
    //       <FormField
    //         control={form.control}
    //         name="email"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Email</FormLabel>
    //             <FormControl>
    //               <Input placeholder="example@domain.com" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* Phone */}
    //       <FormField
    //         control={form.control}
    //         name="phone"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Phone</FormLabel>
    //             <FormControl>
    //               <Input placeholder="+1 (555) 000-0000" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* Country */}
    //       <FormField
    //         control={form.control}
    //         name="country"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Country</FormLabel>
    //             <FormControl>
    //               <Input placeholder="USA" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* City */}
    //       <FormField
    //         control={form.control}
    //         name="city"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>City</FormLabel>
    //             <FormControl>
    //               <Input placeholder="New York" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* Password */}
    //       <FormField
    //         control={form.control}
    //         name="password"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Password</FormLabel>
    //             <FormControl>
    //               <Input
    //                 type="password"
    //                 placeholder="SecurePassword123"
    //                 {...field}
    //               />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* Role */}
    //       <FormField
    //         control={form.control}
    //         name="role"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Role</FormLabel>
    //             <FormControl>
    //               <Input placeholder="CANDIDATE" {...field} />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       {/* Disability Support */}
    //       <FormField
    //         control={form.control}
    //         name="disabilitySupport"
    //         render={({ field }) => (
    //           <FormItem className="flex items-center space-x-2">
    //             <FormControl>
    //               <Checkbox
    //                 checked={field.value}
    //                 onCheckedChange={field.onChange}
    //               />
    //             </FormControl>
    //             <FormLabel>Disability Support</FormLabel>
    //           </FormItem>
    //         )}
    //       />

    //       <Button type="submit" className="w-full">
    //         Submit
    //       </Button>
    //     </form>
    //   </Form>

    //   <p className="text-sm text-center text-gray-600">
    //     Already have an account?{" "}
    //     <button
    //       onClick={() => setFormType("login")}
    //       className="text-blue-600 hover:underline"
    //     >
    //       Sign in
    //     </button>
    //   </p>
    // </div>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-0">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Sign up for a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Account Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Account Details</h3>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profileData.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profileData.age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">
                  Professional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profileData.title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profileData.languages"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Languages</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profileData.currentSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profileData.expectedSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="profileData.description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profileData.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profileData.phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profileData.country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profileData.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Additional Options */}
              <FormField
                control={form.control}
                name="profileData.disabilitySupport"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">
                      I require disability support or accommodations
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </Form>
        </CardContent>
        <div className="space-y-2 text-center text-sm">
          <button
            onClick={() => setFormType("reset")}
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => setFormType("login")}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
};

const ResetPasswordForm = ({
  setFormType,
}: {
  setFormType: (type: FormType) => void;
}) => {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof resetSchema>) {
    // Handle reset password submission
    console.log(values);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Reset Password</h1>
        <p className="text-sm text-gray-600">
          Enter your email to reset your password
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@company.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>
        </form>
      </Form>

      <p className="text-sm text-center text-gray-600">
        Remember your password?{" "}
        <button
          onClick={() => setFormType("login")}
          className="text-blue-600 hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default NewAuthLayout;
