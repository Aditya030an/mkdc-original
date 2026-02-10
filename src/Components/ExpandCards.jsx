import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExpandCards = ({ items }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="md:flex md:flex-wrap w-full  gap-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            flex: hovered === index ? 3 : hovered === null ? 1 : 0.7,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative rounded-lg overflow-hidden cursor-pointer bg-black min-w-[40%] w-full h-[60vh]"
        >
          <Link to={`/work/${item.id}`}>
            {/* Image */}
            <motion.img
              src={item.coverImage}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover"
              animate={{ scale: hovered === index ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Black overlay */}
            <motion.div
              className="absolute inset-0 bg-black"
              animate={{ opacity: hovered === index ? 0 : 0.4 }}
              transition={{ duration: 0.4 }}
            />

            {/* Title */}
            <motion.div
              className="absolute bottom-6 left-6 text-white tracking-widest bg-transparent"
              animate={{ opacity: hovered === index ? 1 : 0.6 }}
            >
              <h2 className="text-lg md:text-xl bg-transparent text-white">{item.name}</h2>
              <p className="text-sm opacity-80 bg-transparent text-white">
                {item.location} • {item.date}
              </p>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpandCards;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const ExpandCards = ({ items }) => {
//   const [hovered, setHovered] = useState(null);
//   const [loadedImages, setLoadedImages] = useState({});

//   const handleImageLoad = (id) => {
//     setLoadedImages((prev) => ({
//       ...prev,
//       [id]: true,
//     }));
//   };

//   return (
//     <div className="flex flex-wrap w-full gap-4">
//       {items.map((item, index) => {
//         const isLoaded = loadedImages[item.id];

//         return (
//           <motion.div
//             key={item.id}
//             onMouseEnter={() => setHovered(index)}
//             onMouseLeave={() => setHovered(null)}
//             animate={{
//               flex: hovered === index ? 3 : hovered === null ? 1 : 0.7,
//             }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="relative rounded-xl overflow-hidden cursor-pointer bg-black min-w-[40%] w-full h-[60vh]"
//           >
//             <Link to={`/work/${item.id}`} className="block w-full h-full">

//               {/* 🔹 Loader / Skeleton */}
//               {!isLoaded && (
//                 <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-20">
//                   <div className="w-10 h-10 border-4 border-gray-500 border-t-white rounded-full animate-spin" />
//                 </div>
//               )}

//               {/* 🔹 Image */}
//               <motion.img
//                 src={item.coverImage}
//                 alt={item.name}
//                 loading="lazy"
//                 onLoad={() => handleImageLoad(item.id)}
//                 className="w-full h-full object-cover"
//                 initial={{ opacity: 0 }}
//                 animate={{
//                   opacity: isLoaded ? 1 : 0,
//                   scale: hovered === index ? 1.08 : 1,
//                 }}
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//               />

//               {/* 🔹 Dark Overlay */}
//               <motion.div
//                 className="absolute inset-0 bg-black"
//                 animate={{ opacity: hovered === index ? 0 : 0.4 }}
//                 transition={{ duration: 0.4 }}
//               />

//               {/* 🔹 Text Content */}
//               <motion.div
//                 className="absolute bottom-6 left-6 text-white tracking-widest z-10"
//                 animate={{ opacity: hovered === index ? 1 : 0.7 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-lg md:text-xl font-semibold">
//                   {item.name}
//                 </h2>
//                 <p className="text-sm opacity-80">
//                   {item.location} • {item.date}
//                 </p>
//               </motion.div>

//             </Link>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default ExpandCards;


