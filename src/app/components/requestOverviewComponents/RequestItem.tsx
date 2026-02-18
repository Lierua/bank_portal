"use client";

import { useState, useRef, useEffect } from "react";
import type { Request } from "../RequestContent";

type Props = {
  request: Request;
  styles: {
    text: string;
    dot: string;
  };
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const RequestItem = ({ request, styles, setSelectedId }: Props) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className="border-b border-gray-200">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer hover:bg-gray-200 transition-all duration-200 ease-in
        grid grid-cols-[260px_180px_180px_1fr_200px_70px]
        pl-10 h-[40px] items-center"
      >
        <p className="font-bold">{request.name}</p>
        <p>{request.amount.toLocaleString("da-DK")} kr.</p>
        <p>{request.forWhat}</p>
        <p>{request.location}</p>

        <div className="flex items-center gap-2">
          <span className={`h-[8px] w-[8px] rounded-full mt-1 ${styles.dot}`} />
          <p className={`${styles.text} font-semibold!`}>{request.status}</p>
        </div>

        <p>{request.date}</p>
      </div>

      <div
        style={{ maxHeight: open ? height : 0 }}
        className="overflow-hidden transition-all duration-400 ease-[cubic-bezier(.34,1.56,.64,1)]"
      >
        <div
          ref={contentRef}
          className={`bg-gray-100 pl-10 py-4 grid grid-cols-[1fr_1fr_1fr_1fr_120px] gap-2 transition-opacity duration-300 ${
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

          <div className="self-end row-2 mt-2">
            <button
              onClick={() => setSelectedId(request.id)}
              className="hover:text-(--contrast)! text-orange-400 transition-all duration-200 ease-in cursor-pointer mb-2 text-[15px]!"
            >
              Læs mere &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestItem;
