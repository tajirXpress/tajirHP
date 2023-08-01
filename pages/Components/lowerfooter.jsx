import copyright from "../../public/copyright.svg";
import Image from "next/image";

const LowerFooter = () => {
  return (
    <div className="lowerfooter">
      <h3>
        Copyrights <Image src={copyright} width={17} height={17} />
      </h3>
      <h3>2023</h3>
      <h2>tajirXpress</h2>
    </div>
  );
};

export default LowerFooter;
