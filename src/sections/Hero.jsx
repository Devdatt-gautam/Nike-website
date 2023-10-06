import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { motion } from "framer-motion";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full p-2 flex xl:flex-row flex-col justify-center relative z-10 min-h-screen gap-10 max-container "
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 "
      >
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 dark:bg-transparent ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} link="#products" />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 1 }}
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero  bg-cover bg-center  dark:bg-blend-difference "
      >
        <motion.img
          key={bigShoeImg}
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10 "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          // transition={{ duration: 3 }}
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe);
                }}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
