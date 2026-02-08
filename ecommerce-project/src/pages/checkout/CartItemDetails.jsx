import { formatMoney } from "../../utils/money";
import { useState } from 'react';
import axios from "axios";

export function CartItemDetails({cartItem, deleteCartItem}) {

  const [isUpdatingState, setIsUpdatingState] = useState(false);
  let [quantity, setQuantity] = useState(cartItem.quantity);

  function quantityInput(event) {
    setQuantity(event.target.value);
  }

  const updateCartItem = async() => {
    await axios.post(`api/cart-items/${cartItem.productId}`,{
      quantity: Number(quantity)
    });

  }

  function toggleUpdate() {
    if (isUpdatingState) {
      updateCartItem()
      setIsUpdatingState(false);
    }
    else {
      setIsUpdatingState(true);
    }
  }

  return (
    <>
      <img className="product-image"
        src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">
          {cartItem.product.name}
        </div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:
            
            {isUpdatingState && 
              <input 
                type="text" 
                style={{width: 50}} 
                value={quantity}
                onChange={quantityInput}
              />
            }
            
            <span className="quantity-label">
              {cartItem.quantity}
            </span>
          </span>
          <span className="update-quantity-link link-primary" onClick={toggleUpdate}>
            Update
          </span>
          <span className="delete-quantity-link link-primary"
            onClick={deleteCartItem}>
            Delete
          </span>
        </div>
      </div>
    </>
  );
}