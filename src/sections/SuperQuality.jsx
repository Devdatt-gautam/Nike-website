import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex max-lg:scroll-mt-20 justify-between items-center max-lg:flex-col  gap-10 w-full max-container"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
        }}
        className="flex flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          we provide you
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0, 1] }}
            transition={{ delay: 0.75, duration: 2.5 }}
            className="text-coral-red"
          >
            Super Quality
          </motion.span>
          {` Shoes`}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing with unmatched
          quality innovation, and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" link="#offer" />
        </div>
      </motion.div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="Shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
