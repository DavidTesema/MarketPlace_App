import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Department from "../../components/department/Department";
import FooterHomePage from "../../components/footer/FooterHomePage";
// import UserLocationPopUp from '../../components/userLocationPopup/UserLocationPopUp';

import axios from "axios";

const HomePage = () => {
  const [allDepartments, setAllDepartments] = useState([]);

  const getDepartments = async () => {
    const { data } = await axios.get("http://localhost:8001/api/department");
    setAllDepartments(data);
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div>
      <div className="homePage">
        <div className="w-full md:w-[80%] px-8 mb-6 md:mt-14 ">
          <h1 className="text-5xl text-center mb-8">
            ברוך הבא לעולם החנויות שלך
          </h1>
          <input
            className="block md:hidden text-right w-full opacity-80 pr-10 border-none md:border-solid md:border-stone-400 rounded-sm"
            type="text"
            placeholder="מה תרצה לחפש היום"
          />
        </div>
        <div className="w-full md:w-[80%]">
          <h1 className="text-3xl text-center my-6">קטגוריות שונות</h1>
          <div className="w-full flex flex-wrap items-center justify-center mb-40">
            {allDepartments.map((department) => (
              <Department department={department} key={department._id} />
            ))}
          </div>
        </div>
      </div>
      <FooterHomePage />
      {/* <UserLocationPopUp /> */}
    </div>
  );
};

export default HomePage;
