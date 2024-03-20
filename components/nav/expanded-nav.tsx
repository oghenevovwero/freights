import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Reviews from "../reviews/reviews";
import Landing from "../landing";

export default function ExpandedNav({setHomeSection}:{setHomeSection: Dispatch<SetStateAction<JSX.Element>>}) {
  return (
    <div className="bg-white text-black fixed z-10 left-0 right-0 top-0">
      <div className="flex justify-between items-center px-[18px] py-[14px] text-lg">
        <div className="flex flex-1 justify-around items-center ">
          {/* <button className="px-5 py-2 rounded-sm text-black bg-[#E3C3C3]">Logo</button> */}
          <div
            className="text-[26px] font-[350]"
            onClick={() => {
              setHomeSection(<Landing />);
            }}
          >
            Journal
          </div>
          <div className="flex items-center gap-2">
            <span>+234 812340593</span>
            <Image
              src={"/black-phone.png"}
              
              width={20}
              height={20}
              alt="phone"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>West Brom, UK</span>{" "}
            <Image
              src={"/black-location.png"}
              
              width={20}
              height={20}
              alt="location"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-around items-center">
          <div>Projects</div>
          <div>About me</div>
          <div className="flex gap-2 items-center">
            <span>English</span>
            <Image
              src={"/black-globe.png"}
              
              width={24}
              height={24}
              alt="Globe"
            />
          </div>
          <div onClick={() => {
            setHomeSection(<Reviews />)
          }}>OGs & Reviews</div>
          <div>
          <Image
              src={"/profile.png"}
              width={35}
              height={35}
              alt="location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}