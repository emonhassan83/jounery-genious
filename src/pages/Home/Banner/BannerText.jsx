import BannerInput from "./BannerInput";

const BannerText = () => {
  return (
    <>
      <div className="text-center pt-6 sm:pt-10 lg:pt-16">
      <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold">
        <span className="text-pink-800">Incredible experiences, <br />
        with</span> <span className="text-pink-600">Journey Genius</span>
      </h2>
      <h6 className="text-sm sm:text-base lg:text-lg font-semibold my-4 lg:mt-8 lg:mb-4">Book unique and memorable travel <br /> experience guided by Journey Genius</h6>
      </div>
    <BannerInput/>
    </>
  );
};

export default BannerText;
