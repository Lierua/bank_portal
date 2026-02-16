"use client";

import { useState, useRef, useEffect } from "react";
import type { Request } from "./RequestList";

type RequestItemProps = {
  request: Request;
  styles: {
    text: string;
    dot: string;
  };
  overview: string;
  setOverview: React.Dispatch<React.SetStateAction<string>>;
};

const RequestItem = ({
  request,
  styles,
  overview,
  setOverview,
}: RequestItemProps) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // Measure dynamic height for smooth animation
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="col-span-full border-b border-gray-200">
      {/* Main Row */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in
        grid grid-cols-[260px_180px_180px_1fr_200px_70px]
        pl-10 h-[40px] items-center"
      >
        <p className="font-bold">
          {request.name.length > 25
            ? request.name.slice(0, 25) + "..."
            : request.name}
        </p>

        <p>{request.amount.toLocaleString("da-DK")} kr.</p>
        <p>{request.forWhat}</p>
        <p>{request.location}</p>

        <div className="flex items-center gap-2">
          <span className={`h-[8px] w-[8px] rounded-full ${styles.dot}`} />
          <p className={`${styles.text} font-semibold!`}>{request.status}</p>
        </div>

        <p>{request.date}</p>
      </div>

      {/* Animated Dropdown Wrapper */}
      <div
        style={{
          maxHeight: open ? height : 0,
        }}
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.34,1.56,.64,1)]"
      >
        {/* Actual Content */}
        <div
          ref={contentRef}
          className={`bg-gray-100 pl-10 py-4 grid grid-cols-[1fr_1fr_1fr_1fr_120px] gap-2 text-sm
          transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <p className="font-semibold">Indkomst</p>
            <p>{request.indkomst.toLocaleString("da-DK")} kr.</p>
          </div>

          <div>
            <p className="font-semibold">Rådighedsbeløb</p>
            <p>{request.raadighedsBeloeb.toLocaleString("da-DK")} kr.</p>
          </div>

          <div>
            <p className="font-semibold">Gældsfaktor</p>
            <p>{request.gaeldsfaktor}</p>
          </div>

          <div>
            <p className="font-semibold">Opsparing</p>
            <p>{request.opsparing.toLocaleString("da-DK")} kr.</p>
          </div>

          <div className="self-end pb-3">
            <p
              onClick={() => {
                (setOverview(`${request.name}`), console.log(overview));
              }}
              className="hover:text-(--contrast)! transition-all duration-200 ease-in cursor-pointer"
            >
              Læs mere &gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
