// AuthPageLayout.js
import SubscribeSection from "@/components/common/SubscriberSection";
import { useState } from "react";
import {
  LoginForm,
  ResetPasswordForm,
  SignUpForm,
} from "@/pages/auth/AuthForm";
import Header from "./candidate/Header";

const AuthLayout = () => {
  const [formType, setFormType] = useState<"login" | "signup" | "reset">(
    "login"
  );

  return (
    <div>
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
          <div className="w-full rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
              {formType === "login" && <LoginForm setFormType={setFormType} />}
              {formType === "signup" && (
                <SignUpForm setFormType={setFormType} />
              )}
              {formType === "reset" && (
                <ResetPasswordForm setFormType={setFormType} />
              )}
            </div>
          </div>
        </div>
      </section>

      <SubscribeSection />
    </div>
  );
};

export default AuthLayout;
