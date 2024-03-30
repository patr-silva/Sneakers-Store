import { motion } from "framer-motion";

const Button = ({ label, fullWidth }) => {
  return (
    <motion.button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-graduate text-lg leading-none bg-black text-white border-green-success
       rounded-full
      ${fullWidth ? "w-full" : "w-40"}`}
      whileTap={{ scale: 0.85 }}
    >
      {label}
    </motion.button>
  );
};

export default Button;
