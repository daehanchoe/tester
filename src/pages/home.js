import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeStyle from "../style/home";
import title from "../assets/images/home_title2x.png";
import ModalComponent from "../component/home/modalComponent";
import Lottie from "react-lottie";
import data_fin from "../data/data_fin.json";

export default function Home() {
  const [show, setShow] = useState(false);

  const lottieOptions = {
    animationData: data_fin,
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: "home_graph", // svg에 적용
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <HomeStyle>
        <div className="home_graph">
          <Lottie options={lottieOptions} isClickToPauseDisabled={true} />
        </div>
        <div className="home_title">
          <img src={title} alt="alt" />
        </div>
        <div class="btn_group">
          <Link to="/which_destination" className="btn_div">
            <button>테스트 시작</button>
          </Link>
          <div className="btn_div modal-btn">
            <button onClick={() => setShow(true)}>
              <p>트립소다 여행 크루🥤</p>
            </button>
          </div>
        </div>
      </HomeStyle>
      <ModalComponent show={show} onHide={() => setShow(false)} />
    </>
  );
}
