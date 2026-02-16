"use client";

import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import RequestStatusFilter from "./requestOverviewComponents/RequestStatusFilter";
import RequestList from "./requestOverviewComponents/RequestList";
import IndividualOverview from "./requestOverviewComponents/IndividualOverview";

const RequestContent = ({ search }: { search: string }) => {
  const [requestPara, setRequestPara] = useState("Alle");
  const [overview, setOverview] = useState("Ansøgninger");

  return (
    <div className="body-banner rounded-tl-lg overflow-hidden flex-1 h-[calc(100dvh-102px)] lk-box-shadow">
      <div className="bg-(--prime) banner-rows lk-box-shadow z-20">
        <FaRegFileAlt
          onClick={() => {
            (setOverview(`Ansøgninger`), console.log(overview));
          }}
          className="text-(--white) text-4xl row-2 mx-auto mt-2"
        />
        <BsPerson
          onClick={() => setOverview("Jane Doe")}
          className="text-(--white) text-4xl row-3 mx-auto mt-2"
        />
        <FaRegFileArchive
          onClick={() => setOverview("Arkiv")}
          className="text-(--white) text-4xl row-4 mx-auto mt-2"
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
            onClick={() => setOverview("Jane Doe")}
            className="pl-[10px] my-auto text-(--white) font-semibold row-1 col-1 z-11 cursor-pointer text-(--white)!"
          >
            Jane Doe
          </p>
          <div
            className={`transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] mb-[-2px] origin-left
              ${overview === "Jane Doe" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
              w-[150px] h-[40px] z-10 bg-(--contrast) row-1 col-1`}
          ></div>
        </div>
        <div className="row-4 h-full items-center grid group relative">
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
      {overview == "Ansøgninger" && (
        <div className="bg-white grid grid-rows-[55px_1fr]">
          <RequestStatusFilter
            requestPara={requestPara}
            setRequestPara={setRequestPara}
          />
          <RequestList
            search={search}
            overview={overview}
            setOverview={setOverview}
          />
        </div>
      )}
      {/* 
      {overview == "Jane Doe" && <IndividualOverview />} */}
    </div>
  );
};

export default RequestContent;
