import React from 'react';
import Zoom from 'react-reveal/Zoom';

import NftCard from '../../components/NftCard';
import LandingNav from '../../components/Nav/LandingNav';


import nftArr from './nfts';

const CollectionsPage = () => {
  return (
    <div className="lg:px-24 md:px-8 px-2 h-screen">
      <div className="flex flex-col lg:flex-row py-2  justify-between items-center ">
        <span className="mb-3 text-xs lg:text-base">
          {' '}
          <Zoom cascade>Discover, find and buy extraordinary NFT with us.</Zoom>
        </span>
        <span
          className={`btn btn-xs loading max-w-md btn-secondary text-white py-0 min-h-min`}
        >
          BUY NFT
        </span>
      </div>

      <LandingNav />

      <div className="flex flex-col lg:justify-center items-center mt-12 pb-20 ">
        <div className="capitalize font-semibold text-xl md:text-2xl mb-6 mt-6 lg:text-4xl">
          All Collections
        </div>

        <div className="hidden gap-10 w-full md:grid grid-cols-1 lg:grid-cols-3 ">
          {nftArr.map(({ img, name, desc, price, days, author }) => (
            <NftCard
              img={img}
              name={name}
              desc={desc}
              price={price}
              days={days}
              author={author}
            />
          ))}
          {nftArr.map(({ img, name, desc, price, days, author }) => (
            <NftCard
              img={img}
              name={name}
              desc={desc}
              price={price}
              days={days}
              author={author}
            />
          ))}
        </div>

        <div className="w-full gap-5 md:hidden flex flex-col items-center ">
          {nftArr.slice(1).map(({ img, name, desc, price, days, author }) => (
            <NftCard
              img={img}
              name={name}
              desc={desc}
              price={price}
              days={days}
              author={author}
            />
          ))}
          {nftArr.slice(1).map(({ img, name, desc, price, days, author }) => (
            <NftCard
              img={img}
              name={name}
              desc={desc}
              price={price}
              days={days}
              author={author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;
