import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

function Template({ title, children }) {
  return (
    <Container fluid className="p-0">
      <Helmet>
        <title>{title} | Stanford - iGEM 2022</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
Template.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Template;
