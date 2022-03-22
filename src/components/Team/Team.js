import { forwardRef } from "react";
import { TeamMember } from "..";
import "./Team.css";

const teamMembers = [
  { text: "Aditya Deshpande", role: "GDSC Lead" },
  { text: "Yash Kandalkar", role: "Web Development Lead" },
  { text: "Mahima Shetty", role: "Data Science Lead" },
  { text: "Hashir Khan", role: "Collaboration Lead" },
  { text: "Mansi Bhayade", role: "Content Lead" },
  { text: "Amit Kulkarni", role: "Ethical Hacking Lead" },
  { text: "Ganyashree Suvarna", role: "Graphics Lead" },
  { text: "Rugved Pandit", role: "Game Development Lead" },
  { text: "Chaitanya Keerthi", role: "Front End Lead" },
  { text: "PRATHAM MANDAVKAR", role: "Treasurer Lead" },
  { text: "Prajna Puthran", role: "UI/UX Lead" },
  { text: "Dhruv Singh", role: "Video Editing Lead" },
  { text: "Neha Sawant", role: "Machine Learning Lead" },
  { text: "Pratik Turkar", role: "3D Graphics Lead" },
  { text: "Sejal Bhanushali", role: "Event Lead" },
  { text: "Manas Buchade", role: "Social Media Lead" },
  { text: "Shubham Chaudhari", role: "Technical Lead" },
  { text: "Heet Gutka", role: "Mobile App Development Lead" },
  { text: "Harshad Karanjule", role: "Desktop App Development Lead" },
];

const teamImages = [
  "/assets/team/Aditya_Deshpande_-_GDSC_Lead-removebg-preview 2.png",
  "/assets/team/Rectangle.png",
  "/assets/team/Mahima_Shetty_-_Data_Science_Lead-removebg-preview.png",
  "/assets/team/Hashir_Khan-Collaboration_Lead_-removebg-preview.png",
  "/assets/team/WhatsApp Image 2022-02-27 at 2.16.png",
  "/assets/team/Amit_Kulkarni_-_Ethical_Hacking_Lead-removebg-preview.png",
  "/assets/team/0_DSC_0108g 2.png",
  "/assets/team/Rugved Pandit - Game Development Lead.png",
  "/assets/team/Chaitanya_Keerthi_-_Front_End_Lead-removebg-preview 1.png",
  "/assets/team/WhatsApp_Image_2022-02-27_at_2.02 3.png",
  "/assets/team/Prajna_Puthran_-_UI-UX_Lead-removebg-preview.png",
  "/assets/team/Dhruv_Singh-Video_Editing_Lead-removebg-preview 1.png",
  "/assets/team/Rectangle-1.png",
  "/assets/team/Pratik_Turkar_-_3D_Graphics_Lead-removebg-preview.png",
  "/assets/team/Sejal Bhanushali- Event Lead.png",
  "/assets/team/Manas_Buchade_-_Social_Media_Lead-removebg-preview (1) 3.png",
  "/assets/team/Shubham_Chaudhari_-Technical_Lead-removebg-preview.png",
  "/assets/team/Heet_Gutka_-_Mobile_App_Development_Lead-removebg-preview.png",
  "/assets/team/WhatsApp_Image_2022-02-27_at_11.30 1.png",
];

const Team = forwardRef((_, ref) => {
  return (
    <section ref={ref} id="team-container" className="py-16">
      <h1
        data-aos="zoom-out"
        className="text-gray-100 text-center my-10 text-3xl
        lg:text-6xl uppercase glow font-titleBold"
      >
        Organizers
      </h1>
      <div className="flex justify-center">
        <TeamMember
          imagePath={"/assets/team/chhaya-pawar.png"}
          text={"Dr. Chhaya Pawar"}
          role={
            <>
              GDSC DMCE
              <br />
              Faculty Advisor
            </>
          }
        />
      </div>
      <div className="overflow-x-auto flex-nowrap whitespace-nowrap mx-4 sm:mx-16">
        {teamMembers.map((feature, index) => (
          <TeamMember key={index} {...feature} imagePath={teamImages[index]} />
        ))}
      </div>
    </section>
  );
});

export default Team;
