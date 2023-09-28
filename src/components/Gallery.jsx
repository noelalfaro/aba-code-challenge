import React from "react";
import villageSalad from "../assets/Aba_VillageSalad.jpg";
import saladIce from "../assets/up-47.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <img src={saladIce} alt="salad-ice.jpg" id="salad-ice-image" />
      <img
        src={villageSalad}
        alt="village-salad.jpg"
        id="village-salad-image"
      />
    </div>
  );
};

export default Gallery;
