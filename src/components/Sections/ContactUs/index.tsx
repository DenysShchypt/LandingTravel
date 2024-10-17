import { FC } from 'react'
import bgContact from '../../../assets/bgContact.jpg'

const ContactUs: FC = (): JSX.Element => {
  const styles = {
    backgroundImage: `linear-gradient(to top, rgba(0, 60, 130, 0.8) 0%, rgba(0, 60, 130, 0) 100%), url(${bgContact})`,
  }

  return (
    <section
      className="pt-[70px] xl:pt-[100px] pb-[100px] px-[30px] xl:px-[44px] text-white bg-cover bg-center"
      style={styles}
    >
      <h2 className="mb-[60px] xl:mb-10 font-semibold text-3xl xl:text-6xl text-center">
        Let Us Show You the World
      </h2>
      <p className="max-w-[333px] xl:max-w-[565px] mx-auto mb-[80px] xl:mb-[60px] font-normal text-sm text-center">
        We'll work with you to create a customized travel plan that fits your
        needs and budget. We'll also help you book your flights, hotels, and
        activities. And best of all, we'll give you a 10% discount on your first
        trip with us!
      </p>
      <button
        type="button"
        className="flex justify-center mx-auto items-center w-[188px] h-[54px] px-[38px] py-[15px] border-[1px] border-solid border-white rounded-3xl font-medium text-xl text-white text-center hover:bg-white hover:text-[#003C82] transition-colors duration-300"
      >
        Contact Us
      </button>
    </section>
  )
}

export default ContactUs

// hi. how I can make in Tailwind CSS   background: linear-gradient(180deg, rgba(0, 60, 130, 0.8) 0%, rgba(0, 60, 130, 0.8) 100%), url("path_to_image");
