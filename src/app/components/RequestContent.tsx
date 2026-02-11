"use client";

import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";
import { useState } from "react";

const RequestContent = () => {
  const [requestPara, setRequestPara] = useState("Alle");

  return (
    <div className="body-banner rounded-l-lg overflow-hidden h-[87vh] lk-box-shadow">
      <div className="bg-(--prime) banner-rows lk-box-shadow">
        <FaRegFileAlt className="text-(--white) text-5xl row-2 mx-auto" />
        <FaRegFileArchive className="text-(--white) text-5xl row-3 mx-auto" />
      </div>
      <div className="bg-(--light-prime) banner-rows lk-inner-shadow">
        <div className="row-2 h-full items-center grid">
          <p className="pl-[10px] my-auto text-(--white) font-semibold! row-1 col-1  z-11">
            Ansøgninger
          </p>
          <div className="w-[150px] h-[40px] z-10 bg-(--contrast) row-1  col-1"></div>
        </div>
        <div className="row-3 h-full items-center grid">
          <p className="pl-[10px] my-auto text-(--white) font-semibold!">
            Arkiv
          </p>
        </div>
      </div>
      <div className="bg-white grid grid-rows-[55px_1fr]">
        <div className="flex gap-10 items-end pl-10">
          <h2
            onClick={() => setRequestPara("Alle")}
            className={`transistion-all duration-200 ease-in
                border-b-3 ${requestPara == "Alle" ? "border-(--black)" : "border-(--black)/0"} ${requestPara == "Alle" ? "text-(--black)/100" : "text-(--black)/50"}`}
          >
            Alle 101
          </h2>
          <h2
            onClick={() => setRequestPara("Pending")}
            className={`transistion-all duration-200 ease-in
                border-b-3 ${requestPara == "Pending" ? "border-(--black)" : "border-(--black)/0"} ${requestPara == "Pending" ? "text-(--black)/100" : "text-(--black)/50"}`}
          >
            Pending 101
          </h2>
          <h2
            onClick={() => setRequestPara("Godkendt")}
            className={`transistion-all duration-200 ease-in
                border-b-3 ${requestPara == "Godkendt" ? "border-(--black)" : "border-(--black)/0"} ${requestPara == "Godkendt" ? "text-(--black)/100" : "text-(--black)/50"}`}
          >
            Godkendt 101
          </h2>
          <h2
            onClick={() => setRequestPara("Afslået")}
            className={`transistion-all duration-200 ease-in
                border-b-3 ${requestPara == "Afslået" ? "border-(--black)" : "border-(--black)/0"} ${requestPara == "Afslået" ? "text-(--black)/100" : "text-(--black)/50"}`}
          >
            Afslået 101
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RequestContent;
