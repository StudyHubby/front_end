import React from "react";
import Hero from "./ui/Hero";
import Footer from "./ui/Footer";

export default function Landing() {
 return(
        <div className="flex min-h-0"> 
        <div className="w-full h-bottom">
            <Footer />
        </div>
            <Hero />
        </div>
)
}

