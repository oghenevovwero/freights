import Image from "next/image";
import { useRef, useEffect } from "react";
import ScrollIn from "../util/scroll-in-controller";

export default function WhoAmI() {
  const root = useRef(null);

  return (
    <div
      ref={root}
      className="
         px-2
         lg:px-[150px] 
         xl:px-[250px] 
         bg-black 
         text-white 
         relative 
         max-md:py-6 
         md:h-screen 
         flex 
         items-center 
         justify-center"
    >
      <ScrollIn root={root!.current}>
        <div className="mb-5 text-4xl font-semibold">WHO AM I?</div>
        <div className="py-10">
          <div className="flex-1 flex flex-col md:flex-row gap-10 justify-center items-center">
            <div className="relative">
              <Image
                src={"/fde-small.png"}
                className="absolute right-16 top-1"
                width={30}
                height={15}
                alt="fde"
              />
              <Image
                src={"/fde-small.png"}
                className="rotate-90 absolute right-0 top-16"
                width={30}
                height={10}
                alt="fde"
              />
              <div className="w-32 h-32 border-l border-t absolute top-[-10] left-[-10]" />
              <div className="w-32 h-32 border-b border-r absolute bottom-[0] right-[0]" />

              <div className="p-4">
                <img src={"/who-image.png"} className="object-fill" alt="who image" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="text-2xl font-bold">HELLO, MY NAME IS FAVOUR IMIDE</div>
              <div className="leading-loose">
                Lorem ipsum dolor sit amet consectetur. Tincidunt morbi pretium mattis semper odio
                sit duis. Habitant nisi amet pellentesque diam nibh risus nibh viverra. Ullamcorper
                sociis pharetra sagittis pretium quis pretium et ipsum mauris. Quam nunc arcu non
                integer. Felis amet facilisi nibh elit lectus in in leo. Sollicitudin purus tortor
              </div>
              <div className="w-4/5 sm:w-3/5 bg-gray-300 h-[1px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-full">
          <div className="h-fit">
            <Image src={"/fde-small.png"} width={35} height={20} alt="fde" />
          </div>
          <Image src={"/fde.png"} width={150} height={100} alt="fde" />
        </div>
      </ScrollIn>
    </div>
  );
}
