"use client"

import { Fade, Slide } from "react-awesome-reveal"

const FadeInTwo = () => {
  return (
    <div className="text-center max-w-4xl mx-auto mt-[-20rem]">
        <Slide delay={650} triggerOnce={true}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-0 text-cyan-600 font-serif">WELCOME TO SKYPOWER</h1>
        </Slide>            
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 pt-10">
            Trusted Manufacturer, Distributor, Solution Provider, and Integrator of IoT Monitoring Solutions
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 mt-6">
            We are a trusted manufacturer, distributor, solution provider, and integrator of IoT monitoring solutions for thermal partial discharge, vibration, and arc detection applications. We specialize in end-to-end predictive non-contact thermal monitoring solutions and bring industrial IoT, Big Data, and A.I to organizations in any industry that need real-time business insights.
        </p>
    </div>  
 )
}

export default FadeInTwo