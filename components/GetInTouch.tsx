import { HiArrowUpRight } from "react-icons/hi2";

const GetInTouch = () => (
  <div className='flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer'>
    <div className='flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full'>
      <div className='flex justify-center items-start flex-row'>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Get</span>
        </p>
        <HiArrowUpRight className="w-[23px] h-[23px] object-contain text-gradient" style={{ color: 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #fff7c0 0.89%, #ffee9e 17.23%, #ffe874 42.04%, #ffde3f 55.12%, #ffd10e 71.54%, #ffb300 100%)' }} />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">In Touch</span>
      </p>
    </div>
  </div>
);

export default GetInTouch;