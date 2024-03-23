"use client"
import { useEffect, useState } from 'react';
import { socials } from "@/constants";
import { SocialIcon } from "react-social-icons";

function Socials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-center sm:gap-x-4 mt-28 md:w-[400px]">
      {socials.map((social) => (
        <div key={social.id} className="group">
          {isClient ? (
            <a href={social.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex items-center justify-center animate-fade-in-3 cursor-pointer md:hover:shadow-outline-gray rounded-[9px] p-5 md:p-10 transition duration-200 ease-out">
                <SocialIcon
                  url={social.url}
                  label="my Social Networks"
                  fgColor="#FFF"
                  bgColor="transparent"
                  className="!h-16 !w-16"
                />
                <div className="text-xs sm:text-sm space-y-1">
                  <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">{social.name}</p>
                  <p className="text-[#4B4C52]">{social.handle}</p>
                </div>
              </div>
            </a>
          ) : (
            <div className="flex items-center justify-center animate-fade-in-3 cursor-pointer md:hover:shadow-outline-gray rounded-[9px] p-5 md:p-10 transition duration-200 ease-out">
              <SocialIcon
                url={social.url}
                label="my Social Networks"
                fgColor="#FFF"
                bgColor="transparent"
                className="!h-16 !w-16"
              />
              <div className="text-xs sm:text-sm space-y-1">
                <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">{social.name}</p>
                <p className="text-[#4B4C52]">{social.handle}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Socials;
