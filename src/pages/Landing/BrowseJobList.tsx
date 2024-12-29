import { Button } from "@/components/ui/button";
import { RecentJobCards } from "../../components/candidate/Cards";
import { Link } from "react-router-dom";

const jobs = [
  {
    logoSrc:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABXCAMAAACz6KLuAAABI1BMVEUAAAAAm7YAm7YAm7YAm7cAm7YAm7cAm7YAm7YAm7YAm7YAm7YAm7YAm7cAm7YAm7YAm7YAm7YAm7f6rDr6rDr7rTcAm7b6rDoAm7YAm7YAm7YAm7b6rDoAm7YAm7cAm7cAm7YAm7YAm7f7rDkAm7f6rDr6rDr6rDoAm7b7rDoAm7b7rDr6rDr7rDkAm7YAm7YAm7b8rTf6rDoAm7YAm7YAm7b7rDr7rTgAm7j7rDoAm7b9rDj+rTT6rDr6rDoAm7f8rTn6rDr6rDv6rDv6rDv8rDgAm7b8rDn8rDn6rDr6rDr6rDr8rDkAm7YAm7b6rDr7rDkAm7b6rDoAm7YAm7f9rTb8rDkAm7b8rDj9rTT7rDn8rDn7rTr9rTX6rDoAm7b6rDpdWZbqAAAAX3RSTlMA+PvUDNwGBPXw5+NjHshow5lV8sYN6+rh2L6zsqCQbl01LSkT+fblpJxO38+4g0U6CdXMrKd9Xkk6GQcD3I2LgXBsY1NBQBiqpYV2WSgl7sC3lX94ZzQjIhTKSC0cTJslDzIAAARASURBVFjD7Zh3U+JAGMY3kAABpEvvHelFEAWkqgfYu56XfP9PcWxAvS2Q5Ia5mZvh968vD6/P7ltYsGPHjh07/h1sxVwKBWwWiy0QKpkr7LZ0k+as1mTkDQyj0TCMgXebtFnzHi0yMer3poP3qkLhg1DdxAgYjKl+GNVjka1gLXPtdHq6rruEvK5ukbCwBq5h1YFvni7y4iepm2FVLmO7UdiAO/z8FTq5Ef/E0zzfJPz8wAky2D8tb7tEFGdzf62wPn4oyGK4Xxp+HhRxMq21Lpd9ggIsUtqdWVokcK1JWx81CUrgojD6oyiSZAZ0bTOhTIcvwehxTSRJFX/RlB2kMh0mDMP7aZGCpw9IzryCQtwPMD4n0khfkMqXdUEpXHkRfwKtpjlC9gy7oJhGEraOAl06SBY3Q1XRGDmtljMif+QO4CdGGaq0M4dLx2y02uBs9ojj6MgRCft9vLDCa4UfqAZTVOnaCE+6RBO2V74j4mEfD/srr3UAyNhDT/ruJ347LKRy6BiNObY2/P5slAWQqkukUmsDjJKGuAUOljgPdsGypZ78SNOlcx2AcuXHlW1l3WqGjB+H8/YJGr+/TvntBWBYjXgDKkvN7XUWLHQzmXztpvenhXOXSKcwATgNzA/3gX45nDzfI6T/fi5ZkRjlPGIh139sPTZz6HcESeU9fF7dQzf2Zxn0hH70ms3pXdApFpqTVwB5ncy+JljK1UtQeqkXLRPtMVQeiHScuSfwzWsrV3wrFFzBaRuQXJ3y6LWDk7Uzv6Yre2YAo5poP32smbN+1GovHCKJIl05PexI/ymbTCZZPZDBilrNHIIFwxRduicdpq4S9mst9rKcNuaHMSLdXLpyPiGde2NR9LDqbfHN0iED6scRsgegTPdha7cxnyder2yUDqD91AczaeXpZ/izs8jZjkx3FdJaGDzwUPu8qwqnM2JghN2KdPpu0UxYO9oTntUa0qVWy2AhHb9FqyCm8hifqMd4PV5YfYS1hbOtXL7uObTaiJbBpqwjPkrJPDopVuekTAQE7SWAKCt0EzzHlyClXtqwXG5R6cCm23cVRh3hpfY0zhCH2Dwh/RDCyQ3SOnpTHaVp7YMNYGMjqkPEZEeBHvbKYRe5HdMX6WB4bCChVssPsNWucZH5MqM4lBbnCoctrQG8GOXH7rLJjy7eavl8t1DsL0d13CIIxNhAUb4sfEzm8/fEatLFiDjvM6Vlq19x2DMfsWKFSS35xYwhFrOwhgjyUkpR/Tp56jOQX5+l2qF+CSbhaEmTq7tBbnUn4e/pSZM/OFSTPQaKuLSoVa7HgELOOHXKJgdQjMOrRtltBiowm5QrG9ZNcrU//0msMsoqHi3w3V5eWf1TC+Q2pgfquZJ/IDI+yCyRf/2sFXIoTFn9Y5y8y+qfEDXSE+J2Hz41y4fPQ+se2BJsLLp6rr3NnlorSbBjx47/j9++0+xPNpB3kQAAAABJRU5ErkJggg==",
    position: "Digital Marketing Executive",
    location: "Balkumari, Lalitpur",
    type: "Full Time",
    published: "11 months ago",
    salary: "20 - 40",
  },
  {
    logoSrc:
      "data:image/png;base64,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",
    position: "Software Engineer",
    location: "Kathmandu, Nepal",
    type: "Part Time",
    published: "2 months ago",
    salary: "30 - 50",
  },
  // Add more job objects as needed
];

