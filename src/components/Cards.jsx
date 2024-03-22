import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <section className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="Single"
          />
          <h3 className="text-2xl font-bold text-center py-8">Single User</h3>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium mx-autow-[200px] my-6 px-6 py-3 hover:scale-105 duration-100 ease-in-out">
            Start Trial
          </button>
        </div>
        <div className="w-full border bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="Double"
          />
          <h3 className="text-2xl font-bold text-center py-8">Double User</h3>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black text-[#00df9a] rounded-md font-medium mx-autow-[200px] my-6 px-6 py-3 hover:scale-105 duration-100 ease-in-out">
            Start Trial
          </button>
        </div>
        <div className="w-full border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ease-in-out">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="Triple"
          />
          <h3 className="text-2xl font-bold text-center py-8">Triple User</h3>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] text-black rounded-md font-medium mx-autow-[200px] my-6 px-6 py-3 hover:scale-105 duration-100 ease-in-out">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
