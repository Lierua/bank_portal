"use client";

import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";
import { useState } from "react";
import RequestStatusFilter from "./requestOverviewComponents/RequestStatusFilter";
import RequestList from "./requestOverviewComponents/RequestList";

const RequestContent = () => {
  const [requestPara, setRequestPara] = useState("Alle");
  const [overview, setOverview] = useState("Ansøgninger");

  return (
    <div className="body-banner rounded-tl-lg overflow-hidden h-[90vh] lk-box-shadow">
      <div className="bg-(--prime) banner-rows lk-box-shadow z-20">
        <FaRegFileAlt
          onClick={() => setOverview("Ansøgninger")}
          className="text-(--white) text-5xl row-2 mx-auto"
        />
        <FaRegFileArchive
          onClick={() => setOverview("Arkiv")}
          className="text-(--white) text-5xl row-3 mx-auto"
        />
      </div>
      <div className="bg-(--light-prime) banner-rows lk-inner-shadow">
        <div className="row-2 h-full items-center grid group relative">
          <p
            onClick={() => setOverview("Ansøgninger")}
            className="pl-[10px] my-auto text-(--white) font-semibold! row-1 col-1  z-11 cursor-pointer text-(--white)!"
          >
            Ansøgninger
          </p>

          <div
            className={`transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] mb-[-2px] origin-left
              ${overview === "Ansøgninger" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
              w-[150px] h-[40px] z-10 bg-(--contrast) row-1  col-1`}
          ></div>
        </div>
        <div className="row-3 h-full items-center grid group relative">
          <p
            onClick={() => setOverview("Arkiv")}
            className="pl-[10px] my-auto text-(--white) font-semibold row-1 col-1 z-11 cursor-pointer text-(--white)!"
          >
            Arkiv
          </p>
          <div
            className={`transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] mb-[-2px] origin-left
              ${overview === "Arkiv" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
              w-[150px] h-[40px] z-10 bg-(--contrast) row-1 col-1`}
          ></div>
        </div>
      </div>
      <div className="bg-white grid grid-rows-[55px_1fr]">
        <RequestStatusFilter
          requestPara={requestPara}
          setRequestPara={setRequestPara}
        />
        <RequestList />
      </div>
    </div>
  );
};

export default RequestContent;
