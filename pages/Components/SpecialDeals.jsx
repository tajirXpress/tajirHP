import Image from "next/image";
import special1 from "../../public/special1.jpeg";
import special2 from "../../public/special2.jpeg";
import special3 from "../../public/special3.jpeg";

const SpecialDeal = () => {
  return (
    <div className="SpecialDeal">
      <h2>Special Deals of Snacks</h2>
      <div className="actualspedeal">
        <Image
          src={special3}
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "cover", borderRadius: "2px" }}
          id="spcialdealimg"
        />
        <Image
          src={special1}
          width={250}
          height={102}
          style={{ objectFit: "cover", borderRadius: "2px" }}
          id="spcialdealimg"
        />
        <Image
          src={special2}
          width={250}
          height={102}
          style={{ objectFit: "cover", borderRadius: "2px" }}
          id="spcialdealimg"
        />
      </div>
    </div>
  );
};

export default SpecialDeal;
