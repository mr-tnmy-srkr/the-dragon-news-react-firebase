import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details,rating } = news;
  const {number} = rating
  console.log(number);
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-16">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link to={`/news/${_id}`} className="text-blue-600 font-bold">
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <p>
        <StarRatings
        rating={number}
        starDimension="20px"
        starSpacing="0px"
   
          starRatedColor="blue"
          // changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
      />
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
