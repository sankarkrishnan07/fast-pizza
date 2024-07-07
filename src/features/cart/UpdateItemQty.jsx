import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "./cartSlice";

UpdateItemQty.propTypes = {
  id: PropTypes.any,
  qty: PropTypes.any,
};

export default function UpdateItemQty({ id, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={() => dispatch(decreaseQty(id))} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{qty}</span>
      <Button onClick={() => dispatch(increaseQty(id))} type="round">
        +
      </Button>
    </div>
  );
}
