import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Popup from "../propup/Popup";
import PopupSymptom from "../propup/PopupSymptom";
const list = [
  { id: 1, symtom: "Cough" },
  { id: 2, symtom: "Headache " },
  { id: 3, symtom: "Sneeze" },
  { id: 4, symtom: "Stomachache" },
  { id: 5, symtom: "Dizziness" },
  { id: 5, symtom: "Chest Pain" },
  { id: 5, symtom: "Difficulty Breathing" },
];
const CreatePortalSysptom = ({ visible, onClose, handleClose, changeSymtomList, numberOfSym, nextSpec, symtomArr }) => {
  const [symptomList, setSymtomList] = useState(list)



  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;

    const filteredList = list.filter((item) =>
      item.symtom.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSymtomList(filteredList);
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
              <PopupSymptom
              symtomArr={symtomArr}
                nextSpec={nextSpec}
                numberOfSym={numberOfSym}
                handleSearchInputChange={handleSearchInputChange}
                changeSymtomList={changeSymtomList}
                listData={symptomList}
                handleClose={onClose}
                header="Symptom list"
                describe="Choose a symptom"
              ></PopupSymptom>
            </div>
          </div>,
          document.body
        )
      }
    </CSSTransition>
  );
};

export default CreatePortalSysptom;
