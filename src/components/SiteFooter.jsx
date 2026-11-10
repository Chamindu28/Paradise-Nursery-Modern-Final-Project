import { LeafIcon, ArrowIcon } from './Icons';

export default function SiteFooter({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="container-wide footer-inner">
        <div className="footer-intro">
          <div className="footer-logo"><span className="brand-symbol"><LeafIcon size={22} /></span><span>paradise<span className="footer-logo-light">nursery</span></span></div>
          <p>More green, more joy, more you. Thoughtfully chosen plants for every kind of space.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">EXPLORE</span>
          <a href="#home" onClick={() => navigate('home')}>Home</a>
          <a href="#plants" onClick={() => navigate('plants')}>Shop all plants</a>
          <a href="#about" onClick={() => navigate('about')}>Our story</a>
        </div>
        <div className="footer-links footer-last">
          <span className="footer-label">COME GROW WITH US</span>
          <p>A little greenery goes a long way.</p>
          <a className="footer-explore" href="#plants" onClick={() => navigate('plants')}>Find your plant <ArrowIcon size={17} /></a>
        </div>
      </div>
      <div className="container-wide footer-bottom"><span>© {new Date().getFullYear()} Paradise Nursery. Made with care.</span><span>Grow at your own pace. <span aria-hidden="true">✳</span></span></div>
    </footer>
  );
}
