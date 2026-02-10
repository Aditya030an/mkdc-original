import React, { useState } from "react";
import { ownerMember, teamMembers } from "../../utils/Constant/memberList";

const Story = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className=" font-sans">
      {/* First section */}
      <div className="h-[90vh] relative flex flex-col items-center justify-center ">
        <div className=" flex flex-col md:flex-row gap-16 items-center justify-center  w-full">
          {/* LEFT IMAGE SECTION */}
          <div className=" w-[50%] flex flex-col justify-end items-end relative ">
            <div
              onMouseEnter={() => setHoverLeft(true)}
              onMouseLeave={() => setHoverLeft(false)}
              className="relative overflow-hidden w-[280px] h-[250px] "
            >
              {/* First Image */}
              <img
                src="./Images/leggleft.gif"
                alt="Left Initial"
                className={`absolute top-0 w-full h-full object-cover transition-all duration-700 ease-in-out filter brightness-90 group-hover:brightness-75   ${
                  hoverLeft ? "-left-full" : "-left-0"
                }`}
              />
              {/* Second Image */}
              <img
                src="./Images/OwnerImages/_MG_3882.jpg"
                alt="Left Hover"
                className={`absolute top-0 w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale ${
                  hoverLeft ? "left-0" : "left-full"
                }`}
              />
            </div>
            {/* TEXT */}
            {hoverLeft && (
              <div className="absolute top-full left-0 w-full text-right p-4 text-sm transition-all duration-700 ease-in-out">
                <div className="text-[#1a1a1a]/80 flex flex-col gap-2">
                  <h5>OUR STORY</h5>
                  <p>
                    Discover our heritage and passion for excellence — a story
                    told through every detail, every frame, every moment. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Delectus
                    perspiciatis, vitae ipsum odio accusantium laborum iusto
                    beatae vel a corporis provident consequatur tempora
                    excepturi! Ducimus recusandae modi placeat ad sed?
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className=" w-[50%] flex flex-col relative">
            <div
              onMouseEnter={() => setHoverRight(true)}
              onMouseLeave={() => setHoverRight(false)}
              className="relative overflow-hidden w-[280px] h-[250px] "
            >
              {/* First Image */}
              <img
                src="./Images/OwnerImages/_MG_3923.jpg"
                alt="Right Hover"
                className={`absolute top-0 w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale ${
                  hoverRight ? "-left-0" : "-left-full"
                }`}
              />
              {/* Second Image */}
              <img
                src="./Images/rightgif.gif"
                alt="Right Initial"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-700 ease-in-out filter grayscale ${
                  hoverRight ? "left-[280px]" : "left-0"
                }`}
              />
            </div>
            {/* TEXT */}
            {hoverRight && (
              <div className="absolute top-full left-0 w-full text-left p-4 text-sm transition-all duration-700 ease-in-out">
                <div className="text-[#1a1a1a]/80 flex flex-col gap-2">
                  <h5>OUR STORY BY THE NUMBERS</h5>
                  <p>
                    Discover our heritage and passion for excellence — a story
                    told through every detail, every frame, every moment. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Delectus
                    perspiciatis, vitae ipsum odio accusantium laborum iusto
                    beatae vel a corporis provident consequatur tempora
                    excepturi! Ducimus recusandae modi placeat ad sed?
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {!hoverLeft && !hoverRight && (
          <div className="absolute bottom-0 left-0 h-[25%] w-full ">
            <div className="max-w-[50%] mx-auto text-center w-full  p-4 text-sm  transition-all duration-700 ease-in-out">
              <div className="text-[#1a1a1a]/80 flex flex-col gap-2">
                <h5>OUR NUMBERS</h5>
                <p>
                  Discover our heritage and passion for excellence — a story
                  told through every detail, every frame, every moment. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Delectus
                  perspiciatis, vitae ipsum odio accusantium laborum iusto
                  beatae vel a corporis provident consequatur tempora excepturi!
                  Ducimus recusandae modi placeat ad sed?
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/*Second section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-left mb-12">
            <h2 className="text-[14px] sm:text-[14px] font-light text-gray-700 mb-6 tracking-wide">
              MKDC Team
            </h2>

            <div className="w-full space-y-4 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-[14px]">
                Design and its inception are an open-ended process that the
                studio prides itself over. With a talented team of Architects
                and Interior Designers bringing their best to each endeavour,
                the studio's strength lies in its collective ethos of
                conversations and relentless innovations.
              </p>

              <p className="text-base sm:text-[14px]">
                The studio's success parameters are ever-changing, far from the
                shackles of complacency! Every team harbours a steadfast
                emphasis on redefining perfection while preserving the sanctity
                of the genesis of design across scales and natures of projects
                engaged.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-72 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-4 text-white transition-all duration-500 ${
                    hoveredMember === member.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-lg font-semibold bg-transparent">
                    {member.name}
                  </h3>
                  <p className="text-sm bg-transparent">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Third section */}
      <div className=" py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[14px] sm:text-[14px] font-light text-gray-700 mb-8 tracking-wide">
          Studio
        </h2>
        <div className="w-full h-[85vh] overflow-hidden ">
          <img
            src="./Images/_MG_3953.jpg"
            alt="group"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
      </div>

      {/*Forth section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-[14px] sm:text-[14px] font-light text-gray-700 mb-8 tracking-wide">
          KDND
        </h2>

        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Text Section */}
          <div className="w-full lg:w-[45%] text-[14px] text-[#000000]/[0.8] flex flex-col items-start gap-6">
            <p>
              Spearheaded by Architect Kiran Kapadia (Founder and Director –
              Kapadia Associates Design LLP), KDND was founded in association
              with MKDC in the year 2010. This alliance was established to
              holistically address associations in the niche sector of premium
              residential and urban design.
            </p>
            <p>
              Architect Kiran Kapadia was a mentor to Anand and Shobhan at their
              alma mater and had an undeniably profound impact on their take on
              architectural design. This, in turn, initiated a lasting
              relationship between the trio and outlived their days at
              university.
            </p>
            <p>
              A revered name in the industry, Kiran's expertise has captained a
              multitude of projects in the luxury residential, industrial, and
              large-scale urban housing sphere. This association focuses on the
              collaborative creation of luxury homes, model apartments,
              public-centric amenities, and urban inserts, which elevate the
              threshold of timeless and nuanced design.
            </p>
          </div>

          {/* Right Owners Section */}
          <div className="w-full lg:w-[50%] flex flex-wrap gap-6 justify-center lg:justify-start">
            {ownerMember.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer w-[45%] sm:w-[200px] md:w-[220px] lg:w-[200px]"
              >
                <div className="relative overflow-hidden bg-gray-200 aspect-[3/4] mb-4 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-500">
                  {/* Image with hover zoom + grayscale removal */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />

                  {/* Overlay content */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
                  >
                    <h3 className="text-white text-lg font-semibold mb-1 bg-transparent">
                      {member.name}
                    </h3>
                    <p className="text-gray-200 text-sm bg-transparent">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
