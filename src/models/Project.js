import mongoose from "mongoose";

// Updated Project Schema
const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
    image: {
      type: String,  // URL to the project image
      required: true,
    },
    mainTechStack: {
      type: String,  // Main technology stack used
      required: true,
    },
    description: {
      type: String,  // Brief description of the project
      required: true,
    },
    liveLink: {
      type: String,  // Live project link
      required: true,
    },
    challenges: {
      type: String,  // Challenges faced during development
      required: true,
    },
    futurePlans: {
      type: String,  // Potential improvements and future plans for the project
      required: true,
    },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
