import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Data from "../Data.js"

function CarouselSize() {
  return (
    <section className="w-full px-4 py-16 md:py-24 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <h2 className="text-3xl sm:text-4xl text-center text-amber-800 dark:text-amber-500 pb-2 font-lobster">
          Come and Join
        </h2>
        <h3 className="text-2xl sm:text-3xl text-center text-gray-700 dark:text-gray-300 pb-12 font-jost font-bold tracking-wide">
          OUR HAPPY CUSTOMERS
        </h3>
        
        {/* Carousel Outer Bounds */}
        <div className="w-full max-w-[280px] sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto relative px-2 sm:px-4"> 
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 flex items-stretch">
              {Data.map((item) => {
                const IconComponent = item.icons
                
                return (
                  <CarouselItem 
                    key={item.id} 
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 flex"
                  >
                    {/* The parent container uses 'flex w-full' to ensure cards in a row have equal height */}
                    <div className="p-2 w-full flex">
                      <Card className="bg-white dark:bg-neutral-900 text-black dark:text-white border border-gray-100 dark:border-neutral-800 shadow-md hover:shadow-lg h-full w-full rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
                        
                        <CardContent className="p-6 flex flex-col justify-between h-full flex-1 space-y-4">
                          <div className="space-y-3">
                            {/* Star Ratings */}
                            <div className="flex gap-1 items-center">
                              {[...Array(5)].map((_, i) => (
                                <IconComponent key={i} size={18} className="text-amber-400 fill-amber-400" />
                              ))}
                            </div>
                            
                            {/* Testimonial Text */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base italic font-jost leading-relaxed">
                              "{item.text}"
                            </p>
                          </div>

                          {/* Customer Name Footer */}
                          <div className="border-t border-gray-100 dark:border-neutral-800 pt-3">
                            <h4 className="text-base sm:text-lg font-bold font-jost text-amber-950 dark:text-amber-400">
                              {item.name}
                            </h4>
                          </div>

                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            
            {/* Responsively Positioned Navigation Controls */}
            {/* hidden on mobile viewports to prevent overflow, displays perfectly from 'sm' screens onwards */}
            <CarouselPrevious className="hidden sm:inline-flex bg-amber-800 hover:bg-amber-700 text-white hover:text-white h-10 w-10 border-none -left-4 md:-left-12 shadow-md transition-colors" />
            <CarouselNext className="hidden sm:inline-flex bg-amber-800 hover:bg-amber-700 text-white hover:text-white h-10 w-10 border-none -right-4 md:-right-12 shadow-md transition-colors" />
            
          </Carousel>
        </div>

      </div>
    </section>
  )
}

export default CarouselSize;