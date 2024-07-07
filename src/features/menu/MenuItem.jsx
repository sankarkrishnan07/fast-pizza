import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getItemQty } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem.";
import UpdateItemQty from "../cart/UpdateItemQty";

MenuItem.propTypes = {
  item: PropTypes.object,
};

export default function MenuItem({ item }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;
  const dispatch = useDispatch();
  const itemQty = useSelector(getItemQty(id));
  const isItemInCart = itemQty > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <span className="font-medium">{name}</span>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isItemInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQty id={id} qty={itemQty} />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isItemInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
