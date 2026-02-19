// import React, { useState } from "react";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Preeti sharma",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3594.jpg",
//   },
//   {
//     id: 2,
//     name: "Team Member 2",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3602.jpg",
//   },
//   {
//     id: 3,
//     name: "Team Member 3",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3604.jpg",
//   },
//   {
//     id: 4,
//     name: "Team Member 4",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3607.jpg",
//   },
//   {
//     id: 5,
//     name: "Team Member 5",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3611.jpg",
//   },
//   {
//     id: 6,
//     name: "Team Member 6",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3616.jpg",
//   },
//   {
//     id: 7,
//     name: "Team Member 7",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3621.jpg",
//   },
//   {
//     id: 8,
//     name: "Team Member 8",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3622.jpg",
//   },
//   {
//     id: 9,
//     name: "Team Member 9",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3630.jpg",
//   },
//   {
//     id: 10,
//     name: "Team Member 10",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3634.jpg",
//   },
//   {
//     id: 11,
//     name: "Team Member 11",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3638.jpg",
//   },
//   {
//     id: 12,
//     name: "Team Member 12",
//     role: "Interior Designer",
//     image: "/Images/INDIVIDUAL/_MG_3640.jpg",
//   },
// ];

// const Story = () => {
//   const [hoverLeft, setHoverLeft] = useState(false);
//   const [hoverRight, setHoverRight] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);

//   return (
//     <div className="font-sans ">

//       {/* ================= FIRST SECTION ================= */}
//       <div className="h-[90vh] relative flex items-center justify-center">
//         <div className="flex gap-16 w-full justify-center">
//           {/* LEFT OWNER */}
//           <div className="w-[280px] h-[250px] overflow-hidden">
//             <img
//               src="/Images/OwnerImages/_MG_3882.jpg"
//               alt="Owner"
//               className="w-full h-full object-cover grayscale"
//             />
//           </div>

//           {/* RIGHT OWNER */}
//           <div className="w-[280px] h-[250px] overflow-hidden">
//             <img
//               src="/Images/OwnerImages/_MG_3923.jpg"
//               alt="Owner"
//               className="w-full h-full object-cover grayscale"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ================= TEAM SECTION ================= */}
//       <section className="bg-white py-10 text-neutral-900 ">
//         <div className="max-w-[1100px] mx-auto px-6 bg-white">
//           {/* HEADER */}
//           <div className="mb-10 bg-white">
//             <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
//               INTERIOR DESIGNER
//             </h1>

//             <div className="flex items-center gap-4 mt-3 bg-white">
//               <span className="w-10 h-[1px] bg-neutral-300"></span>
//               <p className="text-sm tracking-[0.35em] text-neutral-600">
//                 DESIGN DEVELOPMENT
//               </p>
//             </div>
//           </div>

//           {/* ===== TOP HORIZONTAL ROW ===== */}
//           <div className="grid grid-cols-12 gap-8 items-start mb-14 bg-white">
//             {/* TEAM HEAD */}
//             <div className="group cursor-pointer col-span-12 lg:col-span-4">
//               <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100 transition-all duration-500">
//                 <img
//                   src="/Images/INDIVIDUAL/_MG_3594.jpg"
//                   alt="Preeti Sharma"
//                   className=" absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                 />
//                 <div
//                   className=" absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500"
//                 >
//                   <h3 className="text-base text-white font-medium tracking-wide bg-transparent">
//                     Preeti Sharma
//                   </h3>

//                   <p className="mt-1 text-xs text-gray-200 leading-snug bg-transparent">
//                     Department Head — Interior Design
//                   </p>

//                   <p className="text-xs text-gray-200 bg-transparent">
//                     15 Years Experience
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* TEAM PHOTO */}
//             <div className="col-span-12 lg:col-span-8 bg-white">
//               <div className="aspect-[16/8] overflow-hidden bg-neutral-100">
//                 <img
//                   src="/Images/INDIVIDUAL/interiorteam.jpeg"
//                   alt="Interior Team"
//                   className="w-full h-full object-cover grayscale-[15%]"
//                 />
//               </div>

//               <div className="flex items-center gap-3 mt-3 bg-white">
//                 <span className="w-8 h-[1px] bg-neutral-300"></span>
//                 <p className="text-xs tracking-[0.4em] text-neutral-600">
//                   OUR TEAM
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ===== EMPLOYEE GRID ===== */}
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
//             {[
//               {
//                 img: "Images/INDIVIDUAL/_MG_3645.jpg",
//                 name: "Payal Deshmukh",
//                 exp: "2.5 Years",
//               },
//               {
//                 img: "Images/INDIVIDUAL/_MG_3630.jpg",
//                 name: "Sonali Kumawat",
//                 exp: "1.2 Years",
//               },
//               {
//                 img: "Images/INDIVIDUAL/_MG_3638.jpg",
//                 name: "Siddhi Gadia",
//                 exp: "1.4 Years",
//               },
//               {
//                 img: "/Images/INDIVIDUAL/Anjalika.jpeg",
//                 name: "Anjalika Sharma",
//                 exp: "11 Months",
//               },
//               {
//                 img: "Images/INDIVIDUAL/_MG_3640.jpg",
//                 name: "Sara Barod",
//                 exp: "9 Months",
//               },
//             ].map((member, i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                   <img
//                     src={member.img}
//                     className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                   />
//                   <div
//                     className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500"
//                   >
//                     <h4 className="text-xs text-white font-medium tracking-wide bg-transparent">
//                       {member.name}
//                     </h4>
//                     <p className="text-[11px] text-gray-200 tracking-wide bg-transparent">
//                       Interior Designer
//                     </p>
//                     <p className="text-[11px] text-gray-200 bg-transparent">
//                       {member.exp}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ARCHITECTS */}
//       <section className="bg-white py-10 text-neutral-900">
//         <div className="max-w-[1100px] mx-auto px-6 bg-white">
//           {/* HEADER */}
//           <div className="mb-10 bg-white">
//             <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
//               ARCHITECTS
//             </h1>

