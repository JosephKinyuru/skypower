import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <>
      <main>
        <div className='flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen'>
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Delivering Innovative</h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Engineering Solutions that Secure a</h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-amber-400">Bright Future for Africa</h1>
            <div className='flex flex-row justify-center space-x-10 pt-[4rem]'>
              <Link href={'/products'}>
                <button className='bg-amber-400 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-xl tracking-widest border border-amber-400 rounded-full hover:bg-transparent hover:text-amber-400 hover:border-amber-400 transition duration-300 ease-in-out text-white font-bold'>Products</button>              
              </Link>
              <Link href={'/solutions'}>
                <button className='bg-sky-500 px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-xl tracking-widest border border-sky-500 rounded-full hover:bg-transparent hover:text-sky-500 hover:border-sky-500 transition duration-300 ease-in-out text-white font-bold'>Solutions</button>              
              </Link>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url(https://images.unsplash.com/photo-1534298261662-f8fdd25317db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[130vh] border-t-[5px] border-b-[5px] border-orange-500 py-8'>
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
        <div className='flex items-center justify-center bg-sky-50 w-full h-screen'>
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-0 font-sans text-center'>Our Solutions & Products</h1>
            <p className='text-xs sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-4 lg:mt-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center'>
              Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
            </p>
            <div className='text-center mt-10 xs:px-[20%]'>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full sm:max-w-[350px] md:max-w-7xl lg:max-w-10xl mx-auto"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="sm:basis-1 md:basis-1/2 lg:basis-1/3 px-3 py-8">
                      <div className="p-1">
                        <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center bg-gray-100 w-full h-screen'>
          <div className='text-center'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 mt-0 font-sans text-center'>Our Clients</h1>
            <p className='text-xs sm:text-sm md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-4 lg:mt-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex justify-center'>
              Our team provides smart and effective solutions and services that will seamlessly help your business run optimally, regardless of industry.
            </p>
            <div className='text-center mt-10 xs:px-[20%]'>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full sm:max-w-[350px] md:max-w-7xl lg:max-w-10xl mx-auto"
              >
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="sm:basis-1 md:basis-1/2 lg:basis-1/3 px-3 py-8">
                      <div className="p-1">
                        <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
