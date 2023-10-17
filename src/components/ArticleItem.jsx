import PropTypes from 'prop-types';

const ArticleItem = ({ author, title, text, image }) => {
  return (
    <div className="max-w-xs hover:scale-110 transition-all duration-500">
      <div className="h-52 ">
        <img
          src={image}
          className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
        />
      </div>
      <div className="p-6 ">
        <p className="text-secondary text-xs py-2">{author}</p>
        <h2 className="text-primary text-xl pb-2 leading-6 hover:text-lime-green transition-all">
          {title}
        </h2>
        <p className="text-secondary text-sm">{text}</p>
      </div>
    </div>
  );
};

ArticleItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

export default ArticleItem;
