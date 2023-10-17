import PropTypes from 'prop-types';

const FeatureItem = ({ icon, title, text }) => {
  return (
    <div className="py-4 lg:py-14">
      <div className="flex justify-center lg:justify-start pb-6">
        <img src={icon} alt="icon" />
      </div>
      <h2 className="text-primary text-xl pb-4">{title}</h2>
      <p className="text-secondary">{text}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default FeatureItem;
