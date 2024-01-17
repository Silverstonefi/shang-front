import eye from "../images/icon-view.svg";
import eqb from "../images/image-equilibrium.jpg";
import eth from "../images/icon-ethereum.svg";
import clock from "../images/icon-clock.svg";
import avatar from "../images/image-avatar.png";
import { Link } from "react-router-dom";

const NftCard = ({ img, name, desc, price, days, author }) => {
  return (
    <section className="bg-rope p-5 mx-5 rounded-xl max-w-xs shadow-2xl">
      <a to="#" className="group block relative rounded-md overflow-hidden">
        <div className="invisible group-hover:visible absolute inset-0 bg-cyan/50">
          <img
            src={eye}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="eye icon"
          />
        </div>
        <img src={img} alt="equilibrium" />
      </a>

      <h1>
        <a
          to="#"
          className="block text-white my-4 font-semibold text-lg hover:text-cyan"
        >
          {name}
        </a>
      </h1>

      <p className="text-soft-blue font-light">{desc}</p>

      <div className="flex justify-between items-center mt-4">
        <div className="flex text-cyan space-x-2">
          <img src={eth} alt="ethereum icon" />
          <p>{price} ETH</p>
        </div>
        <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
          <img src={clock} alt="clock icon" />
          <p>{days} days left</p>
        </div>
      </div>

      <hr className="border-dark-blue-line mt-6" />

      <div className="flex items-center space-x-2 mt-4">
        <img src={avatar} alt="avatar" className="w-8 h-8" />
        <p className="text-white">
          <span className="text-secondary">Creation of </span>
          <a to="#" className="hover:text-cyan">
            {author}
          </a>
        </p>
      </div>
      <Link
        to="/user/wallet"
        className="btn btn-secondary w-full mt-6 font-bold text-md"
      >
        PLACE BID
      </Link>
    </section>
  );
};

export default NftCard;
