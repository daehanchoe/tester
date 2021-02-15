// NOTE: modal for chemistry
import React from "react";
import { Modal } from "react-bootstrap";
import chemistry from "../../data/chemistry.json";
import "../../style/css/modal.css";
export default function ModalComponent({ show, onHide, character }) {
  const charName = chemistry[character].char;
  const description = chemistry[character].description;
  const charDesc = chemistry[character].char_desc;
  const best = chemistry[character].best;
  const worst = chemistry[character].worst;
  const bDesc = chemistry[character].b_desc;
  const wDesc = chemistry[character].w_desc;
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          나의 여행 캐릭터는?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="char">
          <div className="char-img">
            <img
              src={require("../../assets/result-faver/main/" +
                character +
                ".svg")}
              alt="alt"
            />
          </div>
          <div className="char-name">
            <p>{charDesc}</p>
            <h2>{charName}</h2>
          </div>
          <div className="text">
            {description.split("\n").map((line, _) => (
              <span key={_}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className="best-char">
          <h3>환상의 케미</h3>
          <div className="char-img">
            <img
              src={require("../../assets/result-faver/minor/" + best + ".svg")}
              alt="alt"
            />
          </div>
          <div className="text">
            {bDesc.split("\n").map((line, _) => (
              <span key={_}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
        <div className="worst-char">
          <h3>환장의 케미</h3>
          <div className="char-img">
            <img
              src={require("../../assets/result-faver/minor/" + worst + ".svg")}
              alt="alt"
            />
          </div>
          <div className="text">
            {wDesc.split("\n").map((line, _) => (
              <span key={_}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
