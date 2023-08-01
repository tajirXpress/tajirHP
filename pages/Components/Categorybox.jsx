import Link from "next/link";
import { AiOutlineMobile } from "react-icons/ai";
import food from "../../public/food.svg";
import all from "../../public/all.svg";
import home from "../../public/home.svg";
import kitchen from "../../public/kitchen.svg";
import Image from "next/image";

const Categorybox = () => {
  return (
    <div className="Categorybox">
      <div className="onecategory">
        <Image src={food} width={16} height={18} />
        <Link href="/">Groceries & Food</Link>
      </div>
      <div className="onecategory">
        <Image src={kitchen} width={19} height={15.8} />
        <Link href="/">Kitchen</Link>
      </div>
      <div className="onecategory">
        <AiOutlineMobile />
        <Link href="/"> Mobiles and tablets</Link>
      </div>
      <div className="onecategory">
        <Image src={home} width={17} height={17} />
        <Link href="/">Home & Appliances</Link>
      </div>
      <div className="onecategory">
        <Image src={all} width={17} height={17} />
        <Link href="/">All</Link>
      </div>
    </div>
  );
};

export default Categorybox;
