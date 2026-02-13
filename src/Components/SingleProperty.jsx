import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { propertyList } from "../../utils/Constant/propertyList";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const SingleProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = propertyList.findIndex((property) => property.id === id);
  const singleProperty = propertyList[currentIndex];

  const goToPrevious = () => {
    const prevIndex =
      currentIndex === 0 ? propertyList.length - 1 : currentIndex - 1;
    navigate(`/work/${propertyList[prevIndex].id}`);
  };

  const goToNext = () => {
    const nextIndex =
      currentIndex === propertyList.length - 1 ? 0 : currentIndex + 1;
    navigate(`/work/${propertyList[nextIndex].id}`);
  };

  if (!singleProperty) {
    return <div className="text-center mt-20">Property not found</div>;
  }

  return (
    <div className="w-full h-full ">
      {/* Hero Section */}
      {singleProperty?.coverImage && (
        <div className="relative w-full h-[70vh] lg:h-[90vh] overflow-hidden">
          <img
            src={singleProperty.coverImage}
            alt={singleProperty?.name || "coverImage"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 bg-transparent">
              {singleProperty.name}
            </h1>
            <p className="text-lg md:text-xl opacity-80 bg-transparent">
              {singleProperty.location} • {singleProperty.date}
            </p>
          </div>

          {/* Floating navigation buttons */}
          <button
            className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-md transition"
            onClick={goToPrevious}
            title="Previous Property"
          >
            <SlArrowLeft className="text-lg bg-transparent" />
          </button>
          <button
            className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-3 shadow-md transition"
            onClick={goToNext}
            title="Next Property"
          >
            <SlArrowRight className="text-lg bg-transparent" />
          </button>
        </div>
      )}

      {/* Description & second image */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 justify-between px-6 lg:px-16 py-12 bg-white">
        {singleProperty?.description && (
          <p className="lg:max-w-[40%] text-[15px] text-black leading-relaxed text-justify bg-white">
            {singleProperty.description}
          </p>
        )}

        {singleProperty?.image?.[1]?.imageUrl && (
          <div className="w-full lg:w-[55%]  overflow-hidden shadow-md bg-white text-black">
            <img
              src={singleProperty.image[1].imageUrl}
              alt="secondImage"
              className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Third Image & Property Info */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 justify-between px-6 lg:px-16 py-12 text-black bg-white">
        {singleProperty?.image?.[2]?.imageUrl && (
          <div className="w-full lg:w-[65%]  overflow-hidden shadow-md">
            <img
              src={singleProperty.image[2].imageUrl}
              alt="thirdImage"
              className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        )}

        <div className="w-full lg:w-[30%] bg-white p-6  shadow-md flex flex-col gap-4">
          {singleProperty?.name && (
            <div className="bg-transparent bg-white">
              <h4 className="font-semibold text-gray-700 bg-transparent bg-white">Property Name</h4>
              <p className="text-black bg-transparent bg-white">{singleProperty.name}</p>
            </div>
          )}
          {singleProperty?.location && (
            <div className="bg-transparent bg-white">
              <h4 className="font-semibold text-gray-700 bg-transparent bg-white">Location</h4>
              <p className="text-black bg-transparent bg-white">{singleProperty.location}</p>
            </div>
          )}
          {singleProperty?.date && (
            <div className="bg-transparent bg-white">
              <h4 className="font-semibold text-gray-700 bg-transparent bg-white">Date</h4>
              <p className="text-black bg-transparent bg-white">{singleProperty.date}</p>
            </div>
          )}
          {singleProperty?.propertyArea && (
            <div className="bg-transparent bg-white">
              <h4 className="font-semibold text-gray-700 bg-transparent bg-white">Property Area</h4>
              <p className="text-black bg-transparent bg-white">{singleProperty.propertyArea} sq.ft</p>
            </div>
          )}
        </div>
      </div>

      {/* Gallery */}
      {singleProperty?.image?.length > 3 && (
        <div className="px-6 lg:px-16 py-12 bg-white">
          <h2 className="text-xl font-semibold text-black bg-white mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
            {singleProperty.image
              .filter((img, index) => img?.imageUrl && index > 2)
              .map((image, idx) => (
                <div
                  className="w-full h-[250px] sm:h-[300px] lg:h-[85vh] overflow-hidden shadow-md"
                  key={image.id}
                >
                  <img
                    src={image.imageUrl}
                    alt={`gallery ${idx} ${image.id}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProperty;
