import Image from "next/image";
import jackson from "../../public/jacksonmarket.jpg";
import gulplaza from "../../public/gulplaza.jpg";
import plasticmarket from "../../public/plasticmarket.jpg";
import ranchorline from "../../public/ranchorline.jpg";
import joriabazar from "../../public/joriabazar.jpg";
import urdubazaar from "../../public/urdubazaar.jpg";

const MarketSearch = () => {
  const images = [
    {
      img: joriabazar,
      title: "Jodia Bazar",
    },
    {
      img: urdubazaar,
      title: "Urdu Bazaar",
    },
    {
      img: ranchorline,
      title: "Ranchor Line",
    },
    {
      img: plasticmarket,
      title: "Plastic Market",
    },
    {
      img: gulplaza,
      title: "Gul Plaza",
    },
    {
      img: jackson,
      title: "Jackson Market",
    },
  ];

  return (
    <div className="markettop">
      <div className="shopdiv">
        <h2>Shop by Market</h2>
        <button>Enter Market</button>
      </div>
      <div className="oneimgmarket">
        {images.map((e) => {
          return (
            <div className="onemarketbox">
              <Image
                src={e.img}
                width={0}
                height={0}
                sizes="100vw"
                id="marketimg"
              />
              <p>{e.title}</p>
            </div>
          );
        })}
        <button>Enter Market</button>
      </div>
    </div>
  );
};

export default MarketSearch;
