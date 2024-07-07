import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem.";
import UpdateItemQty from "./UpdateItemQty";
import { useSelector } from "react-redux";
import { getItemQty } from "./cartSlice";

CartItem.propTypes = {
  item: PropTypes.object,
};

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const itemQty = useSelector(getItemQty(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQty id={pizzaId} qty={itemQty} />

        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