const BrowseJobList = () => {
  return (
    <div>
      {" "}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        <div className=" px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
          <div className=" md:text-center">
            <div className="md:w-3/5 space-y-4 mx-auto">
              <h2 className="font-bold text-5xl text-gray-200">
                Browse Job List
              </h2>
            </div>
            {/* <SearchJob /> */}

            <form
              action="/"
              method="POST"
              className="mt-8 absolute bottom-[-10%] z-10 left-1/2 -translate-x-1/2 w-2/3"
            >
              <div className="bg-white flex gap-4 p-2 rounded items-center justify-between sm:flex-row sm:justify-center">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Job Title,keywords, or Phrase"
                  className="py-3 px-2 w-full placeholder:text-neutral-800 font-semibold shadow-none border-b-2 border-blue-700 active:outline-none focus-within:outline-none"
                  required
                />

                <input
                  placeholder="email"
                  type="emial"
                  className="py-3 px-2 w-full placeholder:text-neutral-800 font-semibold shadow-none border-b-2 border-blue-700 active:outline-none focus-within:outline-none"
                />
                <input
                  placeholder="sector"
                  type="emial"
                  className="py-3 px-2 shadow-none placeholder:text-neutral-800 font-semibold w-full border-b-2 border-blue-700 active:outline-none focus-within:outline-none"
                />

                <Button className="inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:mt-0  sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                  Find Jobs
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute aspect-auto min-h-[40vh] overflow-hidden -z-10 inset-0">
          <img
            className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg"
            alt=""
          />
        </div>

        <div className="absolute -z-10 inset-0 hidden bg-gradient-to-r md:block from-blue to-transparent" />
      </section>
      <section className="min-h-[10vh] p-4">
        <div className="max-w-7xl p-4 mx-auto">
          <header className="flex justify-between items-center">
            <div className="">
              <p className="text-neutral-700 text-2xl uppercase font-semibold">
                {jobs.length} JOBS FOUND
              </p>
            </div>

            <Button className="bg-blue-700 sm:px-1">
              <Link to="/home/browse-job-list" className=" text-white">
                {" "}
                Browse All Jobs
              </Link>
            </Button>
          </header>
          <div className="grid md:grid-cols-[1fr_200px] gap-6">
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <RecentJobCards
                  key={index}
                  logoSrc={job.logoSrc}
                  position={job.position}
                  location={job.location}
                  type={job.type}
                  published={job.published}
                  salary={job.salary}
                />
              ))}
            </div>
            <div className="bg-white">s</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseJobList;
