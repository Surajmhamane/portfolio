export default function Projectinfo({props}){
    return(
        <div className="w-11/12 h-88 bg-gradient-to-tr from-gray-700 to-gray-950  rounded-xl p-10" key={props.id}>
                <h1 className="text-3xl font-serif text-white">Title  :  <span className="text-gray-600 font-semibold">{props.title}</span></h1><br/>
                <p className="text-white text-md tracking-wider">
                    {props.des}
                </p>
                <br/>
                <h3 className="text-xl text-white">Stack : <span className="text-neutral-300"> {props.tech}</span> </h3>
        </div>
    );
}