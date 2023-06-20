import { BiSearch } from 'react-icons/bi'

const BannerInput = () => {
  return (
    <div className='py-4 sm:py-8 lg:py-16'>
        <div className="flex flex-row items-center gap-3 shadow-lg rounded-3xl w-2/3 mx-auto">
      <input
        className="w-full text-base  px-5 py-4  border rounded-3xl border-gray-300 focus:outline-pink-300 bg-white text-gray-900"
        type="text"
        placeholder="Where are you going?"
      ></input>
      <div className="hidden -ml-[120px] py-4 px-4 bg-pink-600 rounded-full text-white sm:flex items-center gap-2">
        <BiSearch size={20} />
        <p className="font-semibold">Search</p>
      </div>
    </div>
    </div>
  );
};

export default BannerInput;
