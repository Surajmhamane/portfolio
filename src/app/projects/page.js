import Navbar from "../navbar";
import Projectinfo from "./projectinfo";

export default function Page(){
    const ob=[
        {
            id :1,
            title : "Netflix HomePage clone",
            des : "Created a fully responsive Netflix home page clone using React and Tailwind CSS. The project features dynamic content loading, seamless navigation, and a visually appealing user interface that closely mimics the original Netflix platform. Utilized React hooks for state management and component-based architecture for efficient code organization. Integrated with a mock API to fetch and display movie data, providing a realistic browsing experience. Implemented CSS transitions and animations to enhance user interaction. This project demonstrates strong front-end development skills, proficiency in modern JavaScript frameworks, and the ability to recreate complex UI designs.",
            tech : "HTML,CSS,React, Tailwind CSS"
        },
        {
            id :2,
            title : "Autometed parking system",
            des : "Developed an automated parking system using Python and IoT technology to streamline parking management. The system features real-time vehicle detection, automated entry and exit, and dynamic space allocation to optimize parking efficiency. Integrated sensors and cameras to monitor parking spots and provide live updates to users via a mobile app. Implemented a user-friendly interface for reservation and payment processing, enhancing convenience for users. Utilized machine learning algorithms to predict parking space availability and improve system accuracy. This project showcases proficiency in software development, IoT integration, and the application of machine learning in real-world scenarios.",
            tech : "HTML,CSS,React" 
        }
    ]
    return(
       <div>
        <div >
            <Navbar/>
        </div>
        <div className="bg-black flex flex-col gap-10 pt-28 pl-40 pb-5">
            {ob.map((data)=><Projectinfo props={data}/>)}
        </div>
       </div>
    );
}