
export default function Card({props}){
    return(
        
         <div className="bg-gradient-to-t from-gray-900 to-gray-950 p-5 w-96 rounded-lg" key={props.id}>
            <h1 className="text-gray-300 text-3xl p-2 ">{props.skill}</h1>
            <br/>
            <div className="w-88 h-5 bg rounded-full bg-gray-500">
                    <div className="h-5 bg-gray-500 hover:bg-blue-950 rounded-full text-sm pl-2 text-gray-800" style={{width : props.per}}>
                        level
                    </div>
            </div>
        </div>
       
    );
}