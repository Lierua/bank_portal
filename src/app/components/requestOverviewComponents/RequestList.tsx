import RequestItem from "./RequestItem";
import type { Request } from "../RequestContent";

type Props = {
  search: string;
  requests: Request[];
  setSelectedId: React.Dispatch<React.SetStateAction<number | null>>;
};

const RequestList = ({ search, requests, setSelectedId }: Props) => {
  const statusStyles: Record<Request["status"], { text: string; dot: string }> =
    {
      Godkendt: { text: "text-green-500!", dot: "bg-green-400" },
      Afslået: { text: "text-red-500!", dot: "bg-red-400" },
      Pending: { text: "text-blue-500!", dot: "bg-blue-400" },
    };

  const filteredRequests = requests.filter((request) => {
    const query = search.toLowerCase();
    return Object.values(request).some((value) =>
      value.toString().toLowerCase().includes(query),
    );
  });

  return (
    <div className="grid grid-cols-[300px_180px_180px_1fr_200px_70px] pt-[15px] grid-rows-[40px_1fr]">
      <div className="col-span-full grid grid-cols-subgrid border-(--black)/10 border-b-2 pl-10 h-[40px] text-(--black)/60">
        <h3>Kunde</h3>
        <h3>Lånebeløb</h3>
        <h3>Lån for</h3>
        <h3>Område</h3>
        <h3>Status</h3>
        <h3>Dato</h3>
      </div>

      <div className="flex flex-col col-span-full overflow-y-auto h-[calc(100dvh-210px)]">
        {filteredRequests.map((request, index) => {
          const styles = statusStyles[request.status];

          return (
            <RequestItem
              key={request.id}
              request={request}
              styles={styles}
              setSelectedId={setSelectedId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RequestList;
