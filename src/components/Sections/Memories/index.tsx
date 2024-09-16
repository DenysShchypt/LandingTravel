import { FC } from "react";
// import Paris from "../../../assets/memories/paris.jpg";
// import Japan from "../../../assets/memories/japan.jpg";
// import USA from "../../../assets/memories/usa.jpg";
// import Ukraine from '../../../assets/memories/ukraine.jpg';

const Memories: FC = (): JSX.Element => {
  return (
    <section className="container pb-[150px] xl:pb-[300px]">
      <h2 className="mb-[60px] xl:mb-[80px] font-semibold text-4xl xl:text-6xl text-center text-black">
        Travel Memories
      </h2>
      <div className="grid md:grid-rows-2 md:grid-flow-col gap-8">
        <div className="relative md:row-span-2 md:col-span-1 xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          {/* <img
            className="object-cover w-full h-[327px] md:h-full rounded-[20px]"
            src={Paris}
            alt="Best Way to Travel French"
          /> */}
          <div className="absolute left-8 md:left-10 bottom-10 md:bottom-[60px] text-white">
            <h3 className="font-normal text-4xl/4 mb-[15px]">Paris</h3>
            <ul className="list-disc pl-4">
              <li className="font-light text-sm/3">3 trips</li>
              <li className="font-light text-sm">60 travelers</li>
            </ul>
          </div>
        </div>
        <div className="relative md:col-span-2 xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          {/* <img
            className="object-cover w-full h-[327px] rounded-[20px]"
            src={Japan}
            alt="Best Way to Travel French"
          /> */}
          <div className="absolute left-8 md:left-10 bottom-10 md:bottom-[60px] text-white">
            <h3 className="font-normal text-4xl/4 mb-[15px]">Japan</h3>
            <ul className="list-disc pl-4">
              <li className="font-light text-sm/3">6 trips</li>
              <li className="font-light text-sm">100 travelers</li>
            </ul>
          </div>
        </div>
        <div className="relative md:row-span-1 md:col-span-1 xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          {/* <img
            className="object-cover w-full h-[327px] rounded-[20px]"
            src={USA}
            alt="Best Way to Travel French"
          /> */}
          <div className="absolute left-8 md:left-10 bottom-10 md:bottom-[60px] text-white">
            <h3 className="font-normal text-4xl/4 mb-[15px]">USA</h3>
            <ul className="list-disc pl-4">
              <li className="font-light text-sm/3">2 trips</li>
              <li className="font-light text-sm">45 travelers</li>
            </ul>
          </div>
        </div>
        <div className="relative md:row-span-1 md:col-span-1 xl:p-5 xl:border-[1px] xl:border-solid xl:border-auxiliary xl:rounded-[20px] ">
          {/* <img
            className="object-cover w-full h-[327px] rounded-[20px]"
            src={Ukraine}
            alt="Best Way to Travel French"
          /> */}
          <div className="absolute left-8 md:left-10 bottom-10 md:bottom-[60px] text-white">
            <h3 className="font-normal text-4xl/4 mb-[15px]">Ukraine</h3>
            <ul className="list-disc pl-4">
              <li className="font-light text-sm/3">2 trips</li>
              <li className="font-light text-sm">70 travelers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
