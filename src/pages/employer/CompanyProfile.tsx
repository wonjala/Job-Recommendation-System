import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form"; // Replace with your custom form components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CompantFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  email: z.string().email("Invalid email format"),
  website: z.string().min(1, "Job title is required"),
  industry: z.enum(["IT", "Financial", "MArkting"]),
  size: z.string().min(1, "size must be a positive number"),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  // region: z.enum(["New York", "London", "Los Angeles"]),
  // location: z.string().min(1, "Location is required"),
});

const CompanyProfile: React.FC = () => {
  const form = useForm<z.infer<typeof CompantFormSchema>>({
    resolver: zodResolver(CompantFormSchema),
    defaultValues: {
      companyName: "",
      email: "",
      website: "",
      industry: "IT",
      size: "",
      location: "",
      description: "",
    },
  });

  const onSubmit = (values: z.infer<typeof CompantFormSchema>) => {
    console.log("Form submitted:", { ...values });
  };

  return (
    <main className="">
      <div className="p-0">
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white uppercase">
                Job Information
              </h3>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <div className="mt-4 w-full flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Comampny Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="shadcn"
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
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
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-2 w-full flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Job Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                              <SelectValue placeholder="Select a job type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="IT ">IT </SelectItem>
                            <SelectItem value="Marketing">Marketing</SelectItem>
                            <SelectItem value="Finance">Finance</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Size</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=""
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="my-2 w-full flex flex-col gap-6 md:flex-row">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="8,000"
                            {...field}
                            className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <textarea
                          placeholder=""
                          {...field}
                          className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button>Submit</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyProfile;
