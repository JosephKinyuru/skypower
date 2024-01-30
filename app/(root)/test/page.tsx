import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

import ActiveSlider from "@/components/ActiveSlider"
 
export interface Artwork {
  artist: string
  art: string
}
 
export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

function Page () {
    
    return (
    <>
        <main>
            <div className='flex items-center justify-center w-full h-screen'>
                <ScrollArea className="w-full md:w-4/5 lg:w-4/5 whitespace-nowrap rounded-md border xs:h-[40%]">
                    <div className="flex w-max space-x-4 p-4">
                        {works.map((artwork) => (
                        <div key={artwork.artist} className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md'>
                            <div className='h-96 w-72'>
                                <Image 
                                src={artwork.art}
                                alt={`Photo by ${artwork.artist}`}
                                width={300}
                                height={500}
                                className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'
                                />
                            </div>
                            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
                                <h1 className='text-3xl font-bold text-white -mt-12'>{artwork.artist}</h1>
                                <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Lorum ipsum dolor</p>
                                <button className='rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white'>
                                    See more
                                </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
            <ActiveSlider/>
        </main>
    </>
    )
}

export default Page;