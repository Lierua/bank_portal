import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFileArchive } from "react-icons/fa";

const NavComponent = () => {
  return (
    <div className="nav-banner rounded-l-lg overflow-hidden h-[72px] lk-box-shadow">
      <div className="bg-(--prime) grid items-center text-(--white)">
        <h1 className="mx-auto font-bold!">lk</h1>
      </div>
      <div className="bg-white flex items-center">
        <h2 className=" pl-5">Oversigt</h2>
      </div>
      <div className="bg-white flex items-center px-5 justify-between">
        <div className="flex">
          <FaRegFileArchive className="text-(--white) text-5xl row-3 mx-auto" />
          <FaRegFileArchive className="text-(--white) text-5xl row-3 mx-auto" />
          <FaRegFileArchive className="text-(--white) text-5xl row-3 mx-auto" />
        </div>
        <div className="flex">
          <FaRegFileAlt className="text-(--white) text-5xl row-2 mx-auto" />
          <FaRegFileAlt className="text-(--white) text-5xl row-2 mx-auto" />
          <FaRegFileAlt className="text-(--white) text-5xl row-2 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
