import Image from "next/image";
import lux from "../../public/lux.png";
import lux2 from "../../public/lux2.png";
import g1 from "../../public/g1.jpeg";
import g2 from "../../public/g2.jpeg";
import g3 from "../../public/g3.jpeg";
import g4 from "../../public/g4.jpeg";
import kit1 from "../../public/kit1.jpeg";
import kit2 from "../../public/kit2.jpeg";
import kit3 from "../../public/kit3.jpeg";
import kit4 from "../../public/kit4.jpeg";
import kit5 from "../../public/kit5.jpeg";
import auto1 from "../../public/auto1.jpeg";
import auto2 from "../../public/auto2.jpeg";
import auto3 from "../../public/auto3.jpeg";
import auto4 from "../../public/auto4.jpeg";
import auto5 from "../../public/auto5.jpeg";
import ad1 from "../../public/ad1.jpeg";
import ad2 from "../../public/ad2.jpeg";
import ad3 from "../../public/ad3.jpeg";

import {
  AiFillYoutube,
  AiFillStar,
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";

const Products = () => {
  let Category = ["Groceries & Food", "Kitchen", "Automotive & Tools"];
  let grocery = [g1, g2, g3, g4, lux];
  let kitchen = [kit1, kit2, kit3, kit4, kit5];
  let auto = [auto1, auto2, auto3, auto4, auto5];
  return (
    <div className="product">
      <div className="productcatnamebtn">
        <h2>Groceries & Food</h2>
        <button>View More</button>
      </div>
      <div className="category">
        <div className="multiproducts">
          {grocery.map((e) => {
            return (
              <div className="oneproduct">
                <div className="oneproductc1">
                  <h6>
                    <AiFillStar id="star" /> 4
                  </h6>
                  <AiFillYoutube id="yt" />
                </div>
                <Image
                  src={e}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="productimg"
                  style={{ objectFit: "contain" }}
                />
                <h1>Lux Fresh splash</h1>

                <div className="oneproductc3">
                  <h4>Select Color :</h4>
                  <div>
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                  </div>
                </div>
                <div className="oneproductc2">
                  <h5>Select Size :</h5>
                  <div className="productc2size">
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                  </div>
                </div>
                <div className="oneproductc4">
                  <div className="productc4div">
                    <h3>
                      Rs <span>7000</span>
                    </h3>
                    <strike>
                      <h4>PKR 80</h4>
                    </strike>
                  </div>
                  <div className="productc4btn">
                    <button id="btn-" disabled>
                      <AiOutlineMinus />
                    </button>
                    <h2>
                      <AiOutlineShoppingCart />
                    </h2>
                    <button id="btnplus">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={ad1}
        width={0}
        height={0}
        sizes="100vw"
        className="mobileads"
        style={{ objectFit: "cover" }}
      />

      <div className="productcatnamebtn">
        <h2>Kitchen</h2>
        <button>View More</button>
      </div>
      <div className="category">
        <div className="multiproducts">
          {kitchen.map((e) => {
            return (
              <div className="oneproduct">
                <div className="oneproductc1">
                  <h6>
                    <AiFillStar id="star" /> 4
                  </h6>
                  <AiFillYoutube id="yt" />
                </div>
                <Image
                  src={e}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="productimg"
                  style={{ objectFit: "contain" }}
                />
                <h1>Lux Fresh splash</h1>
                
                <div className="oneproductc3">
                  <h4>Select Color :</h4>
                  <div>
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                  </div>
                </div>
                <div className="oneproductc2">
                  <h5>Size:</h5>
                  <div className="productc2size">
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                  </div>
                </div>
                <div className="oneproductc4">
                  <div className="productc4div">
                    <h3>
                      PKR <span>20</span>
                    </h3>
                    <strike>
                      <h4>PKR 80</h4>
                    </strike>
                  </div>
                  <div className="productc4btn">
                    <button id="btn-">
                      <AiOutlineMinus />
                    </button>
                    <h2>
                      <AiOutlineShoppingCart />
                    </h2>
                    <button id="btnplus">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={ad2}
        width={0}
        height={0}
        sizes="100vw"
        className="mobileads"
        style={{ objectFit: "cover" }}
      />
      <div className="productcatnamebtn">
        <h2>Automotive & Tools</h2>
        <button>View More</button>
      </div>
      <div className="category">
        <div className="multiproducts">
          {auto.map((e) => {
            return (
              <div className="oneproduct">
                <div className="oneproductc1">
                  <h6>
                    <AiFillStar id="star" /> 4
                  </h6>
                  <AiFillYoutube id="yt" />
                </div>
                <Image
                  src={e}
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="productimg"
                  style={{ objectFit: "contain" }}
                />
                <h1>Lux Fresh splash</h1>
                
                <div className="oneproductc3">
                  <h4>Select Color :</h4>
                  <div>
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                    <Image
                      src={lux2}
                      height={0}
                      width={0}
                      sizes="100vw"
                      id="oneproductc3img"
                    />
                  </div>
                </div>
                <div className="oneproductc2">
                  <h5>Size:</h5>
                  <div className="productc2size">
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                    <h4>70gm</h4>
                  </div>
                </div>
                <div className="oneproductc4">
                  <div className="productc4div">
                    <h3>
                      PKR <span>20</span>
                    </h3>
                    <strike>
                      <h4>PKR 80</h4>
                    </strike>
                  </div>
                  <div className="productc4btn">
                    <button id="btn-">
                      <AiOutlineMinus />
                    </button>
                    <h2>
                      <AiOutlineShoppingCart />
                    </h2>
                    <button id="btnplus">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src={ad3}
        width={0}
        height={0}
        sizes="100vw"
        className="mobileads"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Products;
