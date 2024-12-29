import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const CustomSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const myRef = useRef<HTMLInputElement>(null); // Specify the input type for better type safety
  const navigate = useNavigate();

  const handleSearch = () => {
    const searchValue = myRef.current?.value.trim(); // Get the input value
    if (searchValue) {
      setIsLoading(true);
      navigate(`/search-companies/${searchValue}`); // Navigate to the target page with the value
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full rounded-lg shadow justify-center items-start inline-flex">
      <div className="w-full p-2">
        <div className="bg-white flex max-sm:flex-col gap-4 rounded items-center justify-between sm:flex-row sm:justify-center">
          <input
            ref={myRef}
            type="text"
            placeholder="Industry"
            className="placeholder:text-sm placeholder:font-normal text-[#4f5e64] py-3 px-2 w-full placeholder:text-[#4f5e64] font-semibold border-none shadow-none active:outline-none focus-within:outline-none border rounded"
          />

          <Button
            type="submit"
            disabled={isLoading}
            onClick={handleSearch}
            className="inline-flex w-full items-center justify-center gap-2 flex-shrink-0 px-4 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
          >
            <Search size={20} />
            {isLoading ? "Searching..." : "Find Jobs"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;
