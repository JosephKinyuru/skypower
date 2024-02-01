import Image from 'next/image'
import ActiveSlider from '@/components/ActiveSlider'
import GetInTouch from '@/components/GetInTouch';
import { robot } from '@/assets';

export default function Home() {

  const word = 'SkyPower'; 
  
  return (
    <>
      <main>
        <div className="bg-gradient-to-r from-white via-sky-200 to-sky-80 flex justify-center items-start min-h-screen w-full">
            <div className="xl:max-w-[1280px] w-full">
                <section id="home" className='flex md:flex-row flex-col sm:py-16 py-'>
                  <div className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

                    <div className="flex flex-row justify-between items-center w-full">
                      <h1 className="flex-1 font-poppins font-semibold sm:text-[72px] text-[52px] text-black sm:leading-[100.8px] leading-[75px]">
                          Delivering <br className="sm:block hidden" />{" "}
                          <span className="text-gradient">Innovative</span>{" "}
                      </h1>
                      <div className="ss:flex hidden md:mr-4 mr-0">
                          <GetInTouch />
                      </div>
                      </div>

                      <h1 className="font-poppins font-semibold sm:text-[68px] text-[52px] text-black sm:leading-[100.8px] leading-[75px] w-[120%]">
                      Engineering Solutions.
                      </h1>
                      <p className='font-poppins font-normal text-[#000000] text-[18px] leading-[30.8px] max-w-[470px] mt-5 opacity-70'>
                      Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
                      </p>
                    </div>

                        <div className='flex-1 flex justify-center items-center md:my-0 my-10 relative'>
                            <Image 
                            src={robot} 
                            alt="billing" 
                            className="w-[100%] h-[100%]" 

                            />

                            {/* gradient start */}
                            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                            {/* gradient end */}
                        </div>

                        <div className='sm:hidden flex justify-center items-center p-6'>
                            <GetInTouch />
                        </div>
                    </section>
                </div>
        </div>

        <div className='flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1534298261662-f8fdd25317db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[130vh] border-t-[2px] border-b-[5px] border-orange-500 py-8'>
          <div className="text-center max-w-4xl mx-auto mt-[-20rem]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-0 text-cyan-600 font-serif">WELCOME TO SKYPOWER</h1>
              <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 pt-10">
                Trusted Manufacturer, Distributor, Solution Provider, and Integrator of IoT Monitoring Solutions
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-gray-600 mt-6">
                We are a trusted manufacturer, distributor, solution provider, and integrator of IoT monitoring solutions for thermal partial discharge, vibration, and arc detection applications. We specialize in end-to-end predictive non-contact thermal monitoring solutions and bring industrial IoT, Big Data, and A.I to organizations in any industry that need real-time business insights.
              </p>
          </div>  
        </div>
        <ActiveSlider/>
      </main>
    </>
  )
}