//             <div className="flex items-center gap-4 mt-3">
//               <span className="w-10 h-[1px] bg-neutral-300"></span>
//               <p className="text-sm tracking-[0.35em] text-neutral-600">
//                 CONCEPT DEVELOPMENT
//               </p>
//             </div>
//           </div>

//           {/* ===== TOP ROW ===== */}
//           <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
//             {/* DEPARTMENT HEAD */}
//             <div className="group cursor-pointer col-span-12 lg:col-span-4">
//               <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100 transition-all duration-500">
//                 <img
//                   src="/Images/INDIVIDUAL/_MG_3604.jpg"
//                   className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                 />
//                 <div
//                   className=" absolute inset-0 flex flex-col justify-end p-4 bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500"
//                 >
//                   <h3 className="text-base text-white font-medium tracking-wide bg-transparent">
//                     Shilpa Bhave
//                   </h3>
//                   <p className="mt-1 text-xs text-gray-200 leading-snug bg-transparent">
//                     Department Head — Architect
//                   </p>
//                   <p className="text-xs text-gray-200 bg-transparent">
//                     25 Years Experience
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* TEAM IMAGE */}
//             <div className="col-span-12 lg:col-span-8 bg-white">
//               <div className="aspect-[16/8] overflow-hidden bg-neutral-100">
//                 <img
//                   src="/Images/INDIVIDUAL/artitects.jpeg"
//                   className="w-full h-full object-cover grayscale-[15%]"
//                 />
//               </div>

//               <div className="flex items-center gap-3 mt-3 bg-white">
//                 <span className="w-8 h-[1px] bg-neutral-300"></span>
//                 <p className="text-xs tracking-[0.4em] text-neutral-600">
//                   OUR TEAM
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* ===== TEAM GRID ===== */}
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
//             {[
//               ["_MG_3607.jpg", "Maya Kapde", "17 Years"],
//               ["_MG_3602.jpg", "Divya Malu", "15 Years"],
//               ["_MG_3611.jpg", "Radhika Rathi", "3.3 Years"],
//               ["_MG_3621.jpg", "Namami Vijayvargiya", "1.9 Years"],
//               ["_MG_3622.jpg", "Rishita Jain", "1.2 Years"],
//             ].map(([img, name, exp], i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                   <img
//                     src={`/Images/INDIVIDUAL/${img}`}
//                     className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                   />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500">
//                   <h4 className="text-xs text-white font-medium tracking-wide bg-transparent">{name}</h4>
//                   <p className="text-[11px] text-gray-200 tracking-wide bg-transparent">
//                     Architect
//                   </p>
//                   <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
//                 </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ARCHITECTS working drawing   */}
//       <section className="bg-white py-10 text-neutral-900">
//         <div className="max-w-[1100px] mx-auto px-6 bg-white">
//           {/* HEADER */}
//           <div className="mb-10 bg-white">
//             <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
//               ARCHITECTS
//             </h1>

//             <div className="flex items-start gap-4 mt-3 bg-white">
//               <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
//               <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug">
//                 WORKING DRAWINGS, DETAILS & 3D
//                 <br />
//                 VISUALISER
//               </p>
//             </div>
//           </div>

//           {/* ===== TOP ROW (SAME AS PREVIOUS SECTION) ===== */}
//           <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
//             {/* DEPARTMENT HEAD */}
//             <div className="group cursor-pointer col-span-12 lg:col-span-4 bg-white">
//               <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                 <img
//                   src="Images/INDIVIDUAL/_MG_3653.jpg"
//                   alt="Kaushal Kumar Karahe"
//                   className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                 />
//               <div className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500">
//                 <h3 className="text-base text-white bg-transparent font-medium tracking-wide">
//                   Kaushal Kumar Karahe
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-200 bg-transparent">
//                   Department Head — Civil Engineer
//                 </p>
//                 <p className="text-xs text-gray-200 bg-transparent">35 Years Experience</p>
//               </div>
//               </div>

//             </div>

//             {/* TEAM IMAGE */}
//             <div className="col-span-12 lg:col-span-8 bg-white">
//               <div className="relative aspect-[16/8] bg-white overflow-hidden">
//                 {/* IMAGE */}
//                 <img
//                   src="Images/INDIVIDUAL/architectsteam.jpeg"
//                   alt="Our Team"
//                   className="w-full h-full object-contain bg-white"
//                 />

