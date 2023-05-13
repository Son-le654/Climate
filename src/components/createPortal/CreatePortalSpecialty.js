import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import Popup from "../propup/Popup";
import PopupSpec from "../propup/PopupSpec";
const list = [
  { id: 1, specialty: "Dental", symtom: "toothache, halitosis" },
  { id: 2, specialty: "General suraery", symtom: "cough, sneeze, runny nose, fever, general examination" },
  { id: 3, specialty: "Otorhinolaryngology", symtom: "sneeze, runny nose, difficulty swallowing" },
  { id: 4, specialty: "Internal Medicine", symtom: "chest pain, shortness of breath" },
  { id: 5, specialty: "Internal Gastroenterology", symtom: "stomach-ache, flatulence, undigested, anorexia, heartburn, liver problems" },
  { id: 6, specialty: "Musculoskeletal", symtom: "shoulder pain, arthritis, muscle pain, sprains, dislocation, neck pain" },
  { id: 7, specialty: "Eyes specialist", symtom: "blurred eyes, red eyes" },
  { id: 8, specialty: "Neurology", symtom: "headache, temple pain, anxiety disorders, High Blood Pressure" },
  { id: 9, specialty: "Infectious diseases", symtom: "dengue, COVID" },
  { id: 10, specialty: "Dermatology", symtom: "skin rash, itchy skin" },
  { id: 11, specialty: "Obstetrics and Gynecology", symtom: "pregnant ,irregular menstruation, erectile dysfunction, lower abdomen pain" },
];
const CreatePortalSpecialty = ({ visible, onClose, handleClose, changeSpecList, spec, symtomArr }) => {
  const [specList, setSpecList] = useState([]);
  const [specListSearch, setSpecListSearch] = useState([]);

  useEffect(() => {
    setSpecList([]);
    setSpecListSearch([]);
  }, [symtomArr])

  useEffect(() => {
    const newArr = [];
    if (symtomArr.length > 0) {
      symtomArr.map((item) => {
        list.map((item1) => {
          if (item1.symtom.toLowerCase().includes(item.toLowerCase().trim())) {
            if (newArr.includes(item1.specialty) !== true) {
              newArr.push(item1.specialty);
            setSpecList(prevItems => [...prevItems, item1]);
            setSpecListSearch(prevItems => [...prevItems, item1]);
            }
          }
        })
      });
    } else {
      setSpecList(list)
      setSpecListSearch(list)
    }
  }, [symtomArr])

  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;
    const filteredList = specListSearch.filter((item) =>
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
                spec={spec}
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
