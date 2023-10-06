import { star } from "../assets/icons";
import { motion } from "framer-motion";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        duration: 0.75,
      }}
      className="flex flex-1 flex-col w-full max-sm:w-full "
    >
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-grey">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-2xl leading-normal ">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
