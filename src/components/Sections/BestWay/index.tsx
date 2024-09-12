import { FC } from "react";
// import bestWay1xWebp from "../../../assets/galleryBestWay/bestWay-1x.webp";
// import bestWay2xWebp from "../../../assets/galleryBestWay/bestWay-2x.webp";
// import bestWay1xJpg from "../../../assets/galleryBestWay/bestWay-1x.jpg";
// import bestWay2xJpg from "../../../assets/galleryBestWay/bestWay-2x.jpg";

const SectionBestWay: FC = (): JSX.Element => {
  return (
    <section className="container md:flex pt-[100px] md:pt-[289px] pb-[150px] md:pb-[300px] ">
      <div className="md:ml-[220px]">
        <h2 className="mb-[60px] md:mb-[80px] font-semibold text-3xl md:text-5xl text-center md:text-start text-black">
          Best Way to Travel
        </h2>
        <p className=" mb-[14px] font-normal text-sm text-center md:text-start text-black">
          We are a travel agency that specializes in creating customized travel
          experiences for our clients. We believe that travel is a journey, not
          just a destination. We want to help our clients create memories that
          will last a lifetime.
        </p>
        <p className=" mb-[40px] md:mb-[50px] font-normal text-sm text-center text-black">
          We have a team of experienced travel professionals who are passionate
          about helping our clients explore the world. We have a deep
          understanding of different cultures and destinations, and we can help
          you plan the perfect trip for your needs and interests.
        </p>
        <div className="flex justify-between px-[62px] md:px-0 mb-[80px] md:mb-[108px]">
          <div className="md:mr-[100px] font-medium text-2xl text-black">
            1000+ <p className="font-medium text-2xl text-black">Clients</p>
          </div>
          <div className="font-medium text-2xl text-black">
            500+ <p className="font-medium text-2xl text-black">Trips</p>
          </div>
        </div>

        <button
          type="button"
          className="flex justify-center mb-[80px] md:mb-0 mx-auto md:mx-0 items-center w-[188px] h-[54px] px-[40px] py-[15px] border-[1px] border-solid border-auxiliary rounded-3xl font-medium text-xl text-auxiliary text-center"
        >
          Contact Us
        </button>
      </div>
      <div className="relative w-full md:ml-[228px] md:mr-[220px] p-5 border-[1px] border-solid border-auxiliary rounded-[20px]   overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full p-4 box-border">
          <iframe
            className="w-full h-full rounded-[20px]"
            src="https://www.youtube.com/embed/n9LgeoJE4EI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SectionBestWay;

{
  /* <picture>
          <source
            className="rounded-[20px]"
            srcSet={`${bestWay1xWebp}, ${bestWay2xWebp}`}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            className="rounded-[20px]"
            srcSet={`${bestWay1xJpg}, ${bestWay2xJpg}`}
            media="(min-width: 768px)"
            type="image/jpg"
          />
          <img
            className="object-cover w-full h-full rounded-[20px]"
            src={bestWay1xJpg}
            alt="Best Way to Travel"
          />
        </picture> */
}
