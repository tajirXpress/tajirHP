import "animate.css";

const SecondBar = () => {
  let sliding = () => {
    let firstbox = document.querySelector(".firstbox");
    let secondbox = document.querySelector(".secondbox");
    console.log("before");
    if (
      firstbox.className.includes("active") &&
      !secondbox.className.includes("active")
    ) {
      firstbox.classList.remove("active");
      secondbox.classList.add("active");
      firstbox.setAttribute("style", "display:none");
      secondbox.setAttribute("style", "display:flex");
    } else if (
      secondbox.className.includes("active") &&
      !firstbox.className.includes("active")
    ) {
      secondbox.classList.remove("active");
      firstbox.classList.add("active");
      secondbox.setAttribute("style", "display:none");
      firstbox.setAttribute("style", "display:flex");
    }
  };

  return (
    <div className="secondbar">
      <div className="the2ndbardiv">
        <div className="active firstbox animate__animated animate__backInDown">
          <p
            id="subbox"
            className="roundleft"
            style={{ background: "#e73e00", color: "white" }}
          >
            Subscription Boxes
          </p>
          <p id="subbox2">Brands</p>
          <p id="subbox2" className="roundright">
            Comming Soon
          </p>
        </div>
        <div className="secondbox animate__animated animate__backInDown">
          <p id="subbox2" className="commingleft">
            Comming Soon
          </p>
          <p id="subbox2" className="roundright">
            Comming Soon
          </p>
        </div>
      </div>
      <button onClick={sliding}> {">"}</button>
    </div>
  );
};

export default SecondBar;
