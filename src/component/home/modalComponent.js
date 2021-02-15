// NOTE: modal for contributers
import React from "react";
import { Modal } from "react-bootstrap";
import crews from "../../data/crews";
import "../../style/css/modal.css";

export default function ModalComponent({ show, onHide }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          만든 사람들🙋‍♀️🙋
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="our-char">
          <div className="char-img">
            <img
              src={require("../../assets/images/tripsoda_1.png")}
              alt="alt"
            />
          </div>
          <div className="char-name">
            <h2>TRIPSODA</h2>
          </div>
          <div className="text">
            <span>
              자유여행자들을 위한 투명하게 다 보여주는 투어 예약 플랫폼! 누가
              함께 하는지, 함께하면 얼마나 더 저렴해지는지까지 다 볼 수 있어요.
              코로나 이후의 여행을 기대하고있는 세상 모든 여행자들을 위해 열심히
              런칭을 준비하고 있으니 조금만 기다려주세요!
            </span>
          </div>
        </div>
        {crews.map((crew) => (
          <div className="our-char">
            <div className="char-img">
              <img
                src={require("../../assets/our_pics/" + crew.image)}
                alt="alt"
              />
            </div>
            <div className="char-name">
              <p>{crew.position}</p>
              <h2>{crew.name}</h2>
            </div>
            <div className="text">
              <span>
                {crew.description.split("\n").map((line, _) => (
                  <span key={_}>
                    {line}
                    <br />
                  </span>
                ))}
              </span>
            </div>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
