import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import avatarDoctor from "../../Images/avatar.png";
import PopupDoctor from "../propup/PopupDoctor";

const listDoctor = [
  { id: 1, doctor: "Nguyen Hung", avatar: avatarDoctor, spec: "General suraery, Dematology" },
  { id: 2, doctor: "NC Phong ", avatar: avatarDoctor, spec: "General suraery, Dermatology" },
  { id: 3, doctor: "The Son", avatar: avatarDoctor, spec: "Otorhinolaryngology, Internal Medicine,Musculoskeletal" },
  { id: 4, doctor: "Thuy", avatar: avatarDoctor, spec: "Eyes specialist" },
  { id: 5, doctor: "Dat Ho", avatar: avatarDoctor, spec: "Neurology" }
];
const CreatePortalDoctor = ({ visible, onClose, handleClose, changeDoctorList, spec, doctor }) => {
  const [doctorList, setDoctorList] = useState(listDoctor)
  const [doctorListSearch, setDoctorListSearch] = useState()

  // if (spec !== "") {
  //   console.log(spec);
  //   const filteredList = listDoctor.filter((item) =>
  //     item.spec.toLowerCase().includes(spec.toLowerCase().trim())
  //   );
  //   console.log(filteredList);

  // }
  useEffect(() => {
    if (spec !== "") {
      console.log(spec);
      const filteredList = listDoctor.filter((item) =>
        item.spec.toLowerCase().includes(spec.toLowerCase().trim())
      );
      console.log(filteredList);
      setDoctorList(filteredList)
      setDoctorListSearch(filteredList)
    } else {
      setDoctorList(listDoctor)
      setDoctorListSearch(listDoctor)
    }
  }, [spec])


  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;
    const filteredList = doctorListSearch.filter((item) =>
      item.doctor.toLowerCase().includes(searchInput.toLowerCase())
    );

    setDoctorList(filteredList);
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
              <PopupDoctor
                doctor={doctor}
                handleSearchInputChange={handleSearchInputChange}
                changeDoctorList={changeDoctorList}
                listData={doctorList}
                handleClose={onClose}
                header="Doctor list"
                describe="Select a Doctor"
              ></PopupDoctor>
            </div>
          </div>,
          document.body
        )
      }
    </CSSTransition>
  );
};

export default CreatePortalDoctor;
