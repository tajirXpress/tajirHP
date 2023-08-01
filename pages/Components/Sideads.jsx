import Image from "next/image";
import ad1 from "../../public/ad1.jpeg";
import ad2 from "../../public/ad2.jpeg";
import ad3 from "../../public/ad3.jpeg";

const Sideads = () => {
  return (
    <div className="sideads">
      <Image
        src={ad1}
        width={0}
        height={0}
        sizes="100vw"
        className="sideadone"
        style={{ objectFit: "cover" }}
      />
      <Image
        src={ad2}
        width={0}
        height={0}
        sizes="100vw"
        className="sideadone"
        style={{ objectFit: "cover" }}
      />
      <Image
        src={ad3}
        width={0}
        height={0}
        sizes="100vw"
        className="sideadone"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Sideads;
