import ActiveSlider from "@/components/ActiveSlider"
import FadeInHome from "@/components/FadeInHome"

export default function Home() {
  
  return (
    <>
      <main>
        <div className="bg-gradient-to-r from-white via-sky-200 to-sky-800 flex justify-center items-start min-h-screen w-full">
            <div className="xl:max-w-[1280px] w-full">
                <section id="home" className='flex md:flex-row flex-col sm:py-16 py-'>
                  <FadeInHome/>
                </section>
            </div>
        </div>
        <div className='flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1534298261662-f8fdd25317db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[130vh] border-t-[2px] border-b-[2px] border-orange-500 py-8'>
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
