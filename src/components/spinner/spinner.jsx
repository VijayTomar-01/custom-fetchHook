import { ClipLoader } from "react-spinners";


export default function Spinner(){
    return(
        <div className="h-64 flex justify-center items-center ">
        <ClipLoader className="text-blue-600 " size={50} />
    </div>
    )
}