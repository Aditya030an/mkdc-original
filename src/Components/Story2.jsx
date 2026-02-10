import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Preeti sharma",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3594.jpg",
  },
  {
    id: 2,
    name: "Team Member 2",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3602.jpg",
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3604.jpg",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3607.jpg",
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3611.jpg",
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3616.jpg",
  },
  {
    id: 7,
    name: "Team Member 7",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3621.jpg",
  },
  {
    id: 8,
    name: "Team Member 8",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3622.jpg",
  },
  {
    id: 9,
    name: "Team Member 9",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3630.jpg",
  },
  {
    id: 10,
    name: "Team Member 10",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3634.jpg",
  },
  {
    id: 11,
    name: "Team Member 11",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3638.jpg",
  },
  {
    id: 12,
    name: "Team Member 12",
    role: "Interior Designer",
    image: "/Images/INDIVIDUAL/_MG_3640.jpg",
  },
];

const Story = () => {
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hoveredMember, setHoveredMember] = useState(null);
  

  return (
    <div className="font-sans ">
     
      {/* ================= FIRST SECTION ================= */}
      <div className="h-[90vh] relative flex items-center justify-center">
        <div className="flex gap-16 w-full justify-center">
          {/* LEFT OWNER */}
          <div className="w-[280px] h-[250px] overflow-hidden">
            <img
              src="/Images/OwnerImages/_MG_3882.jpg"
              alt="Owner"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* RIGHT OWNER */}
          <div className="w-[280px] h-[250px] overflow-hidden">
            <img
              src="/Images/OwnerImages/_MG_3923.jpg"
              alt="Owner"
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>

      {/* ================= TEAM SECTION ================= */}
      <section className="bg-white py-10 text-neutral-900 ">
        <div className="max-w-[1100px] mx-auto px-6 bg-white">
          {/* HEADER */}
          <div className="mb-10 bg-white">
            <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
              INTERIOR DESIGNER
            </h1>

            <div className="flex items-center gap-4 mt-3 bg-white">
              <span className="w-10 h-[1px] bg-neutral-300"></span>
              <p className="text-sm tracking-[0.35em] text-neutral-600">
                DESIGN DEVELOPMENT
              </p>
            </div>
          </div>

          {/* ===== TOP HORIZONTAL ROW ===== */}
          <div className="grid grid-cols-12 gap-8 items-start mb-14 bg-white">
            {/* TEAM HEAD */}
            <div className="group cursor-pointer col-span-12 lg:col-span-4">
              <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100 transition-all duration-500">
                <img
                  src="/Images/INDIVIDUAL/_MG_3594.jpg"
                  alt="Preeti Sharma"
                  className=" absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                />
                <div
                  className=" absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
                >
                  <h3 className="text-base text-white font-medium tracking-wide bg-transparent">
                    Preeti Sharma
                  </h3>

                  <p className="mt-1 text-xs text-gray-200 leading-snug bg-transparent">
                    Department Head — Interior Design
                  </p>

                  <p className="text-xs text-gray-200 bg-transparent">
                    15 Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* TEAM PHOTO */}
            <div className="col-span-12 lg:col-span-8 bg-white">
              <div className="aspect-[16/8] overflow-hidden bg-neutral-100">
                <img
                  src="/Images/INDIVIDUAL/interiorteam.jpeg"
                  alt="Interior Team"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>

              <div className="flex items-center gap-3 mt-3 bg-white">
                <span className="w-8 h-[1px] bg-neutral-300"></span>
                <p className="text-xs tracking-[0.4em] text-neutral-600">
                  OUR TEAM
                </p>
              </div>
            </div>
          </div>

          {/* ===== EMPLOYEE GRID ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
            {[
              {
                img: "Images/INDIVIDUAL/_MG_3645.jpg",
                name: "Payal Deshmukh",
                exp: "2.5 Years",
              },
              {
                img: "Images/INDIVIDUAL/_MG_3630.jpg",
                name: "Sonali Kumawat",
                exp: "1.2 Years",
              },
              {
                img: "Images/INDIVIDUAL/_MG_3638.jpg",
                name: "Siddhi Gadia",
                exp: "1.4 Years",
              },
              {
                img: "/Images/INDIVIDUAL/Anjalika.jpeg",
                name: "Anjalika Sharma",
                exp: "11 Months",
              },
              {
                img: "Images/INDIVIDUAL/_MG_3640.jpg",
                name: "Sara Barod",
                exp: "9 Months",
              },
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                  <img
                    src={member.img}
                    className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
                  >
                    <h4 className="text-xs text-white font-medium tracking-wide bg-transparent">
                      {member.name}
                    </h4>
                    <p className="text-[11px] text-gray-200 tracking-wide bg-transparent">
                      Interior Designer
                    </p>
                    <p className="text-[11px] text-gray-200 bg-transparent">
                      {member.exp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-white">
          {/* HEADER */}
          <div className="mb-10 bg-white">
            <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
              ARCHITECTS
            </h1>

            <div className="flex items-center gap-4 mt-3">
              <span className="w-10 h-[1px] bg-neutral-300"></span>
              <p className="text-sm tracking-[0.35em] text-neutral-600">
                CONCEPT DEVELOPMENT
              </p>
            </div>
          </div>

          {/* ===== TOP ROW ===== */}
          <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
            {/* DEPARTMENT HEAD */}
            <div className="group cursor-pointer col-span-12 lg:col-span-4">
              <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100 transition-all duration-500">
                <img
                  src="/Images/INDIVIDUAL/_MG_3604.jpg"
                  className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                />
                <div
                  className=" absolute inset-0 flex flex-col justify-end p-4 bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
                >
                  <h3 className="text-base text-white font-medium tracking-wide bg-transparent">
                    Shilpa Bhave
                  </h3>
                  <p className="mt-1 text-xs text-gray-200 leading-snug bg-transparent">
                    Department Head — Architect
                  </p>
                  <p className="text-xs text-gray-200 bg-transparent">
                    25 Years Experience
                  </p>
                </div>
              </div>
            </div>

            {/* TEAM IMAGE */}
            <div className="col-span-12 lg:col-span-8 bg-white">
              <div className="aspect-[16/8] overflow-hidden bg-neutral-100">
                <img
                  src="/Images/INDIVIDUAL/artitects.jpeg"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>

              <div className="flex items-center gap-3 mt-3 bg-white">
                <span className="w-8 h-[1px] bg-neutral-300"></span>
                <p className="text-xs tracking-[0.4em] text-neutral-600">
                  OUR TEAM
                </p>
              </div>
            </div>
          </div>

          {/* ===== TEAM GRID ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
            {[
              ["_MG_3607.jpg", "Maya Kapde", "17 Years"],
              ["_MG_3602.jpg", "Divya Malu", "15 Years"],
              ["_MG_3611.jpg", "Radhika Rathi", "3.3 Years"],
              ["_MG_3621.jpg", "Namami Vijayvargiya", "1.9 Years"],
              ["_MG_3622.jpg", "Rishita Jain", "1.2 Years"],
            ].map(([img, name, exp], i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                  <img
                    src={`/Images/INDIVIDUAL/${img}`}
                    className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                  />
                <div className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500">
                  <h4 className="text-xs text-white font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-gray-200 tracking-wide bg-transparent">
                    Architect
                  </p>
                  <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS working drawing   */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-white">
          {/* HEADER */}
          <div className="mb-10 bg-white">
            <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
              ARCHITECTS
            </h1>

            <div className="flex items-start gap-4 mt-3 bg-white">
              <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
              <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug">
                WORKING DRAWINGS, DETAILS & 3D
                <br />
                VISUALISER
              </p>
            </div>
          </div>

          {/* ===== TOP ROW (SAME AS PREVIOUS SECTION) ===== */}
          <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
            {/* DEPARTMENT HEAD */}
            <div className="group cursor-pointer col-span-12 lg:col-span-4 bg-white">
              <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                <img
                  src="Images/INDIVIDUAL/_MG_3653.jpg"
                  alt="Kaushal Kumar Karahe"
                  className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                />
              <div className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500">
                <h3 className="text-base text-white bg-transparent font-medium tracking-wide">
                  Kaushal Kumar Karahe
                </h3>
                <p className="mt-1 text-xs text-gray-200 bg-transparent">
                  Department Head — Civil Engineer
                </p>
                <p className="text-xs text-gray-200 bg-transparent">35 Years Experience</p>
              </div>
              </div>

            </div>

            {/* TEAM IMAGE */}
            <div className="col-span-12 lg:col-span-8 bg-white">
              <div className="relative aspect-[16/8] bg-white overflow-hidden">
                {/* IMAGE */}
                <img
                  src="Images/INDIVIDUAL/architectsteam.jpeg"
                  alt="Our Team"
                  className="w-full h-full object-contain bg-white"
                />

                {/* OUR TEAM TEXT */}
                <div className="absolute bottom-4 right-6 flex items-center gap-3 bg-white">
                  <span className="w-8 h-[1px] bg-neutral-300"></span>
                  <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
                    OUR TEAM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TEAM GRID (SAME AS PREVIOUS) ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
            {[
              [
                "Images/INDIVIDUAL/_MG_3673.jpg",
                "Saraswati Jain",
                "Architectural Draftperson",
                "15 Years",
              ],
              [
                "Images/INDIVIDUAL/_MG_3668.jpg",
                "Prachi Gopnarayan",
                "Architectural Draftperson",
                "2 Years",
              ],
              [
                "Images/INDIVIDUAL/_MG_3658.jpg",
                "Twinkle Malviya",
                "3D Visualizer",
                "10 Years",
              ],
              [
                "Images/INDIVIDUAL/_MG_3654.jpg",
                "Rohit Solanki",
                "3D Visualizer",
                "12 Years",
              ],
              [
                "Images/INDIVIDUAL/_MG_3664.jpg",
                "Vinod Patel",
                "3D Visualizer",
                "15 Years",
              ],
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                  <img
                    src={img}
                    className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                  />
                <div className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500">
                  <h4 className="text-xs text-white bg-transparent font-medium tracking-wide">{name}</h4>
                  <p className="text-[11px] text-gray-200 bg-transparent tracking-wide">
                    {role}
                  </p>
                  <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MANAGERS */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-white">
          {/* HEADER */}
          <div className="mb-10 bg-white">
            <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
              PROJECT MANAGERS
            </h1>

            <div className="flex items-start gap-4 mt-3 bg-white">
              <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
              <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug">
                ARCHITECTURE &
                <br />
                INTERIOR DESIGN
              </p>
            </div>
          </div>

          {/* ===== TOP ROW (SAME GRID AS PREVIOUS) ===== */}
          <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
            {/* LEFT PLACEHOLDER (keeps layout identical) */}
            <div className="group cursor-pointer col-span-12 lg:col-span-4 bg-white" />

            {/* TEAM IMAGE */}
            <div className="group cursor-pointer col-span-12 lg:col-span-8 bg-white">
              <div className="relative aspect-[16/8] bg-neutral-100 overflow-hidden transition-all duration-500">
                <img
                  src="Images/INDIVIDUAL/projectmanagerteam.jpeg"
                  alt="Our Team"
                  className="w-full h-full object-cover object-top grayscale-[10%]"
                />

                <div className="absolute bottom-4 right-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-neutral-300"></span>
                  <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
                    OUR TEAM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TEAM GRID (SAME SYSTEM AS PREVIOUS) ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
            {[
              ["_MG_3676.jpg", "Adil Marfatia", "Project Manager", "49 Years"],
              ["_MG_3682.jpg", "Rajendra Tokekar", "Civil Engineer", "—"],
              ["_MG_3685.jpg", "Ramesh Lodwal", "Civil Engineer", "31 Years"],
              ["_MG_3696.jpg", "Sheetal Jain", "Interior Designer", "18 Years"],
              [
                "_MG_3702.jpg",
                "Inderjeet Sharma",
                "Interior Designer",
                "11 Years",
              ],
              [
                "_MG_3704.jpg",
                "Vinjal Badjatiya",
                "Project Manager",
                "10 Years",
              ],
              ["_MG_3706.jpg", "Akash Barua", "Civil Engineer", "7 Years"],
              ["_MG_3712.jpg", "Azhar Belim", "Civil Engineer", "4 Years"],
              ["_MG_3715.jpg", "Prakash Kumawat", "Civil Engineer", "1 Year"],
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                  <img
                    src={`Images/INDIVIDUAL/${img}`}
                    className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                  />
                <div className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500">
                  <h4 className="text-xs text-white bg-transparent font-medium tracking-wide">{name}</h4>
                  <p className="text-[11px] text-gray-200 bg-transparent tracking-wide">
                    {role}
                  </p>
                  <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS
CONCEPT DEVELOPMENT */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-white">
          {/* HEADER */}
          <div className="mb-10 bg-white">
            <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
              ARCHITECTS
            </h1>

            <div className="flex items-start gap-4 mt-3 bg-white">
              <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
              <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug">
                WORKING DRAWINGS, DETAILS & 3D
                <br />
                VISUALISER
              </p>
            </div>
          </div>

          {/* ===== TOP ROW (SAME AS PREVIOUS SECTION) ===== */}
          <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
            {/* DEPARTMENT HEAD */}
            <div className="group cursor-pointer col-span-12 lg:col-span-4">
              <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                <img
                  src="Images/INDIVIDUAL/_MG_3686.jpg"
                  alt="Kaushal Kumar Karahe"
                  className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                />
              <div className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500">
                <h3 className="text-base text-white bg-transparent font-medium tracking-wide">
                  Mukesh Singli
                </h3>
                <p className="mt-1 text-xs text-gray-200 bg-transparent">
                  Accounts, HR & Admin
                </p>
                <p className="text-xs text-gray-200 bg-transparent">40 Years Experience</p>
              </div>
              </div>

            </div>

            {/* TEAM IMAGE */}
            <div className="col-span-12 lg:col-span-8 bg-white">
              <div className="relative aspect-[16/8] bg-neutral-100 overflow-hidden">
                {/* IMAGE */}
                <img
                  src="Images/INDIVIDUAL/pair.jpeg"
                  alt="Our Team"
                  className="w-full h-full object-contain bg-white"
                />

                {/* OUR TEAM TEXT */}
                <div className="absolute bottom-4 right-6 flex items-center gap-3 bg-white">
                  <span className="w-8 h-[1px] bg-neutral-300"></span>
                  <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
                    OUR TEAM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TEAM GRID (SAME AS PREVIOUS) ===== */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
            {[
              [
                "Images/INDIVIDUAL/_MG_3692.jpg",
                "L. K Gupta",
                "Purchase",
                "32 Years",
              ],
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
                  <img
                    src={img}
                    className="absolute inset-0 w-full h-full object-cover 
            transition-all duration-700 ease-in-out 
            filter  group-hover:grayscale-0 group-hover:scale-110"
                  />
                <div className="absolute inset-0 flex flex-col justify-end p-4 
          bg-black/30
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-500">
                  <h4 className="text-xs text-white bg-transparent font-medium tracking-wide">{name}</h4>
                  <p className="text-[11px] text-gray-200 bg-transparent tracking-wide">
                    {role}
                  </p>
                  <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
                </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT and networking */}
      <section className="bg-white px-10 py-20">
        <div className="max-w-[1100px] mx-auto bg-white">
          {/* HEADER */}
          <div className="mb-20 bg-white">
            <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
              IT & NETWORKING
            </h1>
            <div className="flex items-center gap-4 mt-3 bg-white">
              <span className="w-10 h-[1px] bg-neutral-300"></span>
              <p className="text-sm tracking-[0.35em] text-neutral-600">
                 SYSTEMS & INFRASTRUCTURE
              </p>
            </div>
            {/* <p className="text-2xl tracking-widest mt-2 ">
              SYSTEMS & INFRASTRUCTURE
            </p> */}
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-white">
            {/* IMAGE */}
            <div className="w-full h-[420px] overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/Images/INDIVIDUAL/IMG_20251121_201921.jpeg"
                alt="IT & Network Engineer"
                className="max-w-full max-h-full object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* last section */}
      <section className="bg-white px-10 py-24">
        <div className="max-w-[1600px] mx-auto">
          {/* TEAM IMAGE */}
          <div className="overflow-hidden rounded-[28px]">
            <img
              src="Images/_MG_3953.jpg"
              alt="MKDC Team"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* CAPTION */}
          <div className="mt-12 text-center">
            <h2 className="text-4xl tracking-[0.25em] font-light">MKDC TEAM</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
