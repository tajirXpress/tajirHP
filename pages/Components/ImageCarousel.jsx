import React from "react";
import Image from "next/image";
import main1 from "../../public/main1.jpeg";
import main2 from "../../public/main2.jpeg";
import main3 from "../../public/main3.jpeg";
import main4 from "../../public/main4.jpeg";

const images = [main2, main1, main4, main3];

const ImageCarousel = () => {


  return (
    <div>
      <div className="imgslider">
      {images.map((e) => (
          <Image
            className="pcimgone"
            src={e}
            alt={e}
            width={151.5}
            height={218}
            sizes="100vw"
            style={{ objectFit: "cover" ,borderRadius:"2px" }} /* 
            id="pcimg" */
          />
        ))}
      </div>
      <div className="pcimg">
        {images.map((e) => (
          <Image
            className="pcimgone"
            src={e}
            alt={e}
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "cover" ,borderRadius:"2px" }} /* 
            id="pcimg" */
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
