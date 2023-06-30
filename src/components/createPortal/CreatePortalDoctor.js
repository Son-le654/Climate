import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import avatarDoctor from "../../Images/avatar.png";
import PopupDoctor from "../propup/PopupDoctor";
import axios from "axios";
import { isEqual } from "lodash";
import { publicPort } from "../url/link";

// const listDoctor = [
//   { id: 1, doctor: "Nguyen Hung", avatar: avatarDoctor, spec: "General suraery, Dematology" },
//   { id: 2, doctor: "NC Phong ", avatar: avatarDoctor, spec: "General suraery, Dermatology" },
//   { id: 3, doctor: "The Son", avatar: avatarDoctor, spec: "Otorhinolaryngology, Internal Medicine,Musculoskeletal" },
//   { id: 4, doctor: "Thuy", avatar: avatarDoctor, spec: "Eyes specialist" },
//   { id: 5, doctor: "Dat Ho", avatar: avatarDoctor, spec: "Neurology" }
// ];
const CreatePortalDoctor = ({
  visible,
  onClose,
  handleClose,
  changeDoctorList,
  spec,
  doctor,
  place,
}) => {
  const [doctorList, setDoctorList] = useState([]);
  const [listOrigin, setListOrigin] = useState([]);
  const [doctorListSearch, setDoctorListSearch] = useState();

  // if (spec !== "") {
  //   console.log(spec);
  //   const filteredList = listDoctor.filter((item) =>
  //     item.spec.toLowerCase().includes(spec.toLowerCase().trim())
  //   );
  //   console.log(filteredList);

  useEffect(() => {
    const doctos = async () => {
      try {
        const response = await axios.get(
          publicPort + `api/list_lo/${place.id}`
        );
        setDoctorList(response.data);
        setListOrigin(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    doctos();
  }, [place]);

  useEffect(() => {
    console.log(spec);
    setDoctorList([]);
    setDoctorListSearch([]);
  }, [spec]);

  useEffect(() => {
    setDoctorList(listOrigin);
    setDoctorListSearch(listOrigin);
    if (spec !== undefined) {
      // console.log(spec);
      // console.log(doctorList);
      const filteredItems = doctorList.filter((item) => {
        return (
          item.role.id === 3 &&
          null !== item.specialty &&
          spec.id == item.specialty.id
        );
      });
      console.log(filteredItems);
      setDoctorList(filteredItems);
      setDoctorListSearch(filteredItems);
    } else {
      setDoctorList(listOrigin);
      setDoctorListSearch(listOrigin);
    }
  }, [spec]);

  const handleSearchInputChange = (event) => {
    let searchInput = event.target.value;
    if (searchInput === "") {
      setDoctorList(listOrigin);
    } else {
      const filteredList = doctorListSearch.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );

      setDoctorList(filteredList);
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
