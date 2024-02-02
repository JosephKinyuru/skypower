import ActiveSlider from "@/components/ActiveSlider"
import FadeInHome from "@/components/FadeInHome"
import FadeInTwo from "@/components/FadeInTwo"

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
         <FadeInTwo/>
        </div>
        <ActiveSlider/>
      </main>
    </>
  )
}
