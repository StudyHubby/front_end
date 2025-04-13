import React from "react";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

export default function Landing() {
 return(
<div className="w-full">
<div className="w-1/3 mx-auto">
        <Hero />
    </div>

        <div className="absolute w-full bottom-0"> 
            <Footer />
        </div>

</div>
)
}

