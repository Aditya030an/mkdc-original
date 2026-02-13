// import React from "react";

// const Recognition = () => {
//   const publicationsList = [
//     { year: "2021", name: "MGS ARCHITECTURE" },
//     { year: "2020", name: "MGS ARCHITECTURE" },
//     { year: "2018", name: "SURFACE REPORTER" },
//     { year: "2016", name: "INSITE MAGAZINE" },
//     { year: "2016", name: "INDIAARTNDESIGN" },
//     { year: "2015", name: "DESIGN SOURCE" },
//     { year: "2015", name: "BUILDIFY" },
//     { year: "2015", name: "INSITE" },
//     { year: "2014", name: "CW INTERIORS" },
//     { year: "2014", name: "SURFACES REPORTER" },
//     { year: "2014", name: "BUILDING GIANTS" },
//     { year: "2014", name: "IN-FORM" },
//     { year: "2014", name: "THE TILES OF INDIA" },
//     { year: "2013", name: "COMMERCIAL DESIGN(ITP)" },
//     { year: "2013", name: "SOCIETY INTERIORS" },
//     { year: "2012", name: "CBA MEDIA" },
//     { year: "2012", name: "ARCHITECTURE UPDATE(AU)" },
//     { year: "2010", name: "INSITE" },
//     { year: "2010", name: "ARCHITURE UPDATE (AU)" },
//     { year: "2009", name: "WOMEN'S ERA" },
//   ];

//   return (
//     <div className="bg-black pt-16">
//       <div className="max-w-5xl mx-auto  flex items-start justify-between gap-8 bg-transparent">
//         <div className="bg-transparent text-white w-1/2 ">
//           <h1 className="text-2xl font-semibold bg-transparent text-white p-2">
//             MANISH KUMAT DESIGN CELL in leading design magazines of the country
//           </h1>

//           <img
//             src="/Images/recognition_img.png"
//             alt="Recognition"
//             className="mt-16 rounded w-[80%] bg-transparent border-2 border-solid border-white mx-auto"
//           />
//         </div>
//         <div className="bg-transparent text-white w-1/2">
//           <h1 className="text-3xl font-semibold capitalize bg-transparent text-white">
//             Publications
//           </h1>

//           {/* LIST */}
//           <ul className="space-y-2 text-lg bg-transparent text-white mt-8">
//             {publicationsList.map((item, index) => (
//               <li key={index} className="bg-transparent">
//                 <span className="font-bold text-white bg-transparent">
//                   {item.year}
//                 </span>{"    "}
//                 <span className="bg-transparent font-medium text-white/90">{item.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Recognition;


import React from "react";
import { motion } from "framer-motion";

const Recognition = () => {
  const publicationsList = [
    { year: "2021", name: "MGS ARCHITECTURE" },
    { year: "2020", name: "MGS ARCHITECTURE" },
    { year: "2018", name: "SURFACE REPORTER" },
    { year: "2016", name: "INSITE MAGAZINE" },
    { year: "2016", name: "INDIAARTNDESIGN" },
    { year: "2015", name: "DESIGN SOURCE" },
    { year: "2015", name: "BUILDIFY" },
    { year: "2015", name: "INSITE" },
    { year: "2014", name: "CW INTERIORS" },
    { year: "2014", name: "SURFACES REPORTER" },
    { year: "2014", name: "BUILDING GIANTS" },
    { year: "2014", name: "IN-FORM" },
    { year: "2014", name: "THE TILES OF INDIA" },
    { year: "2013", name: "COMMERCIAL DESIGN (ITP)" },
    { year: "2013", name: "SOCIETY INTERIORS" },
    { year: "2012", name: "CBA MEDIA" },
    { year: "2012", name: "ARCHITECTURE UPDATE (AU)" },
    { year: "2010", name: "INSITE" },
    { year: "2010", name: "ARCHITURE UPDATE (AU)" },
    { year: "2009", name: "WOMEN'S ERA" },
  ];

  return (
    <div className="bg-white text-black py-20 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start bg-transparent   ">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" bg-transparent"
        >
          <h1 className="text-3xl font-light leading-snug tracking-wide  bg-transparent">
            MANISH KUMAT DESIGN CELL in leading design magazines of the country
          </h1>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            src="/Images/recognition_img.png"
            alt="Recognition"
            className="mt-12 rounded border border-white/30 shadow-xl w-full max-w-md mx-auto bg-transparent"
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className=" bg-transparent"
        >
          <h1 className="text-4xl font-light tracking-wider bg-transparent">Publications</h1>

          <ul className="mt-10 space-y-3 bg-transparent">
            {publicationsList.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="text-lg flex gap-3 bg-transparent"
              >
                <span className="font-semibold text-black bg-transparent">{item.year}</span>
                <span className="text-black/80 bg-transparent">{item.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Recognition;
