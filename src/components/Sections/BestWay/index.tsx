import { FC } from "react";

const SectionBestWay: FC = (): JSX.Element => {
  return (
    <section className="container xl:flex pt-[100px] xl:pt-[289px] pb-[150px] xl:pb-[300px] ">
      <div >
        <h2 className="mb-[60px] xl:mb-[80px] font-semibold text-3xl xl:text-5xl text-center xl:text-start text-black">
          Best Way to Travel
        </h2>
        <p className="px-[14px] xl:px-0 mb-[14px] font-normal text-sm text-center xl:text-start text-black">
          We are a travel agency that specializes in creating customized travel
          experiences for our clients. We believe that travel is a journey, not
          just a destination. We want to help our clients create memories that
          will last a lifetime.
        </p>
        <p className="px-[14px] xl:px-0 mb-[40px] xl:mb-[50px] font-normal text-sm text-center xl:text-start text-black">
          We have a team of experienced travel professionals who are passionate
          about helping our clients explore the world. We have a deep
          understanding of different cultures and destinations, and we can help
          you plan the perfect trip for your needs and interests.
        </p>
        <div className="flex justify-between xl:justify-start px-[62px] xl:px-0 mb-[80px] xl:mb-[108px]">
          <div className="xl:mr-[100px] font-medium text-2xl text-black">
            1000+ <p className="font-medium text-2xl text-black">Clients</p>
          </div>
          <div className="font-medium text-2xl text-black">
            500+ <p className="font-medium text-2xl text-black">Trips</p>
          </div>
        </div>

        <button
          type="button"
          className="flex justify-center mb-[80px] xl:mb-0 mx-auto xl:mx-0 items-center w-[188px] h-[54px] px-[40px] py-[15px] border-[1px] border-solid border-auxiliary rounded-3xl font-medium text-xl text-auxiliary text-center"
        >
          Contact Us
        </button>
      </div>
      <div className=" xl:ml-[140px] 2xl:ml-[220px] p-5 border-[1px] border-solid border-auxiliary rounded-[20px]">

          {/* <iframe
            className="w-full xl:w-[424px] h-[398px] xl:h-full rounded-[20px]"
            src="https://www.youtube.com/embed/n9LgeoJE4EI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}

      </div>
    </section>
  );
};

export default SectionBestWay;

