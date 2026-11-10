import { ArrowIcon, LeafIcon, SparkleIcon } from './components/Icons';
import './AboutUs.css';

/** Paradise Nursery company details — Task 2 */
export default function AboutUs({ navigate, fullPage = false }) {
  return (
    <section className={`about-section ${fullPage ? 'about-section-full' : ''}`} id="our-story" aria-labelledby="about-heading">
      <div className="container-wide about-grid">
        <div className="about-artwork">
          <img src={`${import.meta.env.BASE_URL}about-botanical.svg`} alt="Illustration of a leafy potted plant" loading="lazy" />
          <div className="about-floating-label"><LeafIcon size={20} /><span>Rooted in good things<br /><strong>Since day one.</strong></span></div>
        </div>
        <div className="about-copy">
          <span className="eyebrow"><SparkleIcon size={17} /> OUR LITTLE STORY</span>
          <h2 id="about-heading">Good things <em>grow here.</em></h2>
          <p className="about-lead">We believe every home deserves a little more life.</p>
          <p>Welcome to <strong>Paradise Nursery</strong>, where green meets serenity. We're a plant-loving shop with a simple mission: make beautiful, healthy houseplants easy to find and a joy to care for.</p>
          <p>From air-purifying favorites and low-maintenance companions to fragrant herbs and flowering treasures, we thoughtfully curate plants for seasoned collectors and first-time plant parents alike.</p>
          <p>We care about quality, thoughtful guidance, and helping you find the right green companion for your own space. Because bringing nature indoors should feel as good as it looks.</p>
          <button className="button-link about-cta" type="button" onClick={() => navigate('plants')}>Explore our collection <ArrowIcon size={19} /></button>
        </div>
      </div>
    </section>
  );
}
