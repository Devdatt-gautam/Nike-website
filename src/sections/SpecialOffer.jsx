import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { motion } from "framer-motion";
const SpecialOffer = () => {
  return (
    <motion.div
      id="offer"
      className="flex   items-center max-xl:flex-col-reverse gap:10 max-container justify-center"
    >
      <div className="flex-1 max-xl:mt-4">
        <img
          src={offer}
          alt="discount offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="flex flex-1 flex-col "
      >
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} link="#products" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            link="#contact-us"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpecialOffer;
