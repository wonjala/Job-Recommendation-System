// LoginForm.js
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";

const LoginFormSchema = z.object({
  emailOrUsername: z.string().email(),
  password: z.string().min(8, "Password must not be empty"),
});

type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export const LoginForm = ({ setFormType }) => {
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("data submitted");
    console.log(data);
  };
  return (
    <>
      <div className="min-h-[40vh] mx-auto px-4">
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="w-full max-w-lg p-6 bg-white rounded-lg">
            {/* Logo */}
            <div className="mb-4">
              <p className="text-gray-600 text-base text-center">
                Welcome back!
              </p>
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Member Login
              </h1>
            </div>

            {/* Form */}
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
                <Input
                  type="text"
                  className="mt-1 shadow-none  block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  id="email"
                  placeholder="Enter your email or username"
                  autoFocus
                  {...register("emailOrUsername")}
                />
                {formState.errors.emailOrUsername && (
                  <p className="text-sm mt-2 text-red-500">
                    {formState.errors.emailOrUsername.message}
                  </p>
                )}
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <a
                    href="auth-forgot-password-basic.html"
                    className="text-sm text-primary-500 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      setFormType("reset");
                    }}
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="mt-1 relative">
                  <Input
                    type="password"
                    id="password"
                    className=" shadow-none block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="••••••••••"
                    {...register("password")}
                  />
                  {formState.errors.password && (
                    <p className="text-sm text-red-500">
                      {formState.errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  type="checkbox"
                  id="remember-me"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember Me
                </label>
              </div>
              <div>
                <Button
                  className="w-full  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  type="submit"
                  // asChild
                >
                  Login
                </Button>
              </div>
            </form>

            {/* Sign-up Link */}
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Button
                type="button"
                variant="link"
                onClick={() => {
                  setFormType("signup");
                }}
                className="font-medium p-0 text-neutral-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// v.0.0
// export const LoginForm = ({ setFormType }) => (
//   <>
//     <p className="text-gray-600 text-base text-center">Welcome back!</p>
//     <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
//       Member Login
//     </h1>
//     <form className="space-y-4 md:space-y-6" action="#">
//       <div>
//         <label
//           htmlFor="email"
//           className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
//         >
//           Username or email address
//         </label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           className="h-14 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="name@company.com"
//           required
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="password"
//           className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="•••••••"
//           className="h-14 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           required
//         />
//       </div>
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <input
//             id="remember"
//             aria-describedby="remember"
//             type="checkbox"
//             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//             required
//           />
//           <label
//             htmlFor="remember"
//             className="text-gray-500 text-sm dark:text-gray-300"
//           >
//             Remember me
//           </label>
//         </div>
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             setFormType("reset");
//           }}
//           className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//         >
//           Lost your password?
//         </a>
//       </div>
//       <button
//         type="submit"
//         className="w-full text-white bg-neutral-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//       >
//         Sign in
//       </button>
//       <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
//         Don’t have an account yet?{" "}
//         <Button
//           type="button"
//           variant="link"
//           onClick={() => {
//             setFormType("signup");
//           }}
//           className="font-medium p-0 text-neutral-600 hover:underline dark:text-primary-500"
//         >
//           Sign up
//         </Button>
//       </p>
//     </form>
//   </>
// );

export const SignUpForm = ({ setFormType }) => (
  <>
    <p className="text-gray-600 text-base text-center">Register</p>
    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
      Member Registration
    </h1>
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="h-14 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-4">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-sm text-gray-600">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full text-white bg-neutral-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Registration
      </Button>
      <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Button
          type="button"
          variant="link"
          onClick={() => {
            setFormType("login");
          }}
          className="font-medium p-0 text-neutral-600 hover:underline dark:text-primary-500"
        >
          Login
        </Button>
      </p>
    </form>
  </>
);

export const ResetPasswordForm = ({ setFormType }) => (
  <>
    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
      Reset Your Password
    </h1>
    <p className="text-sm text-gray-600">
      Lost your password? Please enter your username or email address. You will
      receive a link to create a new password via email.
    </p>
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
        >
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="h-14 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full text-white bg-neutral-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Send Reset Link
      </Button>
      <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
        Remember your password?{" "}
        <Button
          type="button"
          variant="link"
          onClick={() => {
            setFormType("login");
          }}
          className="font-medium p-0 text-neutral-600 hover:underline dark:text-primary-500"
        >
          Login
        </Button>
      </p>
    </form>
  </>
);
