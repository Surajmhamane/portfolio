
import Navbar from "../navbar"
import Card from "./card";
export default function Page(){
    const object=[
        {
            id : 1,
            skill : "HTML",
            per : "48%"
        },
        {
            id :2,
            skill : "JavaScript",
            per : "58%"
        },
        {
            id :3,
            skill : "CSS",
            per : "48%"
        },
        {
            id :4,
            skill : "Tailwind CSS",
            per : "68%"
        },
        {
            id :5,
            skill : "React",
            per : "78%"
        },
        {
            id :6,
            skill : "Next js",
            per : "88%"
        }
    ]
    return(
        
        <div className="w-screen h-screen bg-black">
            
            <div className="h-32">
                <Navbar/>
            </div>
            <div className="m-20 mt-28 flex flex-wrap gap-16">
            {object.map((data)=><Card props={data}/>)}
            </div>
            
        </div>
    );
}