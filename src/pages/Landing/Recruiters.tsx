import { RecruiterCard } from "@/components/common/CustomCard";
import Heading from "@/components/common/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recruiters } from "@/lib/data";
import { useState } from "react";

const Recruiters = () => {
  const [sortType, setSortType] = useState("highestRating");

  // Sorting function
  const sortedRecruiters = [...recruiters].sort((a, b) => {
    if (sortType === "highestRating") {
      return b.rating - a.rating;
    } else if (sortType === "mostOpenings") {
      return b.jobOpenings - a.jobOpenings;
    }
    return 0;
  });

  return (
    <>
      <section className="p-4 bg-white">
        <div className="flex min-h-[20vh] items-center rounded-lg justify-between max-w-7xl px-0 py-10 mx-auto">
          <div className="mx-auto w-full bg-blue-50 p-4 flex gap-8 md:items-center justify-between">
            <div className="md:w-2/3 mx-auto space-y-4">
              <div className="relative flex flex-col items-center justify-center">
                <h1 className="text-[#05264e] text-center md:text-4xl font-semibold m-0 p-0">
                  Browse Recruiters
                </h1>
                <div className="text-[#4f5e64] text-center w-[70ch] md:text-md text-sm font-normal font-['Inter'] leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  repellendus magni,atque delectus molestias quis?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="flex flex-col items-center justify-between max-w-7xl px-0 mx-auto">
          <div className="w-full p-6 bg-gray-50 min-h-screen">
            {/* Sorting Options */}
            <div className="mb-6 flex justify-end gap-4">
              <button
                onClick={() => setSortType("highestRating")}
                className={`py-2 px-4 rounded ${
                  sortType === "highestRating"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Highest Rating
              </button>
              <button
                onClick={() => setSortType("mostOpenings")}
                className={`py-2 px-4 rounded ${
                  sortType === "mostOpenings"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Most Openings
              </button>
            </div>

            {/* Recruiters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {sortedRecruiters.map((recruiter, index) => (
                <RecruiterCard key={index} recruiter={recruiter} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* blogs */}
      <section className="bg-white py-8">
        <div className="max-w-7xl px-0 mx-auto">
          <div className="flex w-full">
            <div className="space-y-4">
              <div className="px-4 space-y-2">
                <Heading
                  level={2}
                  className="text-[#05264e] md:text-5xl text-3xl font-semibold"
                >
                  News and Blog
                </Heading>

                <div className="text-[#4f5e64]  text-lg font-normal font-['Inter'] leading-normal">
                  Get the latest news, updates and tips{" "}
                </div>
              </div>

              <div className="flex flex-col gap-8 p-4">
                {/* Blog Posts Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1326px]">
                  {/* Blog Post Card */}
                  {[
                    {
                      title:
                        "21 Job Interview Tips: How To Make a Great Impression",
                      description:
                        "Consequatur voluptatem in aut consequatur ea et vero. Sed excepturi quia sit. Aut enim a vitae. Possimus omnis nobis rem et. Animi at numquam sed eum dolorem.… Recusandae est sunt vel quo iusto commodi saepe.",
                      author: "Janice Schimmel",
                      date: "Sep 24, 2024",
                      readTime: "12 mins to read",
                      imgUrl: "https://via.placeholder.com/400x255",
                      profileImg: "https://via.placeholder.com/35x35",
                    },
                    {
                      title: "Interview Question: Why Don’t You Have a Degree?",
                      description:
                        "A doloremque nihil occaecati aliquam et cum. Distinctio rerum eos minus. Nemo maxime voluptas illo modi. Voluptates repellendus minima quod beatae. Fugit… voluptatem ut in quibusdam mollitia. Facilis ratione nihil",
                      author: "Janice Schimmel",
                      date: "Sep 03, 2024",
                      readTime: "12 mins to read",
                      imgUrl: "https://via.placeholder.com/400x255",
                      profileImg: "https://via.placeholder.com/35x35",
                    },
                    {
                      title:
                        "39 Strengths and Weaknesses To Discuss in a Job Interview",
                      description:
                        "In aut aut temporibus nulla laboriosam. Velit doloremque facere quam quis incidunt eius. Qui nisi nam occaecati sed. At in perspiciatis aperiam dolor voluptates.",
                      author: "Janice Schimmel",
                      date: "Aug 30, 2024",
                      readTime: "12 mins to read",
                      imgUrl: "https://via.placeholder.com/400x255",
                      profileImg: "https://via.placeholder.com/35x35",
                    },
                  ].map((post, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-[#e0e6f7] p-4 flex flex-col space-y-4"
                    >
                      {/* Image */}
                      <img
                        className="w-full h-[255px] rounded-lg"
                       src="/images/img-news2.png"
                        alt="Post Image"
                      />

                      {/* Tags */}
                      <div className="flex space-x-2">
                        <span className="bg-[#e0e6f7] text-[#3c65f5] text-xs font-normal px-2 py-1 rounded-md">
                          New
                        </span>
                        <span className="bg-[#e0e6f7] text-[#3c65f5] text-xs font-normal px-2 py-1 rounded-md">
                          Event
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[#05264e] text-xl font-bold">
                        {post.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#4f5e64] line-clamp-3 text-sm font-normal leading-snug">
                        {post.description}
                      </p>

                      {/* Author & Date */}
                      <div className="flex items-center space-x-2 mt-4">
                        <img
                          className="w-9 h-9 rounded-full"
                          src={post.profileImg}
                          alt="Author"
                        />
                        <div className="flex flex-col">
                          <span className="text-[#05264e] text-sm font-bold opacity-70">
                            {post.author}
                          </span>
                          <span className="text-[#526489] text-xs font-medium">
                            {post.date}
                          </span>
                        </div>
                        <span className="ml-auto text-[#526489] text-xs font-medium">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View More Button */}
                <Button className="  w-fit bg-[#05264e] rounded px-[6px] py-[19px] flex justify-center items-center">
                  <span className="text-white text-sm font-normal font-['Inter'] leading-[14px]">
                    View more
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4">
        <div className="flex  flex-col items-center justify-between max-w-7xl px-0 py-8 mx-auto">
          <div className="flex w-full  flex-col items-center justify-between ">
            <div className=" md:p-11 p-4 rounded-2xl flex bg-[#3c65f5] md:gap-[61.3px] items-start">
              {/* Main Image */}
              <img
                className="w-1/3 md:inline hidden aspect-square"
                src="/images/newsletter-image-left.png"
                alt="Main Image"
              />

              {/* Content Section */}
              <div className="flex-grow flex flex-col gap-10 items-center">
                {/* Heading */}
                <div className="text-center text-white md:text-[37px] text-lg font-bold md:leading-[55px] font-['Inter']">
                  New Things Will Always <br /> Update Regularly
                </div>

                {/* Subscription Section */}
                <div className="w-full justify-between bg-white rounded-[10px] flex items-center px-2">
                  {/* Email Input */}
                  <div className="w-full bg-white rounded-l-lg">
                    <Input
                      type="email"
                      className="shadow-none border-none text-[#777f87] h-[60px] w-full text-sm font-normal"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <Button className="w-[139.67px] py-4 bg-[#3c65f5] text-white text-sm font-medium rounded-r-lg">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Secondary Image */}
              <img
                className="w-1/3 md:inline hidden aspect-square"
                src="/images/newsletter-image-right.png"
                alt="Secondary Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruiters;
