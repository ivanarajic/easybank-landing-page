import mockupImg from '../assets/image-mockups.png';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between w-full lg:pl-20 xl:pl-36 overflow-x-clip ">
      <div className="bg-hero-mobile lg:bg-hero-desktop bg-no-repeat bg-cover lg:bg-[right_-40rem_bottom_-6rem] xl:bg-[right_-32rem_bottom_-6rem] lg:h-[36rem] xl:h-[42rem] lg:bg-auto -z-10">
        <img
          src={mockupImg}
          alt="mockup"
          className="lg:ml-44 lg:-mt-40 mx-auto -mt-32 px-6"
        />
      </div>
      <div className="px-6 lg:px-0 text-center lg:text-left lg:w-2/5 py-10 ">
        <h1 className="text-3xl sm:text-5xl text-primary pb-6">
          Next generation <br />
          digital banking
        </h1>
        <p className="text-secondary pb-6 xl:text-lg">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <a href="#">
          <Button type="button">Request Invite</Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
