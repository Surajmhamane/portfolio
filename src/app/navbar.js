import Link from "next/link";
export default function Navbar(){
    return(
    <>
           
                <div className=" w-screen absolute  flex-row gap-32  text-lg  p-5 text-center text-gray-400 bg-gradient-to-t from-gray-900 to-gray-950">
                <Link href="/" className="  sm:shadow-white hover:rounded-sm  w-20 text-left h-10 hover:border-b-2 hover:border-gray-700 transition-transform p-3 ml-10">Home</Link>
                <Link href="/skills" className=" sm:shadow-white hover:rounded-sm  w-20 text-left h-10 hover:border-b-2 hover:border-gray-700 transition-transform p-3 ml-10"> Skills</Link>
                <Link href="/projects" className=" sm:shadow-white hover:rounded-sm  w-20 text-left h-10 hover:border-b-2 hover:border-gray-700 transition-transform p-3 ml-10"> Projects</Link>
                <Link href="/contact" className=" sm:shadow-white hover:rounded-sm  w-20 text-left h-10 hover:border-b-2 hover:border-gray-700 transition-transform p-3 ml-10"> Contact</Link>
                 </div>
    </>);
}