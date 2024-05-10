import Image from "next/image";
import React from "react";

const MiniProjectSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-bold">My Mini Projects</h1>
      <div className="flex flex-row flex-wrap items-center justify-around w-full gap-6">
        <div className="card bg-base-100 shadow-xl carousel-item w-[270px] sm:mr-1">
          <figure>
            <Image
              src="https://picsum.photos/seed/picsum/400/300"
              alt="Shoes"
              width={200}
              height={100}
              className="object-cover object-center  w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl carousel-item w-[270px] sm:mr-1">
          <figure>
            <Image
              src="https://picsum.photos/seed/picsum/400/300"
              alt="Shoes"
              width={200}
              height={100}
              className="object-cover object-center  w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl carousel-item w-[270px] sm:mr-1">
          <figure>
            <Image
              src="https://picsum.photos/seed/picsum/400/300"
              alt="Shoes"
              width={200}
              height={100}
              className="object-cover object-center  w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MiniProjectSection);
