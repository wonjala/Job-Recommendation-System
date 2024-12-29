import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define the form schema using Zod
const LoginFormSchema = z.object({
  emailOrUsername: z.string().email(),
  password: z.string().min(8),
});

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export const LoginForm = ({ setFormType }) => {
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>({
    mode: "onSubmit",
    resolver: LoginFormSchema,
  });

  const onSubmit = (data: LoginFormInputs) => {
    // Handle form submission
    console.log("Form submitted:", data);
  };

  return (
    <>
      {/* ... */}
      <form
        id="formAuthentication"
        className="space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email or Username
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            id="email"
            name="emailOrUsername"
            placeholder="Enter your email or username"
            autoFocus
            {...register("emailOrUsername")}
          />
          {formState.errors.emailOrUsername && (
            <p className="text-sm text-red-500">
              {formState.errors.emailOrUsername.message}
            </p>
          )}
        </div>
        <div>
          {/* ... */}
          <input
            type="password"
            id="password"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            name="password"
            placeholder="••••••••••"
            {...register("password")}
          />
          {formState.errors.password && (
            <p className="text-sm text-red-500">
              {formState.errors.password.message}
            </p>
          )}
        </div>
        {/* ... */}
        <div>
          <Button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            type="submit"
            asChild
          >
            <Link to={"/"}>Login</Link>
          </Button>
        </div>
      </form>
      {/* ... */}
    </>
  );
};
