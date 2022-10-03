import PropTypes from 'prop-types';
import '../../stylesheets/images.scss';

function HeroImage({ src, alt }) {
  return (
    <img className="hero" src={src} alt={alt} />
  );
}
HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Image = {
  Hero: HeroImage,
};

export default Image;
