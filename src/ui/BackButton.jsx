import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

BackButton.propTypes = {
  children: PropTypes.string,
};

export default function BackButton({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      onClick={() => navigate(-1)}
    >
      {children}
    </button>
  );
}
