import React from "react";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export default function Landing() {
 return(
<div className="w-full min-h-screen flex flex-col">

    <div className="top-0">  
    <Navbar /> 
    </div>

    <div className="mt-16 px-6 w-md">
        <Hero />
    </div>

    <div className="absolute w-full bottom-0"> 
        <Footer />
    </div>

</div>
)
}

