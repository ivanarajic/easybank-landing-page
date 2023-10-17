import ArticleItem from './ArticleItem';

const articles = [
  {
    author: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single...',
    img: 'src/assets/image-currency.jpg',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. This means you...',
    img: 'src/assets/image-restaurant.jpg',
  },
  {
    author: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    img: 'src/assets/image-plane.jpg',
  },
  {
    author: 'By Claire Robinson',
    title: 'Our invite-only Beta accounts are now live! ',
    text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site...',
    img: 'src/assets/image-confetti.jpg',
  },
];

const Articles = () => {
  return (
    <div className=" lg:p-20 xl:px-36 xl:py-24 py-14 px-6">
      <h1 className="text-primary text-3xl lg:text-4xl pb-10 text-center lg:text-left">
        Latest Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 justify-items-center lg:justify-items-start">
        {articles.map((article, index) => (
          <ArticleItem
            key={index}
            author={article.author}
            title={article.title}
            text={article.text}
            image={article.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
