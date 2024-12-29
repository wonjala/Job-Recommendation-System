// import React, { useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import ResumePreview from "@/components/ResumePreview";
// import { useNavigate } from "react-router-dom";
// import jsPDF from "jspdf";

// const Resume: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedCanvas, setSelectedCanvas] = useState<string | null>(null);
//   const resumeRef = useRef<HTMLDivElement>(null);
//   const navigate = useNavigate(); // Hook for navigation

//   const canvases = [
//     { id: 1, name: "Template 1", description: "Canvas 1" },
//     { id: 2, name: "Template 2", description: "Canvas 2" },
//     { id: 3, name: "Template 3", description: "Canvas 3" },
//   ];

//   const handleGenerateResume = (): void => {
//     setIsModalOpen(true);
//   };

//   const handleCanvasSelect = (canvas: string): void => {
//     setSelectedCanvas(canvas);
//     setIsModalOpen(false);
//   };

//   const handleExportResume = (): void => {
//     if (resumeRef.current) {
//       const pdf = new jsPDF("portrait", "pt", "a4");
//       pdf.html(resumeRef.current, {
//         callback: (doc) => {
//           doc.save("resume.pdf");
//         },
//         x: 10,
//         y: 10,
//         html2canvas: {
//           scale: 0.6,
//           width: 1280,
//           height: 1123,
//         },
//       });
//     }
//   };

//   const handleEditResume = (): void => {
//     navigate("/cv-builder");
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4 space-x-4">
//         <Button onClick={handleGenerateResume}>Generate Resume</Button>
//         <Button>Import Resume</Button>
//         <Button
//           onClick={handleExportResume}
//           disabled={!selectedCanvas}
//           className={`${
//             selectedCanvas ? "cursor-pointer" : "cursor-not-allowed"
//           }`}
//         >
//           Export Resume
//         </Button>
//         <Button
//           onClick={handleEditResume}
//           disabled={!selectedCanvas}
//           className={`${
//             selectedCanvas ? "cursor-pointer" : "cursor-not-allowed"
//           }`}
//         >
//           Edit
//         </Button>
//       </div>

//       <div className="relative" ref={resumeRef}>
//         <ResumePreview selectedCanvas={selectedCanvas} />
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 max-w-3xl w-full">
//             <h2 className="text-lg font-bold mb-4">Select a Resume Template</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {canvases.map((canvas) => (
//                 <div
//                   key={canvas.id}
//                   onClick={() => handleCanvasSelect(canvas.name)}
//                   className="p-4 border rounded shadow hover:bg-gray-100 cursor-pointer"
//                 >
//                   <h3 className="font-bold">{canvas.name}</h3>
//                   <div className="h-40 bg-gray-200 flex items-center justify-center">
//                     {canvas.description}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-4 text-right">
//               <Button onClick={() => setIsModalOpen(false)}>Close</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Resume;
