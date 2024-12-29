import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  languages: z.string().min(1, "Please enter at least one language"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  age: z
    .number()
    .min(18, "Must be at least 18 years old")
    .max(100, "Must be at most 100 years old"),
  currentSalary: z.number().min(0, "Salary must be a positive number"),
  expectedSalary: z
    .number()
    .min(0, "Expected salary must be a positive number"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  country: z.string().min(4, "Country must be at least 4 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("data submitted");
    console.log(data);
  };

  return (
    <main className="">
      <div className="p-0">
        <div className="flex flex-col gap-4">
          <div className="p-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white uppercase">
                Basic Information
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6.5">
                <div className="my-2 flex flex-col gap-6 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Name
                    </label>
                    <Input
                      type="text"
                      {...register("name")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.name && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Professional Title
                    </label>

                    <Input
                      type="text"
                      {...register("title")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.title && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.title.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="my-2 flex flex-col gap-6 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Languages
                    </label>

                    <Input
                      type="text"
                      {...register("languages")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.languages && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.languages.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Age
                    </label>
                    <Input
                      type="number"
                      {...register("age", { valueAsNumber: true })}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.age && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.age.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="my-2 flex flex-col gap-6 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Current Salary
                    </label>
                    <Input
                      type="number"
                      {...register("currentSalary", {
                        valueAsNumber: true,
                      })}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.currentSalary && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.currentSalary.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Expected Salary
                    </label>
                    <Input
                      type="number"
                      {...register("expectedSalary", {
                        valueAsNumber: true,
                      })}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.expectedSalary && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.expectedSalary.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="my-2">
                  <label className="mb-2 block text-black dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={4}
                    {...register("description")}
                    className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors.description && (
                    <p className="text-meta-1 text-sm mt-1">
                      {errors.description.message}
                    </p>
                  )}
                </div>

                <div className="border-b border-stroke py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white uppercase">
                    Contact Information
                  </h3>
                </div>

                <div className="my-2 flex flex-col gap-6 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label className="mb-2 block text-black dark:text-white">
                      Email
                    </label>
                    <Input
                      type="email"
                      {...register("email")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.email && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <label className="mb-2 block text-black dark:text-white">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      {...register("phone")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.phone && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="my-2 flex flex-col gap-6 md:flex-row">
                  <div className="w-full md:w-1/2">
                    <label className="my-2 block text-black dark:text-white">
                      Country
                    </label>
                    <Input
                      type="text"
                      {...register("country")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.email && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <label className="my-2 block text-black dark:text-white">
                      City
                    </label>
                    <Input
                      type="text"
                      {...register("city")}
                      className="w-full shadow-none rounded border-[1.5px] border-stroke bg-transparent py-4 px-3 text-black outline-none transition focus:border-blue-600 active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors.phone && (
                      <p className="text-meta-1 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="flex mt-4 justify-center rounded bg-primary px-6 py-4 font-medium text-white hover:bg-opacity-90"
                >
                  Save Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
