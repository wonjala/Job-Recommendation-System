import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-7xl font-bold text-neutral-800">404</h1>
        <h4 className="text-4xl font-normal">
          Oops! This page cannot be found
        </h4>
        <Button asChild className="bg-neutral-800">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default PageNotFound;
