import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";
const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="font-palanquin text-4xl font-bold text-center"
      >
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
          origin: top,
          // delay: 0.25,
        }}
        className="info-text m-auto  mt-4 max-w-lg text-center"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </motion.p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            key={review.customerName}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
