import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { getTotalCartPrice, getTotalCartQty } from "./cartSlice";

export default function CartOverview() {
  const totalCartQty = useSelector(getTotalCartQty);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQty) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <div className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQty} Pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </div>
      <Link to="/cart">View Cart &rarr;</Link>
    </div>
  );
}
