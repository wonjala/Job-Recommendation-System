import React, { useState } from "react";
import { user } from "@/lib/user";

const CvBuilder: React.FC = () => {
  const sections = ["Experience", "Education", "Skills"];
  const [currentStep, setCurrentStep] = useState(0);


  // State for managing selected skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Predefined skills by category
  const skillCategories = {
    "Industry Knowledge": [
      "Product Design",
      "User Interface",
      "User Experience",
      "Wireframing",
      "SaaS",
      "Interaction Design",
      "Wire-framing",
      "Mobile Application",
      "Web Application",
      "User Flow",
      "User Centered Design",
    ],
    "Tools & Technologies": [
      "Figma",
      "Zeplin",
      "Invision",
      "Abstract",
      "Amplitude",
    ],
    "Other Skills": ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  };

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };


  // State for managing multiple experiences
  const [experiences, setExperiences] = useState([
    {
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleExperienceChange = (
    index: number,
    field: keyof typeof experiences[0],
    value: string
  ) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        jobTitle: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };


  const [education, setEducation] = useState([
    {
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleEducationChange = (
    index: number,
    field: keyof typeof education[0],
    value: string
  ) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const removeEducation = (index: number) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  }

  const handleNext = () => {
    if (currentStep < sections.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen p-4">
      {/* Left Section: Stepper Form */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 overflow-auto">
        {/* Stepper */}
        <div className="flex items-center mb-6 space-x-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 ${
                index === currentStep
                  ? "text-orange-500 font-bold"
                  : "text-gray-500"
              }`}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                  index <= currentStep
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-gray-300 bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span>{section}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Form Content */}
        {currentStep === 0 && (
          <div>
            <h1 className="text-xl font-bold mb-4">Experience</h1>
            <p className="text-gray-600 mb-6">Review your experience history.</p>
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="mb-6 border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">
                    {experience.jobTitle || `Experience ${index + 1}`}
                  </h2>
                  <button
                    type="button"
                    className="text-red-500 text-sm"
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </button>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Job Title</label>
                    <input
                      type="text"
                      value={experience.jobTitle}
                      onChange={(e) =>
                        handleExperienceChange(index, "jobTitle", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., Senior Product Designer"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Company</label>
                    <input
                      type="text"
                      value={experience.company}
                      onChange={(e) =>
                        handleExperienceChange(index, "company", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., Musenmind Digital Agency"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                      type="text"
                      value={experience.location}
                      onChange={(e) =>
                        handleExperienceChange(index, "location", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., Dhaka, Bangladesh"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700">Start Date</label>
                      <input
                        type="date"
                        value={experience.startDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">End Date</label>
                      <input
                        type="date"
                        value={experience.endDate}
                        onChange={(e) =>
                          handleExperienceChange(index, "endDate", e.target.value)
                        }
                        className="w-full p-2 border rounded mt-1"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                      value={experience.description}
                      onChange={(e) =>
                        handleExperienceChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="Describe your responsibilities and achievements..."
                      rows={3}
                    />
                  </div>
                </form>
              </div>
            ))}
            <button
              type="button"
              onClick={addExperience}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Add Experience
            </button>
          </div>
        )}


          {/* Education Section */}
          {currentStep === 1 && (
          <div>
            <h1 className="text-xl font-bold mb-4">Education</h1>
            <p className="text-gray-600 mb-6">Review your education history.</p>
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">
                    {edu.degree || `Education ${index + 1}`}
                  </h2>
                  <button
                    type="button"
                    className="text-red-500 text-sm"
                    onClick={() => removeEducation(index)}
                  >
                    Remove
                  </button>
                </div>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(index, "degree", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., BFA Industrial Design"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) =>
                        handleEducationChange(index, "institution", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., Rhode Island School"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                      type="text"
                      value={edu.location}
                      onChange={(e) =>
                        handleEducationChange(index, "location", e.target.value)
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., Providence, RI"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700">Start Date</label>
                      <input
                        type="date"
                        value={edu.startDate}
                        onChange={(e) =>
                          handleEducationChange(
                            index,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="w-full p-2 border rounded mt-1"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700">End Date</label>
                      <input
                        type="date"
                        value={edu.endDate}
                        onChange={(e) =>
                          handleEducationChange(index, "endDate", e.target.value)
                        }
                        className="w-full p-2 border rounded mt-1"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                      value={edu.description}
                      onChange={(e) =>
                        handleEducationChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      className="w-full p-2 border rounded mt-1"
                      placeholder="e.g., Graduated with distinction, Top 3% of class"
                      rows={3}
                    />
                  </div>
                </form>
              </div>
            ))}
            <button
              type="button"
              onClick={addEducation}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Add Education
            </button>
          </div>
        )}

          {/* Skills Section */}
          {currentStep === 2 && (
          <div>
            <h1 className="text-xl font-bold mb-4">Skills</h1>
            <p className="text-gray-600 mb-6">
              Highlight six to eight of your top skills.
            </p>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="mb-6">
                <h2 className="text-lg font-bold mb-2">{category}</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-4 py-2 rounded ${
                        selectedSkills.includes(skill)
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}


        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              currentStep > 0
                ? "bg-gray-300 text-gray-800"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              currentStep < sections.length - 1
                ? "bg-orange-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={handleNext}
          >
            {currentStep < sections.length - 1 ? "Next" : "Finish"}
          </button>
        </div>
      </div>

      {/* Right Section: Resume Preview */}
      <div className="w-full md:w-1/2 bg-white p-6 overflow-auto shadow-lg">
        <div className="border p-6 rounded bg-gray-50 shadow-md">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div>
              <h1 className="text-4xl font-bold">{user.basicInformation.name}</h1>
              <p className="text-lg text-gray-600">
                {user.basicInformation.professionalTitle}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">About</h2>
            <p className="text-gray-700 mt-2">{user.basicInformation.description}</p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <ul className="mt-4 space-y-4">
              {experiences.map((experience, index) => (
                <li key={index}>
                  <h3 className="text-lg font-bold">{experience.jobTitle}</h3>
                  <p className="text-gray-600">
                    {experience.company} - {experience.location}
                  </p>
                  <p className="text-gray-500">
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p className="text-gray-700">{experience.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold">Education</h2>
            <ul className="mt-4 space-y-4">
              {education.map((edu, index) => (
                <li key={index}>
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-gray-600">
                    {edu.institution} - {edu.location}
                  </p>
                  <p className="text-gray-500">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  <p className="text-gray-700">{edu.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-bold">Skills</h2>
            <ul className="mt-4 space-y-2">
              {selectedSkills.map((skill, index) => (
                <li key={index} className="text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CvBuilder;
