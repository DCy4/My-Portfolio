import React from "react";

function Intro() {
    return ( 
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl">David</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm a full-stack developer and information security enthusiast, constantly 
                learning and adapting to new systems and technologies. All of my projects are 
                built from scratch with efficiency, simplicity and security in mind. 
                <br />
            </p>
        
        
        </div>
     );
}

export default Intro;