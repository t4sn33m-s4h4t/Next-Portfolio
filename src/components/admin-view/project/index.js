"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "GitHub",
  },
  {
    name: "image",
    placeholder: "Project Image URL",
    type: "text",
    label: "Project Image URL",
  },
  {
    name: "mainTechStack",
    placeholder: "Main Technology Stack",
    type: "text",
    label: "Main Technology Stack",
  },
  {
    name: "description",
    placeholder: "Brief Description of the Project",
    type: "text",
    label: "Brief Description",
  },
  {
    name: "liveLink",
    placeholder: "Live Project Link",
    type: "text",
    label: "Live Project Link",
  },
  {
    name: "challenges",
    placeholder: "Challenges Faced During Development",
    type: "text",
    label: "Challenges Faced",
  },
  {
    name: "futurePlans",
    placeholder: "Potential Improvements and Future Plans",
    type: "text",
    label: "Potential Improvements",
  },
];

export default function AdminProjectView({ formData, setFormData, handleSaveData, data }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          
          {data && data.length
            ? data.map((item) => (
                <div className="flex flex-col gap-4 border p-4 border-green-600">
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
                  <p>{item.mainTechStack}</p>
                  <p>{item.description}</p>
                  <p>{item.liveLink}</p>
                  <p>{item.challenges}</p>
                  <p>{item.futurePlans}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button onClick={() => handleSaveData('project')} className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]">
          Add Info
        </button>
      </div>
    </div>
  );
}
