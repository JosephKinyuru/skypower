import ActiveSlider from "@/components/ActiveSlider"
import Image from "next/image"
import { robot2 } from '@/assets';
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  
  return (
    <>
      <main>
        <section className="bg-gradient-to-b from-white via-sky-200 to-sky-800 flex justify-center items-start min-h-screen w-full">
          <div className="xl:max-w-[1280px] w-full">
            <div className='flex md:flex-row flex-col sm:py-16'>
              <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

                <div className="flex justify-between items-center w-full max-w-[470px]">
                  <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-black sm:leading-[100.8px] leading-[75px] mt-10">
                      Delivering <br className="sm:block hidden" />{" "}
                      <span className="text-gradient">Innovative</span>{" "}
                      Engineering Solutions.
                  </h1>
                </div>

                <p className='font-poppins font-normal text-[#000000] text-[18px] leading-[30.8px] max-w-[470px] mt-5 opacity-70'>
                  Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
                </p>
                <div className="flex gap-1 items-center mt-[30px]">
                  <Link href={"/products"} className="btn btn-primary">Our products</Link>
                  <Link href={"/contacts"} className="btn btn-textgap-1"> 
                    <span> Get in touch</span>
                    <ArrowRight className="h-5 w-5"/>
                  </Link>
                </div>
              </div>

              <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
                <Image 
                  src={robot2} 
                  alt="sky-power logo" 
                  className="w-[100%] h-[100%]" 
                /> 
              </div>

            </div>
          </div>
        </section>

        <section className='flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1534298261662-f8fdd25317db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[130vh] border-t-[2px] border-b-[2px] border-orange-500 py-8'>
          <div className="text-center max-w-4xl mx-auto mt-[-20rem]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-0 text-cyan-600 font-serif">
              WELCOME TO SKYPOWER
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 pt-10">
                Trusted Manufacturer, Distributor, Solution Provider, and Integrator of IoT Monitoring Solutions
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 mt-6">
                We are a trusted manufacturer, distributor, solution provider, and integrator of IoT monitoring solutions for thermal partial discharge, vibration, and arc detection applications. We specialize in end-to-end predictive non-contact thermal monitoring solutions and bring industrial IoT, Big Data, and A.I to organizations in any industry that need real-time business insights.
            </p>
          </div>         
        </section>

        <ActiveSlider/>
      </main>
    </>
  )
}
