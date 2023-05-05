import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Popup from "../propup/Popup";
import PopupPlace from "../propup/PopupPlace";
const list = [
  { id: 1, place: "Da Nang" },
  { id: 2, place: "Hue " },
  { id: 3, place: "Quang Nam" },
  { id: 4, place: "Quang Tri" },
];
const CreatePortalPlace = ({ visible, onClose, handleClose, changePlaceList }) => {
  const [placeList, setPlaceList] = useState(list)

  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;

    const filteredList = list.filter((item) =>
      item.place.toLowerCase().includes(searchInput.toLowerCase())
    );

    setPlaceList(filteredList);
  };

  return (
    <CSSTransition
      in={visible}
      timeout={200}
      unmountOnExit
      classNames="my-node"
    >
      {(state) =>
        createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-5  ${visible ? "" : "opacity-0 invisible"
              }`}
          >
            <div
              className="absolute inset-0 bg-black1 bg-opacity-40 overlay"
              onClick={handleClose}
            ></div>
            <div className="bg-white z-50 p-[2rem_3rem] shadow-md content absolute rounded-lg max-w-[70rem] w-full">
              <PopupPlace
                handleSearchInputChange={handleSearchInputChange}
                changePlaceList={changePlaceList}
                listData={placeList}
                handleClose={onClose}
                header="Place list"
                describe="Select a Place"
              ></PopupPlace>
            </div>
          </div>,
          document.body
        )
      }
    </CSSTransition>
  );
};

export default CreatePortalPlace;
