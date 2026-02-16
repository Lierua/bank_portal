import RequestItem from "./RequestItem";

export type Request = {
  name: string;
  amount: number;
  forWhat: string;
  location: string;
  status: "Godkendt" | "Afslået" | "Pending";
  date: string;

  // NEW FIELDS
  indkomst: number;
  raadighedsBeloeb: number;
  gaeldsfaktor: number;
  opsparing: number;
};

type Props = {
  search: string;
  overview: string;
  setOverview: React.Dispatch<React.SetStateAction<string>>;
};

const RequestList = ({ search, overview, setOverview }: Props) => {
  const requests: Request[] = [
    {
      name: "Jane Doe",
      amount: 2_500_000,
      forWhat: "Andelbolig",
      location: "Fredensborg",
      status: "Godkendt",
      date: "12. feb.",
      indkomst: 650_000,
      raadighedsBeloeb: 18_500,
      gaeldsfaktor: 3.8,
      opsparing: 420_000,
    },
    {
      name: "Mads Kristensen",
      amount: 1_250_000,
      forWhat: "Ejerlejlighed",
      location: "Aarhus",
      status: "Pending",
      date: "15. feb.",
      indkomst: 520_000,
      raadighedsBeloeb: 14_200,
      gaeldsfaktor: 2.9,
      opsparing: 150_000,
    },
    {
      name: "Sofie Rasmussen",
      amount: 3_100_000,
      forWhat: "Villa",
      location: "København",
      status: "Afslået",
      date: "18. feb.",
      indkomst: 880_000,
      raadighedsBeloeb: 25_000,
      gaeldsfaktor: 4.5,
      opsparing: 300_000,
    },
    {
      name: "Andreas Holm",
      amount: 950_000,
      forWhat: "Kollegieværelse",
      location: "København",
      status: "Godkendt",
      date: "20. feb.",
      indkomst: 410_000,
      raadighedsBeloeb: 11_000,
      gaeldsfaktor: 2.2,
      opsparing: 90_000,
    },
  ];

  const repeatedRequests = Array(5)
    .fill(null)
    .flatMap(() => requests);

  const statusStyles: Record<Request["status"], { text: string; dot: string }> =
    {
      Godkendt: {
        text: "text-green-500!",
        dot: "bg-green-400",
      },
      Afslået: {
        text: "text-red-500!",
        dot: "bg-red-400",
      },
      Pending: {
        text: "text-blue-500!",
        dot: "bg-blue-400",
      },
    };

  const filteredRequests = repeatedRequests.filter((request) => {
    const query = search.toLowerCase();

    return Object.values(request).some((value) =>
      value.toString().toLowerCase().includes(query),
    );
  });

  return (
    <div className="grid grid-cols-[300px_180px_180px_1fr_200px_70px] pt-[15px] grid-rows-[40px_1fr]">
      {/* Header */}
      <div className="col-span-full grid grid-cols-subgrid border-(--black)/10 border-b-2 pl-10 h-[40px] text-(--black)/60">
        <h3>Kunde</h3>
        <h3>Lånebeløb</h3>
        <h3>Lån for</h3>
        <h3>Område</h3>
        <h3>Status</h3>
        <h3>Dato</h3>
      </div>

      {/* Rows */}
      <div className="flex flex-col col-span-full overflow-y-auto h-[calc(100dvh-210px)]">
        {filteredRequests.map((request, index) => {
          const styles = statusStyles[request.status];

          return (
            <RequestItem
              key={`${request.name}-${index}`}
              request={request}
              styles={styles}
              overview={overview}
              setOverview={setOverview}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RequestList;
