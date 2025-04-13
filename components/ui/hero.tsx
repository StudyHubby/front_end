import { link } from "fs";
import { Link } from "lucide-react";
import React from "react";
import { Button } from "react-day-picker";


export default function Hero() {
 return(
    <div className="w-full py-4 px-8 space-y-4 text-center"> 

    <div className="flex-col"> 

         <div className="font-bold text-green-500"> StudyHubby </div>

         <div className="underline-offset-2 text-white"> Reform your studying today with a study soul-mate by your side! </div>
    
         <div className="text-white bg-black outline-green-500">
            <Link href='/components/dashboard'> Sign Up! </Link>
         </div>

    </div>



    </div>

        
    
    )
}
