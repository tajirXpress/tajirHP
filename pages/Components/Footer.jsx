import Image from "next/image";
import logo from "../../public/Logo.png";
import gmail from "../../public/gmail.svg";
import facebook from "../../public/facebook.svg";
import snapchat from "../../public/snapchat.svg";
import youtube from "../../public/youtube.svg";
import linkedin from "../../public/linkedin.svg";
import twitter from "../../public/twitter.svg";
import instagram from "../../public/instagram.svg";
import ticktok from "../../public/ticktok.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="abovefooter">
        <Image
          src={logo}
          width={0}
          height={0}
          className="footerimg"
          sizes="100vw"
        />
        <div className="footlinksall">
          <div className="footlinkdiv">
            <h2>Navigate</h2>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Newsroom</h3>
          </div>
          <div className="footlinkdiv">
            <h2>Help</h2>
            <h3>Help Center</h3>
            <h3>Submit an idea</h3>
            <h3>Suggest a product</h3>
          </div>
          <div className="footlinkdiv">
            <h2>Collaborate</h2>
            <h3>Sell on tajirXpress</h3>
            <h3>Ads on tajirXpress</h3>
            <h3>Became a rider</h3>
          </div>
          <div className="footlinkdiv">
            <h2>Company</h2>
            <h3>Careers</h3>
            <h3>Terms & Conditions</h3>
            <h3>Privacy & Policy</h3>
          </div>
          <div className="icons">
            <h2>Follow us on</h2>
            <div>
              <Image src={gmail} width={18} height={18} />
              <Image src={facebook} width={18} height={18} />
              <Image src={instagram} width={18} height={18} />
              <Image src={youtube} width={18} height={18} />
              <Image src={linkedin} width={18} height={18} />
              <Image src={snapchat} width={18} height={18} />
              <Image src={twitter} width={18} height={18} />
              <Image src={ticktok} width={18} height={18} />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
