import A from "../components/A";
const Nav2 = () => {
  return (
    <div className="flex flex-row items-center py-2 justify-between">
      <div className="text-2xl font-bold">Landie</div>
      <div>
        <A className="px-4 py-2 ">Home</A>
        <A className="px-4 py-2 ">Aboute</A>
        <A className="px-4 py-2 ">Featur</A>
        <A className="px-4 py-2 ">Login</A>
        <A className="px-8 py-2 bg-yellow-400">Sign-Up</A>
      </div>
    </div>
  );
};

export default Nav2;
