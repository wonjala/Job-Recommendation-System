import React from "react";
import { user } from "@/lib/user"; // Ensure user is imported here

type ResumePreviewProps = {
  selectedCanvas: string | null;
};

const ResumePreview: React.FC<ResumePreviewProps> = ({ selectedCanvas }) => {
  if (!selectedCanvas) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No template selected yet. Click "Generate Resume" to select one.
      </div>
    );
  }

  if (selectedCanvas === "Template 2") {
    return (
      <div className="border p-6 rounded mt-4 bg-white shadow-lg">
        <div className="flex items-center space-x-6">
          {/* Profile Picture Placeholder */}
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-4xl font-bold">{user.basicInformation.name}</h1>
            <p className="text-lg">{user.basicInformation.professionalTitle}</p>
            <p className="text-gray-600"></p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-gray-700 mt-2">{user.basicInformation.description}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <h3 className="text-lg font-bold"></h3>
              <p className="text-gray-600"></p>
              <p className="text-gray-700 mt-2">
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold"></h3>
              <p className="text-gray-600"></p>
              <p className="text-gray-700 mt-2">
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Education</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <h3 className="text-lg font-bold"></h3>
              <p className="text-gray-600"></p>
            </li>
            <li>
              <h3 className="text-lg font-bold"></h3>
              <p className="text-gray-600"></p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="border p-4 rounded mt-4 bg-gray-100">
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/3 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p>{user.contactInformation.phone} (Mobile)</p>
          <p>{user.contactInformation.email}</p>
          <h2 className="text-xl font-bold mt-6 mb-4">Top Skills</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h2 className="text-xl font-bold mt-6 mb-4">Languages</h2>
          <ul>
            <li>{user.basicInformation.languages}</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="w-2/3 p-4">
          <h1 className="text-3xl font-bold">{user.basicInformation.name}</h1>
          <p className="text-lg">{user.basicInformation.professionalTitle}</p>
          <h2 className="text-2xl font-bold mt-6 mb-2">Summary</h2>
          <p>{user.basicInformation.description}</p>
          <h2 className="text-2xl font-bold mt-6 mb-2">Experience</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong></strong>
              <p></p>
            </li>
            <li>
              <strong></strong>
              <p></p>
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-2">Education</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong></strong>
              <p></p>
            </li>
            <li>
              <strong></strong>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
