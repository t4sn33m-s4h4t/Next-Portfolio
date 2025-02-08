import ClientAboutView from "@/components/client-view/about";
<<<<<<< HEAD
=======
import Certificates from "@/components/client-view/certificates"; 
>>>>>>> 126e597 (Shanged some styles and added certificates)
import ClientContactView from "@/components/client-view/contact";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import ClientSkillsView from "@/components/client-view/skills";
async function extractAllDatas(currentSection) {
  try {
    const res = await fetch(`https://tasneem-jet.vercel.app/api/${currentSection}/get`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }

    const data = await res.json();
    return data && data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {}; // or you can return an empty object/array depending on your needs
  }
}


export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const projectSectionData = await extractAllDatas("project");
  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      
      <ClientAboutView />
      <ClientSkillsView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      
      <ClientProjectView data={projectSectionData} />
<<<<<<< HEAD
=======
      <Certificates />
>>>>>>> 126e597 (Shanged some styles and added certificates)
      <ClientContactView />
    </div>
  );
}
