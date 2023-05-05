import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Popup from "../propup/Popup";
import PopupSpec from "../propup/PopupSpec";
const list = [
  { id: 1, specialty: "Dental" },
  { id: 2, specialty: "General suraery " },
  { id: 3, specialty: "Dematology" },
  { id: 4, specialty: "Endocrinology" },
  { id: 5, specialty: "Cardiology" },
];
const CreatePortalSpecialty = ({ visible, onClose, handleClose, changeSpecList }) => {
  const [specList, setSpecList] = useState(list)
  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;

    const filteredList = list.filter((item) =>
      item.specialty.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSpecList(filteredList);
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
              <PopupSpec
                handleSearchInputChange={handleSearchInputChange}
                changeSpecList={changeSpecList}
                listData={specList}
                handleClose={onClose}
                header="Specialty list"
                describe="Select a Specialty"
              ></PopupSpec>
            </div>
          </div>,
          document.body
        )
      }
    </CSSTransition>
  );
};

export default CreatePortalSpecialty;
