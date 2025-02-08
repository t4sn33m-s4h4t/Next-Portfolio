"use client";
import { useEffect, useState } from 'react';

const ProjectPage = ({ params }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://tasneem-jet.vercel.app/api/project/get/${params.id}`);
        const data = await response.json();
        setProject(data.data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white bg-black">
        <span className="text-xl">Loading...</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-white bg-black">
        <span className="text-xl">Project not found</span>
      </div>
    );
  }

  return (
    <div className="bg-black text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8 shadow px-5 pb-12 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{project.name}</h1>
          <p className="text-green-main text-lg">{project.mainTechStack}</p>
        </div>

        <div className="flex justify-center">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6">Technologies</h2>
          <p className="text-lg">{project.technologies}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6">Description</h2>
          <p className="text-lg">{project.description}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6">Challenges</h2>
          <p className="text-lg">{project.challenges}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6">Future Plans</h2>
          <p className="text-lg">{project.futurePlans}</p>
        </div>

        <div className="flex justify-between items-center mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-main font-bold text-xl"
          >
            GitHub Repository
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-main font-bold text-xl"
          >
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
