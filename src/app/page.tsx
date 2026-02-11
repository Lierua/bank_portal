import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-[15px] gap-[15]">
      <head></head>
      <div className="nav-banner rounded-l-lg overflow-hidden h-[72px]">
        <div className="bg-(--prime) grid items-center">
          <p className="mx-auto">1</p>
        </div>
        <div className="bg-white flex items-center">
          <p className="">1</p>
        </div>
      </div>
      <div className="body-banner rounded-l-lg overflow-hidden h-[87vh]">
        <div className="bg-(--prime) banner-rows">
          <p className="mx-auto row-2">1</p>
          <p className="mx-auto row-3">1</p>
        </div>
        <div className="bg-(--light-prime) banner-rows">
          <p className="pl-[20px] row-2">1</p>
          <p className="pl-[20px] row-3">1</p>
        </div>
        <div className="bg-white">1</div>
      </div>
    </div>
  );
}
