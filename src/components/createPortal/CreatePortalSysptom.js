import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Popup from "../propup/Popup";
import PopupSymptom from "../propup/PopupSymptom";
import axios from "axios";
// const list = [
//   { id: 1, symtom: "Toothache " },
//   { id: 2, symtom: "Halitosis " },
//   { id: 3, symtom: "Cough " },
//   { id: 4, symtom: "Sneeze " },
//   { id: 5, symtom: "Runny Nose " },
//   { id: 6, symtom: "Fever " },
//   { id: 7, symtom: "Difficulty Swallowing " },
//   { id: 8, symtom: "Chest Pain " },
//   { id: 9, symtom: "Shortness Of Breath " },
//   { id: 10, symtom: "Stomach-ache " },
//   { id: 11, symtom: "Flatulence " },
//   { id: 12, symtom: "Undigested " },
//   { id: 13, symtom: "Anorexia " },
//   { id: 14, symtom: "Heartburn " },
//   { id: 15, symtom: "Liver Problems " },
//   { id: 16, symtom: "Shoulder Pain " },
//   { id: 17, symtom: "Arthritis " },
//   { id: 18, symtom: "Muscle Pain " },
//   { id: 19, symtom: "Sprains " },
//   { id: 20, symtom: "Dislocation " },
//   { id: 21, symtom: "Neck Pain " },
//   { id: 22, symtom: "Blurred Eyes " },
//   { id: 23, symtom: "Red Eyes " },
//   { id: 24, symtom: "Headache " },
//   { id: 25, symtom: "Temple Pain " },
//   { id: 26, symtom: "Anxiety Disorders " },
//   { id: 27, symtom: "High Blood Pressure " },
//   { id: 28, symtom: "Dengue " },
//   { id: 29, symtom: "COVID " },
//   { id: 30, symtom: "Skin Rash " },
//   { id: 31, symtom: "Itchy Skin " },
//   { id: 32, symtom: "Pregnant " },
//   { id: 33, symtom: "Irregular Menstruation " },
//   { id: 34, symtom: "Erectile Dysfunction " },
//   { id: 35, symtom: "Lower Abdomen Pain " },
//   { id: 36, symtom: "General Examination " },
// ];
const CreatePortalSysptom = ({
  visible,
  onClose,
  handleClose,
  changeSymtomList,
  numberOfSym,
  nextSpec,
  symtomArr,
}) => {
  const [symptomList, setSymtomList] = useState([]);
  const [listOrigin, setListOrigin] = useState([]);

  useEffect(() => {
    const symptoms = async () => {
      try {
        const response = await axios.get("http://103.68.85.120/symptom/list");
        setSymtomList(response.data);
        setListOrigin(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    symptoms();

    console.log(symptomList);
  }, []);

  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;
    if (searchInput === "") {
      setSymtomList(listOrigin);
    } else {
      const filteredList = symptomList.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSymtomList(filteredList);
    }
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
            className={`fixed inset-0 z-50 flex items-center justify-center p-5  ${
              visible ? "" : "opacity-0 invisible"
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
