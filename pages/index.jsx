import Header from "./Components/Header";
import SecondBar from "./Components/SecondBar";
import ImageCarousel from "./Components/ImageCarousel";
import MarketSearch from "./Components/MarketSearch";
import ShopByDept from "./Components/ShopByDept";
import SpecialDeal from "./Components/SpecialDeals";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Sideads from "./Components/Sideads";
import SearchBar from "./Components/SearchBar";
import LowerFooter from "./Components/lowerfooter";
import Categorybox from "./Components/Categorybox";
import DailyDeals from "./Components/DailyDeals";

const HomePage = () => {
  return (
    <div>
      <div className="maindiv">
        <Header />
        <div className="twobarcolor">
          <div className="twobardiv">
            <SearchBar />
            <SecondBar />
          </div>
        </div>
        <div className="categoryboxcenter">
          <Categorybox />
        </div>
        <div className="thecenterpart">
          <div className="abovepart">
            <ShopByDept />
            <div>
              <div className="carshopdealdiv">
                <div className="carsoselmobilediv">
                  <ImageCarousel />
                </div>
                {/* 
                <FeatureShop /> */}
                <SpecialDeal />
              </div>
            </div>
            <MarketSearch />
            <DailyDeals />
          </div>
        </div>
        <div className="gridentcenter"></div>
        <div className="someothercoloredarea">
          <div className="coloredarea">
            <Products />
            <Sideads />
          </div>
        </div>
        <div className="footerback">
          <Footer />
        </div>
        <div className="lowerfooterdiv">
          <LowerFooter />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
