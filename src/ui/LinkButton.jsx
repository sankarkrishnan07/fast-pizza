import { Link } from "react-router-dom";
import PropTypes from "prop-types";

LinkButton.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

export default function LinkButton({ children, to }) {
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}