//                 {/* OUR TEAM TEXT */}
//                 <div className="absolute bottom-4 right-6 flex items-center gap-3 bg-white">
//                   <span className="w-8 h-[1px] bg-neutral-300"></span>
//                   <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
//                     OUR TEAM
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===== TEAM GRID (SAME AS PREVIOUS) ===== */}
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
//             {[
//               [
//                 "Images/INDIVIDUAL/_MG_3673.jpg",
//                 "Saraswati Jain",
//                 "Architectural Draftperson",
//                 "15 Years",
//               ],
//               [
//                 "Images/INDIVIDUAL/_MG_3668.jpg",
//                 "Prachi Gopnarayan",
//                 "Architectural Draftperson",
//                 "2 Years",
//               ],
//               [
//                 "Images/INDIVIDUAL/_MG_3658.jpg",
//                 "Twinkle Malviya",
//                 "3D Visualizer",
//                 "10 Years",
//               ],
//               [
//                 "Images/INDIVIDUAL/_MG_3654.jpg",
//                 "Rohit Solanki",
//                 "3D Visualizer",
//                 "12 Years",
//               ],
//               [
//                 "Images/INDIVIDUAL/_MG_3664.jpg",
//                 "Vinod Patel",
//                 "3D Visualizer",
//                 "15 Years",
//               ],
//             ].map(([img, name, role, exp], i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                   <img
//                     src={img}
//                     className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                   />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500">
//                   <h4 className="text-xs text-white bg-transparent font-medium tracking-wide">{name}</h4>
//                   <p className="text-[11px] text-gray-200 bg-transparent tracking-wide">
//                     {role}
//                   </p>
//                   <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
//                 </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROJECT MANAGERS */}
//       <section className="bg-white py-10 text-neutral-900">
//         <div className="max-w-[1100px] mx-auto px-6 bg-white">
//           {/* HEADER */}
//           <div className="mb-10 bg-white">
//             <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
//               PROJECT MANAGERS
//             </h1>

//             <div className="flex items-start gap-4 mt-3 bg-white">
//               <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
//               <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug">
//                 ARCHITECTURE &
//                 <br />
//                 INTERIOR DESIGN
//               </p>
//             </div>
//           </div>

//           {/* ===== TOP ROW (SAME GRID AS PREVIOUS) ===== */}
//           <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
//             {/* LEFT PLACEHOLDER (keeps layout identical) */}
//             <div className="group cursor-pointer col-span-12 lg:col-span-4 bg-white" />

//             {/* TEAM IMAGE */}
//             <div className="group cursor-pointer col-span-12 lg:col-span-8 bg-white">
//               <div className="relative aspect-[16/8] bg-neutral-100 overflow-hidden transition-all duration-500">
//                 <img
//                   src="Images/INDIVIDUAL/projectmanagerteam.jpeg"
//                   alt="Our Team"
//                   className="w-full h-full object-cover object-top grayscale-[10%]"
//                 />

//                 <div className="absolute bottom-4 right-6 flex items-center gap-3">
//                   <span className="w-8 h-[1px] bg-neutral-300"></span>
//                   <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
//                     OUR TEAM
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===== TEAM GRID (SAME SYSTEM AS PREVIOUS) ===== */}
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
//             {[
//               ["_MG_3676.jpg", "Adil Marfatia", "Project Manager", "49 Years"],
//               ["_MG_3682.jpg", "Rajendra Tokekar", "Civil Engineer", "—"],
//               ["_MG_3685.jpg", "Ramesh Lodwal", "Civil Engineer", "31 Years"],
//               ["_MG_3696.jpg", "Sheetal Jain", "Interior Designer", "18 Years"],
//               [
//                 "_MG_3702.jpg",
//                 "Inderjeet Sharma",
//                 "Interior Designer",
//                 "11 Years",
//               ],
//               [
//                 "_MG_3704.jpg",
//                 "Vinjal Badjatiya",
//                 "Project Manager",
//                 "10 Years",
//               ],
//               ["_MG_3706.jpg", "Akash Barua", "Civil Engineer", "7 Years"],
//               ["_MG_3712.jpg", "Azhar Belim", "Civil Engineer", "4 Years"],
//               ["_MG_3715.jpg", "Prakash Kumawat", "Civil Engineer", "1 Year"],
//             ].map(([img, name, role, exp], i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                   <img
//                     src={`Images/INDIVIDUAL/${img}`}
//                     className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                   />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500">
//                   <h4 className="text-xs text-white bg-transparent font-medium tracking-wide">{name}</h4>
//                   <p className="text-[11px] text-gray-200 bg-transparent tracking-wide">
//                     {role}
//                   </p>
//                   <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
//                 </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ARCHITECTS
// CONCEPT DEVELOPMENT */}
//       <section className="bg-white py-10 text-neutral-900">
//         <div className="max-w-[1100px] mx-auto px-6 bg-white">
//           {/* HEADER */}
//           <div className="mb-10 bg-white">
//             <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
//               ARCHITECTS
//             </h1>

//             <div className="flex items-start gap-4 mt-3 bg-white">
//               <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
//               <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug">
//                 WORKING DRAWINGS, DETAILS & 3D
//                 <br />
//                 VISUALISER
//               </p>
//             </div>
//           </div>

