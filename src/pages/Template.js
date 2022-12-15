import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Image from '../components/shared/Image';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

function Template({ title, children }) {
  const heroImg = "https://static.igem.wiki/teams/4466/wiki/dummy-hero.jpg"
  return (
    <Container fluid className="p-0">
      <Helmet> {/* UPDATE HELMET TO react-helmet-async */ }
        <title>{title} | Stanford - iGEM 2022</title>
      </Helmet>
      <Navbar />
      <div class="hero-overlay">
        <Image.Hero src={heroImg} alt="Butterfly Hero Image" />
        <text class="hero-text">{title}</text>
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </Container>
  );
}
Template.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Template;
