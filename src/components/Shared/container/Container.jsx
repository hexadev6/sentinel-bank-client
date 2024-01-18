import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-2 my-20">{children}</div>;
};

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};
