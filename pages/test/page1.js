import Nav2 from "../../components/Nav2";
import A from "../../components/A";
const page1 = () => {
  return (
    <div className="content-center container flex flex-col pt-2">
      <Nav2 />
      <div className="flex flex-row justify-between">
        <div className="w-1/2">
          <h1 className="text-5xl pr-20 py-5">
            Want anything to be easy with
            <span className="font-extrabold"> LaslesVPN.</span>
          </h1>
          <p>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <button className="bg-red-600 py-3 px-6 rounded-md mt-16 shadow-sm text-white">
            Selengkapnya
          </button>
        </div>
        <div className="w-1/2">
          <img src="/svg/img.svg" />
        </div>
      </div>
      <div>
        <A href="/page2">klik</A>
      </div>
      <div></div>
    </div>
  );
};

export default page1;
