import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const GradientButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, #FF6666, blue);
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const GradientLine = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(to right, red, #143f96);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
`;

const ButtonText = styled.span`
  white-space: nowrap;
`;

const IconBounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Icon = styled(FaCheckCircle)`
  margin-left: 8px;
  animation: ${IconBounce} 1s infinite;
`;

const Button = (props) => {
  const variants = {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
    },
  };
  return (
    <GradientButton whileHover={variants} href={props.url} target="_blank" rel="noopener noreferrer">
      <GradientLine />
      <ButtonText>{props.name}</ButtonText>
      <Icon />
    </GradientButton>
  );
};

export default Button;
