import PropTypes from 'prop-types';
import React from 'react';
import { BgImage } from 'gbimage-bridge';

const Hero = ({
  children,
  image,
  ...props
}) => {
  const backgroundFluidImageStack = [
    image,
    'linear-gradient(rgba(42, 107, 86, 0.7), rgba(238, 255, 250, 0.01))',
  ].reverse();

  return (
    <BgImage
      image={backgroundFluidImageStack}
      {...props}
    >
      {children}
    </BgImage>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.shape({}).isRequired,
};

export default Hero;
