import Navbar from "../navbar";

export default function Page(){
    return(
        <div >
            <div>
                <Navbar/>
            </div>
            <div className="w-screen h-screen bg-gradient-to-tr from-gray-950 to-gray-800 flex pl-80 pt-28">
                <div className=" w-4/12 h-4/5 bg-black ml-60 rounded-lg">
                    <h1 className="text-white text-2xl p-7">Contact me</h1>
                    <input type="text" className="bg-gray-500 w-80 h-12 m-6 rounded-sm text-black text-xl pl-2" placeholder="Name"/>
                    <input type="text" className="bg-gray-500 w-80 h-12 m-6 rounded-sm text-black text-xl pl-2" placeholder="Email"/>
                    <input type="text" className="bg-gray-500 w-80 h-12 m-6 rounded-sm text-black text-xl pl-2" placeholder="Mobile No"/>
                    <button className="bg-white w-80 h-12 m-6 rounded-sm text-black text-xl">Submit</button>
                </div>
            </div>
        </div>
    );
}