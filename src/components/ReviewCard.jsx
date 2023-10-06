import { star } from "../assets/icons";
import { motion } from "framer-motion";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 2,
      }}
      className="flex justify-center items-center flex-col"
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full w-[120px] h-[120px] object-cover"
      />
      <p className="mt-6 max-w-small text-center info-text">{feedback}</p>
      <div className=" mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </motion.div>
  );
};

export default ReviewCard;
