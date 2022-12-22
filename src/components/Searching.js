import "./styles/searching.scss";
import Modal from "react-modal";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../media/search.png";

function Searching({ isOpening, setIsOpening }) {
  const [query, setQuery] = useState("");

  const hideModal = () => {
    setIsOpening(false);
  };
  const handleQuerySearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Modal
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.79)", zIndex: 999 },
      }}
      className="modal-mobile"
      ariaHideApp={false}
      isOpen={isOpening}
    >
      <OutsideClickHandler onOutsideClick={hideModal}>
        <div className="container-input-mobile">
          <Link to={`/search/${query}`} onClick={hideModal}>
            <img className="search-icon-input" src={searchIcon} alt="" />
          </Link>
          <input
            autoFocus
            className="search-mobile"
            type="text"
            placeholder="Busca Productos"
            onChange={handleQuerySearch}
          />
        </div>
      </OutsideClickHandler>
    </Modal>
  );
}

export default Searching;
