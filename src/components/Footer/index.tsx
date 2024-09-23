import { FC } from "react";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="bg-auxiliary pt-[100px] px-5 xl:px-[220px] pb-[58px]">
      <div className="mb-10 xl:mb-[50px] flex justify-center gap-5 xl:gap-7 flex-wrap xl:flex-nowrap">
        <div className="pt-10 pl-5 xl:pl-[25px] pb-[56px] pr-[29px] rounded-[20px] border-white border-[1px] border-solid order-4 xl:order-1">
          <h4 className="mb-[30px] font-bold text-2xl text-footerTitle">
            Turistoe
          </h4>
          <p className="w-full xl:max-w-[213px] mb-10 font-normal text-white text-sm">
            We create unforgettable travel experiences that you will cherish all
            your life.
          </p>
          <ul className="flex justify-start gap-[30px] xl:gap-[15px]">
            <li className="flex justify-center items-center w-10 h-10 rounded-full border-white border-[1px] border-solid ">
              <svg className="fill-white" width="20" height="20">
                <use href="./icons.svg#icon-inst"></use>
              </svg>
            </li>
            <li className="flex justify-center items-center w-10 h-10 rounded-full border-white border-[1px] border-solid ">
              <svg
                className="fill-transparent stroke-white"
                width="20"
                height="20"
              >
                <use href="./icons.svg#icon-facebook"></use>
              </svg>
            </li>
            <li className="flex justify-center items-center w-10 h-10 rounded-full border-white border-[1px] border-solid ">
              <svg className="fill-white" width="20" height="20">
                <use href="./icons.svg#icon-youtube"></use>
              </svg>
            </li>
            <li className="flex justify-center items-center w-10 h-10 rounded-full border-white border-[1px] border-solid ">
              <svg className="fill-white" width="20" height="20">
                <use href="./icons.svg#icon-twitter"></use>
              </svg>
            </li>
          </ul>
        </div>
        <div className="pt-10 pl-5 xl:pl-[25px] pb-10 xl:pb-[49px] pr-5 xl:pr-[61px] rounded-[20px] border-white border-[1px] border-solid order-1 xl:order-2">
          <h4 className="mb-[30px] font-bold text-2xl text-white">
            Take a trip with us
          </h4>
          <p className="max-w-[186px] mb-10 font-normal text-white text-sm">
            Subscribe to be the first to know about our new trips and additional
            promotions
          </p>
          <form className="flex justify-between items-center w-[313px] xl:w-[379px] p-[5px] pl-3 xl:pl-5 max-w-[379px] rounded-[100px] border-auxiliary border-[1px] border-solid bg-white">
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="font-normal text-inputText text-sm text-center max-w-[164px] xl:w-full"
            />
            <button
              type="submit"
              className="px-[27px] py-[14px] bg-auxiliary rounded-[100px] font-medium text-white text-sm text-center"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-[167px] xl:w-[169px] pt-10 pr-8 pb-[102px] pl-5 xl:pl-[25px] rounded-[20px] border-white border-[1px] border-solid order-2 xl:order-3">
          <h4 className="mb-[30px] font-bold text-2xl text-footerTitle">About</h4>
          <ul className=" font-normal text-white text-sm">
            <li className="mb-3">About Us</li>
            <li className="mb-3">Career</li>
            <li className="mb-3">News & Article</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="w-[166px] xl:w-[169px] pt-10 pr-12 pb-[125px] pl-5 xl:pl-[25px] rounded-[20px] border-white border-[1px] border-solid order-3 xl:order-4">
          <h4 className="mb-[30px] font-bold text-2xl text-footerTitle">Support</h4>
          <ul className=" font-normal text-white text-sm/6">
            <li className="mb-3">Contact</li>
            <li className="mb-3">FAQ</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <p className="font-normal text-white text-sm text-center">
        Copyright ©2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
