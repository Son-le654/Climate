import axios from "axios";
import React, { useState, useEffect } from "react";
function createObjectList() {
  return [
    { name: "Object 1", date: "2023/06/19 23:26:19" },
    { name: "Object 2", date: "2023/06/21 18:30:12" },
    { name: "Object 3", date: "2023/06/21 18:36:33" },
    { name: "Object 4", date: "2023/06/21 18:37:35" },
  ];
}

function SampleDateSort() {
  const [sortedObjects, setSortedObjects] = useState([]);
  const [listOrigin, setListOrigin] = useState([]);
  useEffect(() => {
    const income = async () => {
      try {
        const response = await axios.get("http://localhost:8080/appointment/listIncome");
        setListOrigin(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    income();
  }, []);

  useEffect(() => {
    const sorted = listOrigin.sort(
      (a, b) => new Date(b.registerTime) - new Date(a.registerTime)
    );
    setSortedObjects(sorted);
  }, []);

  return (
    <ul>
      {sortedObjects.map((object) => (
        <li key={object.name}>
          {object.name} - {object.date}
        </li>
      ))}
    </ul>
  );
}

export default SampleDateSort;
