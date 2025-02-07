import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

// Force dynamic rendering for this route
export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  const { id } = params;  // Extract id from the URL parameters

  try {
    // Connect to the database
    await connectToDB();

    // Fetch the project by its ID
    const project = await Project.findById(id);

    // Check if the project was found
    if (project) {
      return NextResponse.json({
        success: true,
        data: project,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Project not found",
      });
    }
  } catch (e) {
    console.error("Error fetching project:", e);

    // Return a generic error response
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}
