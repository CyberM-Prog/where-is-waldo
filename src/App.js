import { useEffect, useState } from "react";
import wallpaper from "./images/wallpaper.jpg";

function App() {
    const [isTargetBoxVisible, setIsTargetBoxVisible] = useState(false);

    const [height, setHeight] = useState();

    const [width, setWidth] = useState();

    useEffect(() => {
        const target = document.querySelector(".target");

        target.style.left = `calc(${width}px - 5vh)`;
        target.style.top = `calc(${height}px - 5vh)`;

        isTargetBoxVisible
            ? (target.style.visibility = "visible")
            : (target.style.visibility = "hidden");
    });

    function imgClick(e) {
        setHeight(e.pageY);
        setWidth(e.pageX);

        isTargetBoxVisible
            ? setIsTargetBoxVisible(false)
            : setIsTargetBoxVisible(true);

        console.log(e);
    }

    return (
        <div className="App">
            <div className="topsection">
                <h1>Where's Waldo?</h1>
            </div>
            <img src={wallpaper} alt="" onClick={imgClick}></img>
            <div className="target">
                <div className="targetbox"></div>
                <div className="dropdown">
                    <p class="dropdownitem">Waldo</p>
                    <div className="separator"></div>
                    <p class="dropdownitem">Wenda</p>
                    <div className="separator"></div>
                    <p class="dropdownitem">Odlaw</p>
                    <div className="separator"></div>
                    <p class="dropdownitem">Wizard</p>
                </div>
            </div>
        </div>
    );
}

export default App;
