import { useSelector } from 'react-redux';
import { BagIcon, LeafIcon } from './Icons';

export default function Navbar({ page, navigate }) {
  const itemCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <>
      <div className="announcement">
        <span><span className="announcement-star">✳</span> Small plants, big feelings.</span>
        <span className="announcement-shipping">Free delivery on orders over $75 <span aria-hidden="true">↗</span></span>
      </div>
      <header className="site-header">
        <div className="header-inner container-wide">
          <a className="brand" href="#home" onClick={() => navigate('home')} aria-label="Paradise Nursery — go to home">
            <span className="brand-symbol"><LeafIcon size={22} /></span>
            <span className="brand-wordmark">paradise<span>nursery</span></span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home" onClick={() => navigate('home')} className={page === 'home' ? 'active' : ''} aria-current={page === 'home' ? 'page' : undefined}>Home</a>
            <a href="#plants" onClick={() => navigate('plants')} className={page === 'plants' ? 'active' : ''} aria-current={page === 'plants' ? 'page' : undefined}>Shop plants</a>
            <a href="#about" onClick={() => navigate('about')} className={page === 'about' ? 'active' : ''} aria-current={page === 'about' ? 'page' : undefined}>Our story</a>
          </nav>
          <a href="#cart" onClick={() => navigate('cart')} className={`nav-cart ${page === 'cart' ? 'nav-cart-active' : ''}`} aria-label={`Shopping cart, ${itemCount} items`}>
            <BagIcon size={21} />
            <span className="nav-cart-label">Cart</span>
            <span className="nav-cart-count" aria-live="polite">{itemCount}</span>
          </a>
        </div>
      </header>
    </>
  );
}
