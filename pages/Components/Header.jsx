import Image from "next/image";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../public/Logo.png";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerdiv">
          <div className="topdiv">
            <Image
              src={logo}
              height={0}
              width={0}
              sizes="100vw"
              alt="Logo"
              className="logo"
            />
            <div id="helpcentertext">
              <Link id="topdivtext" href="/">
                Help Center
              </Link>
              <Link id="topdivtext" href="/">
                Sell on tajirXpress
              </Link>
              <Link id="topdivtext" href="/">
                Track my Order
              </Link>
            </div>
          </div>
          <div id="topdivleft">
            <Link href="/" id="orders">
              Orders
            </Link>
            <Link href="/" id="cartbox">
              <AiOutlineShoppingCart /> 0
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
