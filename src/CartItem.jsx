import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { formatMoney } from './plantCatalog';
import { ArrowIcon, BagIcon, CheckIcon, TrashIcon } from './components/Icons';
import './CartItem.css';

/** Task 7: cart line totals, subtotal, quantity changes, deletion & checkout message. */
export default function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutNotice, setCheckoutNotice] = useState(false);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((totalAmount, item) => totalAmount + item.price * item.quantity, 0);

  const handleIncrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  const handleRemove = (item) => dispatch(removeItem(item.id));
  const calculateTotalCost = (item) => item.price * item.quantity;
  const calculateTotalAmount = () => total;

  return (
    <main className="cart-page">
      <section className="cart-page-heading"><div className="container-wide"><div className="eyebrow"><span className="eyebrow-dot"/> YOUR GREEN LITTLE HAUL</div><div className="cart-heading-line"><h1>Your shopping <em>cart.</em></h1><span>{itemCount} {itemCount === 1 ? 'ITEM' : 'ITEMS'}</span></div><p>One step closer to a greener, happier space.</p></div></section>
      <div className="container-wide cart-content">
        {items.length === 0 ? (
          <div className="empty-cart"><div className="empty-cart-visual"><BagIcon size={52}/><span aria-hidden="true">✳</span></div><span className="eyebrow">NOTHING IN HERE (YET)</span><h2>Your cart could use <em>a little green.</em></h2><p>Every plant journey begins with one little leaf. Find a new favorite in our collection.</p><button type="button" className="button-primary" onClick={onContinueShopping}>Explore plants <ArrowIcon size={19}/></button></div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-panel" aria-labelledby="cart-items-title">
              <div className="cart-panel-heading"><h2 id="cart-items-title">In your cart <span>({itemCount})</span></h2><span>GOOD CHOICES, ALL OF THEM <span aria-hidden="true">✳</span></span></div>
              <div className="cart-items-list">
                {items.map((item) => <article className="cart-line-item" key={item.id}>
                  <div className="cart-item-image-wrap"><img src={item.image} alt={`${item.name} plant`} /></div>
                  <div className="cart-item-details"><h3>{item.name}</h3><p>{item.light || 'Indoor plant'}</p><span className="cart-unit-price">{formatMoney(item.price)} <small>/ plant</small></span></div>
                  <div className="cart-item-actions"><div className="quantity-stepper" role="group" aria-label={`Quantity of ${item.name}`}><button type="button" onClick={() => handleDecrement(item)} aria-label={`Decrease ${item.name} quantity`}>−</button><span aria-live="polite">{item.quantity}</span><button type="button" onClick={() => handleIncrement(item)} aria-label={`Increase ${item.name} quantity`}>+</button></div><button className="cart-remove" type="button" onClick={() => handleRemove(item)} aria-label={`Remove ${item.name} from cart`}><TrashIcon size={17}/> Remove</button></div>
                  <div className="cart-line-total"><span>LINE TOTAL</span><strong>{formatMoney(calculateTotalCost(item))}</strong></div>
                </article>)}
              </div>
              <button type="button" className="continue-shopping-link" onClick={onContinueShopping}><ArrowIcon direction="left" size={19}/> Continue shopping</button>
            </section>
            <aside className="order-summary" aria-label="Order summary"><div className="summary-header"><span className="eyebrow">ALMOST THERE</span><h2>Order summary <span aria-hidden="true">✳</span></h2></div><div className="summary-line"><span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span><strong>{formatMoney(calculateTotalAmount())}</strong></div><div className="summary-line"><span>Delivery</span><span>{total >= 75 ? 'Free' : 'Calculated at checkout'}</span></div><div className="summary-divider"/><div className="summary-total"><span>Total cart amount</span><strong>{formatMoney(calculateTotalAmount())}</strong></div><p className="shipping-message"><CheckIcon size={16}/> {total >= 75 ? 'Your order qualifies for free delivery.' : `You're ${formatMoney(75 - total)} away from free delivery.`}</p><button className="checkout-button" type="button" onClick={() => setCheckoutNotice(true)}>Checkout <ArrowIcon size={19}/></button><p className="summary-fine-print">Secure checkout experience coming soon.</p>
              {checkoutNotice && <div className="checkout-notice" role="status"><CheckIcon size={20}/><div><strong>Checkout is coming soon!</strong><span>Your cart is saved. Thanks for growing with us.</span></div><button type="button" onClick={() => setCheckoutNotice(false)} aria-label="Dismiss notification">×</button></div>}
            </aside>
          </div>
        )}
      </div>
      <section className="cart-footer-prompt container-wide"><span>GOOD THINGS TAKE ROOT. <span aria-hidden="true">✳</span></span></section>
    </main>
  );
}
