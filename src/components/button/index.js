import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Button = (props) => {
  const variants = {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    background: "linear-gradient(to right, #FF6666, blue)",
    color: "white",
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: "4px",
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
    overflow: "hidden",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const lineStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    borderRadius: "2px",
    background: "linear-gradient(to right, red, #143f96)",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s",
  };

  return (
    <motion.a
      whileHover={variants}
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
    >
      <span style={lineStyle}></span>
      <span style={{ whiteSpace: "nowrap" }}>{props.name}</span>
      <motion.span
        style={{ marginLeft: "8px" }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <FaCheckCircle />
      </motion.span>
    </motion.a>
  function MyComponent() {
    const IconComponent = props?.Icon;
    return <IconComponent />;
  }
  return (
    <Link target="_blank" href={props.url}>
      <button className="bg-[#194fbc] gap-2 flex items-center hover:bg-[#143f96] text-white font-bold py-2 px-4 rounded relative">
        <span className="absolute top-0 left-0 right-0 h-1 rounded-t-md bg-gradient-to-b from-white to-[#194fbc] opacity-25"></span>
        <span className="whitespace-nowrap ">{props.name}</span>
        {props.Icon ? <MyComponent /> : <HiCheckCircle />}
      </button>
    </Link>
  );
};

export default Button;
