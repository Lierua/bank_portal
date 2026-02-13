type Request = {
  name: string;
  amount: number;
  forWhat: string;
  location: string;
  status: "Godkendt" | "Afslået" | "Pending";
  date: string;
};

const RequestList = () => {
  const requests: Request[] = [
    {
      name: "Oliver Alexander Ladekarl Bengtsson",
      amount: 2_500_000,
      forWhat: "Andelbolig",
      location: "Fredensborg",
      status: "Godkendt",
      date: "12. feb.",
    },
    {
      name: "Mads Kristensen",
      amount: 1_250_000,
      forWhat: "Ejerlejlighed",
      location: "Aarhus",
      status: "Pending",
      date: "15. feb.",
    },
    {
      name: "Sofie Rasmussen",
      amount: 3_100_000,
      forWhat: "Villa",
      location: "København",
      status: "Afslået",
      date: "18. feb.",
    },
    {
      name: "Andreas Holm",
      amount: 950_000,
      forWhat: "Kollegieværelse",
      location: "København",
      status: "Godkendt",
      date: "20. feb.",
    },
  ];

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

  return (
    <div className="grid grid-cols-[300px_180px_180px_1fr_200px_70px] pt-3 grid-rows-[40px_1fr]">
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
      <div className="flex flex-col col-span-full overflow-y-auto h-[77vh]">
        {requests.map((request, index) => {
          const styles = statusStyles[request.status];

          return (
            <div
              key={index}
              className="hover:bg-gray-200 transition-all duration-200 ease-in
              col-span-full grid grid-cols-[260px_180px_180px_1fr_200px_70px]
                         pl-10 h-[40px] shrink-0 items-center"
            >
              {/* Name */}
              <p className="font-bold">
                {request.name.length > 25
                  ? request.name.slice(0, 25) + "..."
                  : request.name}
              </p>

              {/* Amount */}
              <p>{request.amount.toLocaleString("da-DK")} kr.</p>

              {/* For what */}
              <p>{request.forWhat}</p>

              <p>{request.location}</p>

              {/* Status */}
              <div className="flex items-center gap-2">
                <span
                  className={`h-[8px] w-[8px] rounded-full mt-1 ${styles.dot}`}
                />
                <p className={`${styles.text} font-semibold!`}>
                  {request.status}
                </p>
              </div>

              {/* Date */}
              <p>{request.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RequestList;
