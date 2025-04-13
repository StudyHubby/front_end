import { link } from "fs";
import { Link } from "lucide-react";
import React from "react";
import { Button } from "react-day-picker";


export function hero() {
 return(
    <div className="w-full py-4 px-8 space-y-4 text-green-500 text-center text-sm "> 

    <div className=""> 

         <div className="font-bold"> StudyHubby </div>

         <div className="underline-offset-2"> Reform your studying today! </div>

            <div className="">
                <Link href='/components/dashboard'> Sign Up </Link>
            </div>

    </div>

    </div>

        
    
    )
}
