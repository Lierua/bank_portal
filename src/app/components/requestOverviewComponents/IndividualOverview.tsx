"use client";

import SetStatus from "../individualComponents/SetStatus";
import type { Request } from "../RequestContent";

type Props = {
  request: Request;
  setRequests: React.Dispatch<React.SetStateAction<Request[]>>;
  onBack: () => void;
};

export default function IndividualOverview({
  request,
  setRequests,
  onBack,
}: Props) {
  const BoxStyle = "bg-(--white) p-10 rounded-xl";
  return (
    <div className="min-h-screen relative text-(--black) overflow-hidden bg-white">
      <div className="relative z-10 p-12 px-20">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-10 text-sm tracking-wide hover:text-(--contrast) transition"
        >
          ← Tilbage
        </button>

        {/* HEADER */}
        <div className="mb-16 flex items-center justify-between">
          <div>
            <h1 className="text-5xl! font-bold tracking-tight">
              {request.name}
            </h1>
            <p className="mt-2 text-(--white)/70">{request.email}</p>
          </div>

          {/* Floating Score Badge */}
          <div className="relative group">
            <div className="absolute inset-0  transition" />
            <div className="relative px-8 py-6 bg-(--white) text-(--black) rounded-[5px]">
              <p className="text-sm font-semibold uppercase tracking-widest text-(--contrast) mb-4">
                Credit Score
              </p>
              <p className="text-4xl font-bold text-center text-3xl!">
                {request.score}
              </p>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8">
          {/* Glass Card Component */}
          <div className={`${BoxStyle}`}>
            <h2 className="text-3xl! font-bold mb-8 text-(--contrast)">
              Låne Detaljer
            </h2>

            <div className="grid gap-8 max-w-[500px] pl-4">
              <div className="[&>*>*]:text-3xl! [&>*]:gap-[80px] [&>*]:grid [&>*]:grid-cols-2">
                <Info
                  label="Lånebeløb:"
                  value={`${request.amount.toLocaleString("da-DK")} kr.`}
                />
              </div>
              <div className=" [&>*]:grid [&>*]:gap-[80px] [&>*]:grid-cols-2">
                <Info label="Lånetype:" value={request.forWhat} />
              </div>
              <div className=" [&>*]:grid [&>*]:gap-[80px] [&>*]:grid-cols-2">
                <Info label="Adresse:" value={request.location} />
              </div>
              <div className=" [&>*]:grid [&>*]:gap-[80px] [&>*]:grid-cols-2">
                <Info
                  label="Postnr / Region:"
                  value={`${request.postalCode} – ${request.region}`}
                />
              </div>
            </div>
          </div>

          <div className={`${BoxStyle}`}>
            <h2 className="text-3xl! font-bold mb-8 text-(--contrast)">
              Beskæftigelse
            </h2>

            <div className="grid grid-cols-2 gap-8 pl-4">
              <Info label="Stilling" value={request.jobTitle} />
              <Info label="Ansættelse" value={request.jobStatus} />
              <Info label="Uddannelse" value={request.educationLevel} />
              <Info label="Boligsituation" value={request.housingSituation} />
            </div>
          </div>

          <div className={`${BoxStyle}`}>
            <h2 className="text-3xl! font-bold mb-8 text-(--contrast)">
              Økonomi
            </h2>

            <div className="grid grid-cols-2 gap-8 pl-4">
              <Info
                label="Indkomst"
                value={`${request.indkomst.toLocaleString("da-DK")} kr.`}
              />
              <Info
                label="Rådighedsbeløb"
                value={`${request.raadighedsBeloeb.toLocaleString("da-DK")} kr.`}
              />
              <Info label="Gældsfaktor" value={request.gaeldsfaktor} />
              <Info
                label="Formue"
                value={`${request.opsparing.toLocaleString("da-DK")} kr.`}
              />
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="mt-24">
          <SetStatus request={request} setRequests={setRequests} />
        </div>
      </div>
    </div>
  );
}

/* Mini Info Component */
function Info({ label, value }: { label: string; value: any }) {
  return (
    <div className="group">
      <p className="text-sm uppercase tracking-widest text-(--white)/60 mb-1">
        {label}
      </p>
      <p className="text-xl font-semibold group-hover:text-(--contrast) transition-colors duration-200">
        {value}
      </p>
    </div>
  );
}
