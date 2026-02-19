import React, { useRef, useState, useEffect } from "react";
import { propertyList } from "../../utils/Constant/propertyList";
import { Link } from "react-router-dom";
import ExpandCards from "./ExpandCards";

const Work = () => {
  const houses = propertyList.filter((p) => p?.type.toLowerCase() === "houses");
  const interior = propertyList.filter(
    (p) => p?.type.toLowerCase() === "interior"
  );
  const commercial = propertyList.filter(
    (p) => p?.type.toLowerCase() === "commercial"
  );
  const ongoing = propertyList.filter(
    (p) => p?.type.toLowerCase() === "ongoing"
  );

  const allType = ["Houses", "Interior", "Commercial", "Ongoing"];

  const housesRef = useRef(null);
  const interiorRef = useRef(null);
  const commercialRef = useRef(null);
  const ongoingRef = useRef(null);

  const sectionRefs = {
    Houses: housesRef,
    Interior: interiorRef,
    Commercial: commercialRef,
    Ongoing: ongoingRef,
  };

  const [progress, setProgress] = useState({
    Houses: 0,
    Interior: 0,
    Commercial: 0,
    Ongoing: 0,
  });

  const handleScroll = (type) => {
    sectionRefs[type]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // update scroll progress
  useEffect(() => {
    const handleScrollProgress = () => {
      const updatedProgress = {};

      allType.forEach((type) => {
        const section = sectionRefs[type]?.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionHeight = section.offsetHeight;

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            updatedProgress[type] = Math.min(
              100,
              Math.max(
                0,
                ((window.innerHeight - rect.top) / sectionHeight) * 100
              )
            );
          } else {
            updatedProgress[type] = 0;
          }
        }
      });

      setProgress((prev) => ({ ...prev, ...updatedProgress }));
    };

    window.addEventListener("scroll", handleScrollProgress);
    handleScrollProgress();
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  // Card UI
  const renderCard = (property) => (
    <Link
      key={property?.id}
      to={`/work/${property?.id}`}
      className="relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 bg-black"
    >
      <img
        src={property?.coverImage}
        alt={property?.name}
        loading="lazy"
        className="w-full h-[70vh] object-cover transform group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-black/50  opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-all duration-500">
        <h3 className="font-semibold text-lg tracking-wider bg-transparent">
          {property?.name}
        </h3>
        <p className="text-sm opacity-80 bg-transparent">
          {property?.location} | {property?.date}
        </p>
      </div>
    </Link>
  );

  return (
    <div className="flex bg-transparent">
      {/* Sidebar with progress tracker */}
      <aside className="hidden md:flex items-center justify-between z-50 fixed bottom-0 left-0 h-[30px] w-full bg-white  border-r px-4 py-6 shadow-sm">
        {allType.map((type, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center gap-2 w-full bg-white"
          >
            <button
              onClick={() => handleScroll(type)}
              className="text-sm font-semibold tracking-widest text-gray-400 hover:text-black transition-colors"
            >
              {type.toUpperCase()}
            </button>
            <div className="relative h-[2px] bg-white rounded-full w-full z-50">
              <div
                className="absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-300"
                style={{ width: `${progress[type] || 0}%` }}
              ></div>
            </div>
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main className="flex-1 px-6 md:px-0 bg-white ">
        {/* Sections */}
        <section ref={housesRef} className="mb-16 bg-white">
          <h1 className="text-center text-lg font-semibold tracking-widest text-black mb-6 bg-white">
            HOUSES
          </h1>
           <ExpandCards items={houses} />
        </section>

        {/* <section ref={interiorRef} className="mb-16 bg-black">
          <h1 className="text-center text-lg font-semibold tracking-widest text-white bg-black mb-6">
            INTERIOR
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 bg-black">
            {interior.map((p) => renderCard(p))}
          </div>
            <ExpandCards items={interior} />
        </section> */}

        {/* <section ref={commercialRef} className="mb-16 bg-black">
          <h1 className="text-center text-lg font-semibold tracking-widest text-white bg-black mb-6">
            COMMERCIAL
          </h1>
         
             <ExpandCards items={commercial} />
        </section> */}

        {/* <section ref={ongoingRef} className="mb-16 bg-black">
          <h1 className="text-center text-lg font-semibold tracking-widest text-white bg-black mb-6">
            ONGOING
          </h1>
          
          <ExpandCards items={ongoing}/>
        </section> */}
      </main>
    </div>
  );
};

export default Work; 