//           {/* ===== TOP ROW (SAME AS PREVIOUS SECTION) ===== */}
//           <div className="grid grid-cols-12 gap-8 mb-14 bg-white">
//             {/* DEPARTMENT HEAD */}
//             <div className="group cursor-pointer col-span-12 lg:col-span-4">
//               <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                 <img
//                   src="Images/INDIVIDUAL/_MG_3686.jpg"
//                   alt="Kaushal Kumar Karahe"
//                   className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                 />
//               <div className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500">
//                 <h3 className="text-base text-white bg-transparent font-medium tracking-wide">
//                   Mukesh Singli
//                 </h3>
//                 <p className="mt-1 text-xs text-gray-200 bg-transparent">
//                   Accounts, HR & Admin
//                 </p>
//                 <p className="text-xs text-gray-200 bg-transparent">40 Years Experience</p>
//               </div>
//               </div>

//             </div>

//             {/* TEAM IMAGE */}
//             <div className="col-span-12 lg:col-span-8 bg-white">
//               <div className="relative aspect-[16/8] bg-neutral-100 overflow-hidden">
//                 {/* IMAGE */}
//                 <img
//                   src="Images/INDIVIDUAL/pair.jpeg"
//                   alt="Our Team"
//                   className="w-full h-full object-contain bg-white"
//                 />

//                 {/* OUR TEAM TEXT */}
//                 <div className="absolute bottom-4 right-6 flex items-center gap-3 bg-white">
//                   <span className="w-8 h-[1px] bg-neutral-300"></span>
//                   <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
//                     OUR TEAM
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===== TEAM GRID (SAME AS PREVIOUS) ===== */}
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 bg-white">
//             {[
//               [
//                 "Images/INDIVIDUAL/_MG_3692.jpg",
//                 "L. K Gupta",
//                 "Purchase",
//                 "32 Years",
//               ],
//             ].map(([img, name, role, exp], i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="relative aspect-[3/3.6] overflow-hidden bg-neutral-100">
//                   <img
//                     src={img}
//                     className="absolute inset-0 w-full h-full object-cover
//             transition-all duration-700 ease-in-out
//             filter  group-hover:grayscale-0 group-hover:scale-110"
//                   />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4
//           bg-black/30
//           opacity-0 group-hover:opacity-100
//           transition-opacity duration-500">
//                   <h4 className="text-xs text-white bg-transparent font-medium tracking-wide">{name}</h4>
//                   <p className="text-[11px] text-gray-200 bg-transparent tracking-wide">
//                     {role}
//                   </p>
//                   <p className="text-[11px] text-gray-200 bg-transparent">{exp}</p>
//                 </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* IT and networking */}
//       <section className="bg-white px-10 py-20">
//         <div className="max-w-[1100px] mx-auto bg-white">
//           {/* HEADER */}
//           <div className="mb-20 bg-white">
//             <h1 className="text-[42px] font-light tracking-[0.15em] leading-none bg-white">
//               IT & NETWORKING
//             </h1>
//             <div className="flex items-center gap-4 mt-3 bg-white">
//               <span className="w-10 h-[1px] bg-neutral-300"></span>
//               <p className="text-sm tracking-[0.35em] text-neutral-600">
//                  SYSTEMS & INFRASTRUCTURE
//               </p>
//             </div>
//             {/* <p className="text-2xl tracking-widest mt-2 ">
//               SYSTEMS & INFRASTRUCTURE
//             </p> */}
//           </div>

//           {/* CONTENT */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-white">
//             {/* IMAGE */}
//             <div className="w-full h-[420px] overflow-hidden bg-white flex items-center justify-center">
//               <img
//                 src="/Images/INDIVIDUAL/IMG_20251121_201921.jpeg"
//                 alt="IT & Network Engineer"
//                 className="max-w-full max-h-full object-contain bg-white"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* last section */}
//       <section className="bg-white px-10 py-24">
//         <div className="max-w-[1600px] mx-auto">
//           {/* TEAM IMAGE */}
//           <div className="overflow-hidden rounded-[28px]">
//             <img
//               src="Images/_MG_3953.jpg"
//               alt="MKDC Team"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* CAPTION */}
//           <div className="mt-12 text-center">
//             <h2 className="text-4xl tracking-[0.25em] font-light">MKDC TEAM</h2>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Story;

import React from "react";

