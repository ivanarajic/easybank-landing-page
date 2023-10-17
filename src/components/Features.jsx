import FeatureItem from './FeatureItem';

const features = [
  {
    title: 'Online Banking',
    text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    icon: './icons/icon-online.svg',
  },
  {
    title: 'Simple Budgeting',
    text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    icon: './icons/icon-budgeting.svg',
  },
  {
    title: 'Fast Onboarding',
    text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away. ',
    icon: './icons/icon-onboarding.svg',
  },
  {
    title: 'Open API',
    text: 'Manage your savings, investments, pension, and much more from one account.Tracking your money has never been easier.',
    icon: './icons/icon-api.svg',
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
