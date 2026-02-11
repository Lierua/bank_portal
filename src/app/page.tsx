import Image from "next/image";
import NavComponent from "./components/utilityComponents/navComponent";
import RequestContent from "./components/RequestContent";

export default function Home() {
  return (
    <div className="mt-[15px] gap-[15]">
      <NavComponent />
      <RequestContent />
    </div>
  );
}
