import A from "../components/A";
const nav = () => {
  return (
    <div className="w-full flex flex-row items-center">
      <A>
        <img src="/svg/logo.svg" />
      </A>
      <div className="hidden md:flex w-full pl-8 justify-between">
        <ul className="flex-row flex ">
          <A className="py-2 px-4 hover:bg-red-600 hover:text-white rounded-md ">
            Home
          </A>
          <A className="py-2 px-4 hover:bg-red-600 hover:text-white rounded-md ">
            Aboute
          </A>
          <A className="py-2 px-4  hover:bg-red-600 hover:text-white rounded-md">
            Pruduk
          </A>
        </ul>
        <ul className="flex-row flex ">
          <A className="py-2 px-4 font-semibold ">Sign-in</A>
          <A className="text-red-600 border-red-600 whitespace-no-wrap rounded-full border-2 px-8 py-2">
            Sign-Up
          </A>
        </ul>
      </div>
    </div>
  );
};

export default nav;
