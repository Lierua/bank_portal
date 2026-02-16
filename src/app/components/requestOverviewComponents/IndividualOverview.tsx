import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};

// Temporary mock — ideally move to shared file
const requests = [
  {
    id: "jane-doe",
    name: "Jane Doe",
    amount: 2500000,
  },
  {
    id: "mads-kristensen",
    name: "Mads Kristensen",
    amount: 1250000,
  },
];

export default function IndividualOverview({ params }: PageProps) {
  const request = requests.find((r) => r.id === params.id);

  if (!request) return notFound();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{request.name}</h1>
      <p className="mt-4">
        Lånebeløb: {request.amount.toLocaleString("da-DK")} kr.
      </p>
    </div>
  );
}