const Story = () => {
  return (
    <>
      <section className="bg-white  px-6">
        <div className="text-right py-5 bg-transparent">
          <p className="bg-transparent text-[14px] text-gray-800">
            DESIGN PHILOSOPHY | FIRM | MISSION | TEAM
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start bg-transparent">
          {/* LEFT SIDE */}
          <div className="text-center md:text-left bg-transparent">
            <div className=" flex items-center justify-center bg-transparent">
              <div className="w-72 h-80 mx-auto md:mx-0 overflow-hidden rounded-lg">
                <img
                  src="/Images/OwnerImages/_MG_3882.jpg"
                  // src="/Images/OwnerImages/_MG_3923.jpg"
                  alt="Manish Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 bg-transparent">
              Manish Kumar
            </h3>

            <p className="text-sm text-gray-500 mt-1 bg-transparent">
              Founder & Chief Designer
            </p>

            <div className="mt-6 space-y-4 text-sm text-gray-600 leading-relaxed bg-transparent">
              <p className="bg-transparent">
                “MANISH KUMAT DESIGN CELL” has been established by Mr. Manish
                Kumat in 1993 after completing his post graduation from School
                of Planning & Architecture Delhi in 1990.
              </p>

              <p className="bg-transparent">
                Manish Kumat Design Cell was the founder chairman of Institute
                of Indian Interior Designers (IIID) Indore and also handled
                important Portolios of Hon. Sec. and Treasurer as a part of
                National Executive Body of IIID Committee. He was also the
                chairperson for the NATIONAL CONVENTION at IIID which was held
                at Goa in December 2018 & is the chairperson for the IIID
                NATIONAL CONVENTION to be held at Hyderabad in 2021.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-transparent">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 bg-transparent">
              Design Philosophy.
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] bg-transparent">
              <p className="bg-transparent">
                A designer always takes inspirations from nature, perhaps the
                greatest designer is GOD himself. I appreciate beauty in its any
                manifestation, observe it, and try to learn from it. The
                stillness of mountains, forests and rivers ever fill me with
                calm and peace.
              </p>

              <p className="bg-transparent">
                I observe mundane things around me, and if they give me joy, I
                ask myself WHY? This is a process of observation, which is
                always an ongoing process, and is reflected in my design.
              </p>

              <p className="bg-transparent">
                Every individual has a hidden artist residing in some corner of
                his being. Life provides ample of opportunities to each one of
                us to evolve.
              </p>

              <p className="bg-transparent">
                One is close to one’s own self only in times of pain and love.
                Pain and love are both sides of the same coin and are
                prerequisites to all original creations in the world
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center bg-transparent">
          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center bg-transparent">
            <div className="w-80 md:w-96 overflow-hidden rounded-lg bg-transparent ">
              <img
                src="/Images/OwnerImages/_MG_3923.jpg"
                alt="Idea"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-transparent">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 bg-transparent">
              At the Beginning It Was an Idea.
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] bg-transparent">
              <p className="bg-transparent">
                The idea was to build something that lasts and to enhance the
                quality of the built environment and people’s lives.
              </p>

              <p className="bg-transparent">
                The idea has become a reality, thanks to MANISH KUMAT DESIGN
                CELL TEAM, a practice made of people sharing the passion for
                design and for the attention to the detail.
              </p>

              <p className="bg-transparent">
                In these first twenty five years, important objectives have been
                reached, solid foundations have been laid, to achieve even more
                ambitious results.
              </p>
            </div>

            <div className="mt-10 text-right bg-transparent">
              <p className="text-gray-900 font-medium bg-transparent">
                Manish Kumar
              </p>
              <p className="text-sm text-gray-500 italic bg-transparent">
                Founder & Chief Designer
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center bg-transparent">
          {/* LEFT IMAGE */}
          <div className="flex justify-center order-1 md:order-none bg-transparent">
            <div className="w-80 md:w-96 overflow-hidden rounded-lg bg-transparent">
              <img
                src="/Images/OwnerImages/_MG_3936.jpg"
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-transparent">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 bg-transparent">
              Mission.
            </h2>

            <div className="space-y-10 bg-transparent">
              <div className="bg-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 bg-transparent">
                  Research
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed bg-transparent">
                  Each project has a different approach for design, according to
                  the users need. The concepts of space are inherently flexible
                  which makes the design timeless.
                </p>
              </div>

              <div className="bg-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 bg-transparent">
                  Responsibility
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed bg-transparent">
                  The practice endeavors to employ technologies that sustain
                  rather than pollute, that are durable rather than replaceable.
                  Our main aim is to integrate low energy designs within the
                  built environment.
                </p>
              </div>

              <div className="bg-transparent">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 bg-transparent">
                  Competence
                </h3>
                <p className="text-gray-700 text-[15px] leading-relaxed bg-transparent">
                  MANISH KUMAT DESIGN CELL is a company based in Indore,
                  (India), working on a range of different projects for more
                  than twenty five years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6">
        <div className="max-w-6xl mx-auto bg-transparent  px-4 sm:px-6 ">
          <p className="text-[14px] sm:text-[20px] bg-transparent font-semibold text-gray-700 py-4 tracking-wide text-center">
            OUR TEAM
          </p>
          <div className="w-full h-[85vh] overflow-hidden bg-transparent">
            <img
              src="./Images/_MG_3953.jpg"
              alt="group"
              className="w-full h-full object-cover  "
            />
          </div>
        </div>
      </section>
      {/* ================= TEAM SECTION ================= */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-transparent">
          {/* HEADER */}
          <div className="mb-10 bg-transparent">
            <h1 className="text-[20px] font-light tracking-[0.15em] leading-none bg-transparent">
              INTERIOR DESIGNER
            </h1>

            <div className="flex items-center gap-4 mt-3 bg-transparent">
              <span className="w-10 h-[1px] bg-neutral-300"></span>
              <p className="text-sm tracking-[0.35em] text-neutral-600 bg-transparent">
                DESIGN DEVELOPMENT
              </p>
            </div>
          </div>

          {/* ===== TOP HORIZONTAL ROW ===== */}
          {/* <div className="grid grid-cols-12 gap-8 items-start mb-14">
           
            <div className="col-span-12 lg:col-span-4">
              <div className="aspect-[3/3.6] overflow-hidden bg-neutral-100">
                <img
                  src="/Images/INDIVIDUAL/_MG_3594.jpg"
                  alt="Preeti Sharma"
                  className="w-full h-full object-cover object-top grayscale-[10%]"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-base font-medium tracking-wide">
                  Preeti Sharma
                </h3>

                <p className="mt-1 text-xs text-neutral-600 leading-snug">
                  Department Head — Interior Design
                </p>

                <p className="text-xs text-neutral-500">15 Years Experience</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="aspect-[16/8] overflow-hidden bg-neutral-100">
                <img
                  src="/Images/INDIVIDUAL/interiorteam.jpeg"
                  alt="Interior Team"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>

              <div className="flex items-center gap-3 mt-3">
                <span className="w-8 h-[1px] bg-neutral-300"></span>
                <p className="text-xs tracking-[0.4em] text-neutral-600">
                  OUR TEAM
                </p>
              </div>
            </div>
          </div> */}

          {/* ===== EMPLOYEE GRID ===== */}
          {/* <div className="flex flex-col sm:flex-row gap-4 bg-transparent">
            {[
              {
                img:"/Images/INDIVIDUAL/_MG_3594.jpg",
                name:"Preeti Sharma",
                exp:"15 Years Experience"
              },
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
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={member.img}
                    className="w-full h-full object-cover object-top grayscale-[20%]"
                  />
                </div>

                <div className="mt-3">
                  <h4 className="text-xs font-medium tracking-wide">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide">
                    Interior Designer
                  </p>
                  <p className="text-[11px] text-neutral-400">{member.exp}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap bg-transparent">
            {[
              [
                "/Images/INDIVIDUAL/_MG_3594.jpg",
                "Preeti Sharma",
                "Department Head — Interior Design",
                "15 Years Experience"
              ],
              [
                "Images/INDIVIDUAL/_MG_3645.jpg",
                "Payal Deshmukh",
                " Interior Designer",
                "2.5 Years",
              ],
              [
                "Images/INDIVIDUAL/_MG_3630.jpg",
                "Sonali Kumawat",
                "Interior Designer",
                "1.2 Years",
              ],
              [
                "Images/INDIVIDUAL/_MG_3638.jpg",
                "Siddhi Gadia",
                "Interior Designer",
                "1.4 Years",
              ],
              [
                "Images/INDIVIDUAL/Anjalika.jpeg",
                "Anjalika Sharma",
                "Interior Designer",
                "11 Months",
              ],
              [
                "Images/INDIVIDUAL/_MG_3640.jpg",
                "Sara Barod",
                "Interior Designer",
                "9 Months",
              ],
              [
                "Images/INDIVIDUAL/interiorteam.jpeg",
              ]
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={img}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </div>

                <div className="mt-3 bg-transparent">
                  <h4 className="text-xs font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide bg-transparent">
                    {role}
                  </p>
                  <p className="text-[11px] text-neutral-400 bg-transparent">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-transparent">
          {/* HEADER */}
          <div className="mb-10 bg-transparent">
            <h1 className="text-[20px] font-light tracking-[0.15em] leading-none bg-transparent">
              ARCHITECTS
            </h1>

            <div className="flex items-center gap-4 mt-3 bg-transparent">
              <span className="w-10 h-[1px] bg-neutral-300"></span>
              <p className="text-sm tracking-[0.35em] text-neutral-600 bg-transparent">
                CONCEPT DEVELOPMENT
              </p>
            </div>
          </div>

          {/* ===== TOP ROW ===== */}
          {/* <div className="grid grid-cols-12 gap-8 mb-14">
         
            <div className="col-span-12 lg:col-span-4">
              <div className="aspect-[3/3.6] overflow-hidden bg-neutral-100">
                <img
                  src="/Images/INDIVIDUAL/_MG_3604.jpg"
                  className="w-full h-full object-cover object-top grayscale-[10%]"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-base font-medium tracking-wide">
                  Shilpa Bhave
                </h3>
                <p className="mt-1 text-xs text-neutral-600">
                  Department Head — Architect
                </p>
                <p className="text-xs text-neutral-500">25 Years Experience</p>
              </div>
            </div>

            
            <div className="col-span-12 lg:col-span-8">
              <div className="aspect-[16/8] overflow-hidden bg-neutral-100">
                <img
                  src="/Images/INDIVIDUAL/artitects.jpeg"
                  className="w-full h-full object-cover grayscale-[15%]"
                />
              </div>

              <div className="flex items-center gap-3 mt-3">
                <span className="w-8 h-[1px] bg-neutral-300"></span>
                <p className="text-xs tracking-[0.4em] text-neutral-600">
                  OUR TEAM
                </p>
              </div>
            </div>
          </div> */}

          {/* ===== TEAM GRID ===== */}
          {/* <div className="flex flex-col sm:flex-row gap-4 flex-wrap bg-transparent">
            {[
              [
                "_MG_3604.jpg","Shilpa Bhave","Department Head — Architect","25 Years Experience",
              ],
              ["_MG_3607.jpg", "Maya Kapde", "17 Years"],
              ["_MG_3602.jpg", "Divya Malu", "15 Years"],
              ["_MG_3611.jpg", "Radhika Rathi", "3.3 Years"],
              ["_MG_3621.jpg", "Namami Vijayvargiya", "1.9 Years"],
              ["_MG_3622.jpg", "Rishita Jain", "1.2 Years"],
              ["artitects.jpeg",],
            ].map(([img, name, exp], i) => (
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={`/Images/INDIVIDUAL/${img}`}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </div>

                <div className="mt-3 bg-transparent">
                  <h4 className="text-xs font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide bg-transparent">
                    Architect
                  </p>
                  <p className="text-[11px] text-neutral-400 bg-transparent">{exp}</p>
                </div>
              </div>
            ))}
          </div> */}

           <div className="flex flex-col sm:flex-row gap-4 flex-wrap bg-transparent">
            {[
              [
                "/Images/INDIVIDUAL/_MG_3604.jpg",
                "Shilpa Bhave",
                "Department Head — Architect",
                "25 Years Experience"
              ],
              [
                "/Images/INDIVIDUAL/_MG_3607.jpg",
                "Maya Kapde",
                "Architect",
                "15 Years "
              ],
              [
                "/Images/INDIVIDUAL/_MG_3602.jpg",
                "Divya Malu",
                "Architect",
                "15 Years",
              ],
              [
                "/Images/INDIVIDUAL/_MG_3611.jpg",
                "Radhika Rathi",
                "Architect",
                "3.3 Years",
              ],
              [
                "/Images/INDIVIDUAL/_MG_3621.jpg",
                "Namai Vijayvargiya",
                "Architect",
                "1.9 Years",
              ],
              [
                "/Images/INDIVIDUAL/_MG_3622.jpg",
                "Rishita Jain",
                "Architect",
                "12 Years",
              ],
              [
                "/Images/INDIVIDUAL/artitects.jpeg",
              ]
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={img}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </div>

                <div className="mt-3 bg-transparent">
                  <h4 className="text-xs font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide bg-transparent">
                    {role}
                  </p>
                  <p className="text-[11px] text-neutral-400 bg-transparent">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS working drawing   */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-transparent">
          {/* HEADER */}
          <div className="mb-10 bg-transparent">
            <h1 className="text-[20px] bg-transparent font-light tracking-[0.15em] leading-none">
              ARCHITECTS
            </h1>

            <div className="flex items-start gap-4 mt-3 bg-transparent">
              <span className="w-10 h-[1px] bg-neutral-300 mt-2 "></span>
              <p className="text-sm tracking-[0.3em] text-neutral-600 leading-snug bg-transparent">
                WORKING DRAWINGS, DETAILS & 3D VISUALISER
              </p>
            </div>
          </div>

          {/* ===== TOP ROW (SAME AS PREVIOUS SECTION) ===== */}
          {/* <div className="grid grid-cols-12 gap-8 mb-14">
            
            <div className="col-span-12 lg:col-span-4">
              <div className="aspect-[3/3.6] overflow-hidden bg-neutral-100">
                <img
                  src="Images/INDIVIDUAL/_MG_3653.jpg"
                  alt="Kaushal Kumar Karahe"
                  className="w-full h-full object-cover object-top grayscale-[10%]"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-base font-medium tracking-wide">
                  Kaushal Kumar Karahe
                </h3>
                <p className="mt-1 text-xs text-neutral-600">
                  Department Head — Civil Engineer
                </p>
                <p className="text-xs text-neutral-500">35 Years Experience</p>
              </div>
            </div>

            
            <div className="col-span-12 lg:col-span-8">
              <div className="relative aspect-[16/8] bg-neutral-100 overflow-hidden">
                
                <img
                  src="Images/INDIVIDUAL/architectsteam.jpeg"
                  alt="Our Team"
                  className="w-full h-full object-contain"
                />

                
                <div className="absolute bottom-4 right-6 flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-neutral-300"></span>
                  <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap">
                    OUR TEAM
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* ===== TEAM GRID (SAME AS PREVIOUS) ===== */}
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap bg-transparent">
            {[
              [
                "Images/INDIVIDUAL/_MG_3653.jpg",
                "Kaushal Kumar Karahe",
                "Department Head — Civil Engineer",
                "35 Years Experience"
              ],
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
              [
                "Images/INDIVIDUAL/architectsteam.jpeg",
              ]
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={img}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </div>

                <div className="mt-3 bg-transparent">
                  <h4 className="text-xs font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide bg-transparent">
                    {role}
                  </p>
                  <p className="text-[11px] text-neutral-400 bg-transparent">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT MANAGERS */}
      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-transparent">
          {/* HEADER */}
          <div className="mb-10 bg-transparent">
            <h1 className="text-[20px] bg-transparent font-light tracking-[0.15em] leading-none">
              PROJECT MANAGERS
            </h1>

            <div className="flex items-start gap-4 mt-3 bg-transparent">
              <span className="w-10 h-[1px] bg-neutral-300 mt-2"></span>
              <p className="text-sm bg-transparent tracking-[0.3em] text-neutral-600 leading-snug">
                ARCHITECTURE & INTERIOR DESIGN
                {/* <br /> */}
               
              </p>
            </div>
          </div>

          {/* ===== TOP ROW (SAME GRID AS PREVIOUS) ===== */}
          {/* <div className="grid grid-cols-12 gap-8 mb-14">
          
            <div className="col-span-12 lg:col-span-4" />

        
            <div className="col-span-12 lg:col-span-8">
              <div className="relative aspect-[16/8] bg-neutral-100 overflow-hidden">
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
          </div> */}

          {/* ===== TEAM GRID (SAME SYSTEM AS PREVIOUS) ===== */}
          <div className="flex flex-col sm:flex-row flex-wrap  gap-4 bg-transparent">
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
              ["projectmanagerteam.jpeg"],
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={`Images/INDIVIDUAL/${img}`}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </div>

                <div className="mt-3 bg-transparent">
                  <h4 className="text-xs font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide bg-transparent">
                    {role}
                  </p>
                  <p className="text-[11px] text-neutral-400 bg-transparent">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS
CONCEPT DEVELOPMENT */}
<div className="flex flex-col sm:flex-row items-start justify-center  gap-12 bg-white">

      <section className="bg-white py-10 text-neutral-900">
        <div className="max-w-[1100px] mx-auto px-6 bg-transparent ">
          {/* HEADER */}
          <div className="mb-10 bg-transparent">
            <h1 className="text-[20px] bg-transparent font-light tracking-[0.15em] leading-none">
              ARCHITECTS
            </h1>

            <div className="flex items-start bg-transparent gap-4 mt-3">
              <span className="w-10 h-[1px] bg-neutral-300 mt-2 "></span>
              <p className="text-sm bg-transparent tracking-[0.3em] text-neutral-600 leading-snug">
                WORKING DRAWINGS, DETAILS & 3D <span> </span>
                {/* <br /> */}
                VISUALISER
              </p>
            </div>
          </div>

          {/* ===== TOP ROW (SAME AS PREVIOUS SECTION) ===== */}
          {/* <div className="grid grid-cols-12 gap-8 mb-14 bg-transparent">
           
            <div className="col-span-12 lg:col-span-4 bg-transparent">
              <div className="w-full h-[220px] overflow-hidden bg-neutral-100 bg-transparent">
                <img
                  src="Images/INDIVIDUAL/_MG_3686.jpg"
                  alt="Kaushal Kumar Karahe"
                  className="max-w-full max-h-full object-contain grayscale"
                />
              </div>

              <div className="mt-4 bg-transparent">
                <h3 className="text-base font-medium tracking-wide bg-transparent">
                  Mukesh Singli
                </h3>
                <p className="mt-1 text-xs text-neutral-600 bg-transparent">
                  Accounts, HR & Admin
                </p>
                <p className="text-xs text-neutral-500 bg-transparent">40 Years Experience</p>
              </div>
            </div>

          
            <div className="col-span-12 lg:col-span-8 bg-transparent">
              <div className=" w-full h-[220px] overflow-hidden bg-transparent">
           
                <img
                  src="Images/INDIVIDUAL/pair.jpeg"
                  alt="Our Team"
                  className="max-w-full max-h-full object-contain grayscale"
                />

              
                <div className="absolute bottom-4 right-6 flex items-center gap-3 bg-transparent">
                  <span className="w-8 h-[1px] bg-neutral-300"></span>
                  <p className="text-xs tracking-[0.4em] text-neutral-600 whitespace-nowrap bg-transparent ">
                    OUR TEAM
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* ===== TEAM GRID (SAME AS PREVIOUS) ===== */}
          <div className="flex gap-12 bg-transparent">
            {[
              [
              "Images/INDIVIDUAL/_MG_3686.jpg",
              "Mukesh Singli",
              "Account, HR & Admin",
              "40 Years Experience",
              ],
              [
                "Images/INDIVIDUAL/_MG_3692.jpg",
                "L. K Gupta",
                "Purchase",
                "32 Years",
              ],
              [
                "Images/INDIVIDUAL/pair.jpeg",
              ]
            ].map(([img, name, role, exp], i) => (
              <div key={i} className="bg-transparent">
                <div className="w-full h-[220px] overflow-hidden bg-transparent">
                  <img
                    src={img}
                    className="max-w-full max-h-full object-contain grayscale"
                  />
                </div>

                <div className="mt-3 bg-transparent">
                  <h4 className="text-xs font-medium tracking-wide bg-transparent">{name}</h4>
                  <p className="text-[11px] text-neutral-500 tracking-wide bg-transparent">
                    {role}
                  </p>
                  <p className="bg-transparent text-[11px] text-neutral-400">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT and networking */}
      <section className="bg-white  py-10 text-neutral-900 ">
        <div className="max-w-[1100px] mx-auto px-6 bg-transparent ">
          {/* HEADER */}
          <div className="mb-10 bg-transparent">
            <h1 className="text-[20px] font-light tracking-wide bg-transparent leading-none">
              IT & NETWORKING
            </h1>
            <p className="text-sm tracking-widest mt-3 bg-transparent text-neutral-600 ">
              SYSTEMS & INFRASTRUCTURE
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-transparent">
            {/* IMAGE */}
            <div className="w-full h-[220px] overflow-hidden bg-transparent ">
              <img
                src="/Images/INDIVIDUAL/IMG_20251121_201921.jpeg"
                alt="IT & Network Engineer"
                className="max-w-full max-h-full object-contain grayscale"
              />
            </div>
          </div>
        </div>
      </section>
</div>

    </>
  );
};

export default Story;
