import FeatureItem from './FeatureItem';
import iconOnline from '../assets/icons/icon-online.svg';
import iconApi from '../assets/icons/icon-api.svg';
import iconBudgeting from '../assets/icons/icon-budgeting.svg';
import iconOnboarding from '../assets/icons/icon-onboarding.svg';

const features = [
  {
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    icon: iconOnline,
  },
  {
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    icon: iconBudgeting,
  },
  {
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ',
    icon: iconOnboarding,
  },
  {
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier.',
    icon: iconApi,
  },
];

const Features = () => {
  return (
    <div className="relative bg-gray-100 -z-20 text-center lg:text-left lg:p-20 xl:px-36 xl:py-24 py-14 px-6">
      <div>
        <h1 className="text-primary text-3xl lg:text-4xl pb-4 lg:pb-6">
          Why choose EasyBank?
        </h1>
        <p className="text-secondary lg:w-2/4 pb-6">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
