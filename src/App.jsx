import { useEffect, useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import PlantCard from './components/PlantCard';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';
import { ArrowIcon, LeafIcon, SparkleIcon } from './components/Icons';
import { categories, featuredPlants } from './plantCatalog';
import './App.css';

const validPages = new Set(['home', 'plants', 'cart', 'about']);
const getPageFromHash = () => {
  const hash = window.location.hash.replace('#', '');
  return validPages.has(hash) ? hash : 'home';
};

function HomePage({ navigate }) {
  const shopPlants = () => navigate('plants');

  return (
    <main>
      {/* Task 4: Paradise Nursery landing page, company name, background image and Get Started. */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="container-wide hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR HOME, BUT GREENER</div>
            <h1 id="hero-heading">Make room for <em>something</em> living.</h1>
            <p>Meet your new favorite leafy companions. Thoughtfully picked plants to make every corner feel like home.</p>
            <div className="hero-actions">
              <button type="button" className="button-primary" onClick={shopPlants}>Get Started <ArrowIcon size={19} /></button>
              <a href="#about" onClick={() => navigate('about')} className="button-text">Our story <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-icon"><LeafIcon size={22} /></div>
              <div><strong>Find your kind of green.</strong><span>Easy to shop. Lovely to grow.</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-arch" />
            <img className="hero-botanical-image" src={`${import.meta.env.BASE_URL}hero-botanical.svg`} alt="Lush botanical plant in a ceramic pot" />
            <div className="hero-visual-badge"><SparkleIcon size={19} /><span>GOOD ENERGY<br /><strong>GROWS HERE.</strong></span></div>
            <div className="hero-side-note" aria-hidden="true">GROW WITH US — EST. FOR PLANT LOVERS</div>
            <span className="hero-number" aria-hidden="true">01 / 04</span>
          </div>
        </div>
        <div className="hero-bottom-mark container-wide"><span>THOUGHTFULLY CURATED, ALWAYS.</span><span className="line-deco"/><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="benefits-strip" aria-label="Why shop with Paradise Nursery">
        <div className="container-wide benefits-inner">
          <div className="benefit"><span className="benefit-symbol">✳</span><div><strong>Handpicked with care</strong><span>Only plants we'd take home ourselves.</span></div></div>
          <div className="benefit"><span className="benefit-symbol">↗</span><div><strong>Made for real life</strong><span>Easy picks for every plant parent.</span></div></div>
          <div className="benefit"><span className="benefit-symbol">♡</span><div><strong>A greener everyday</strong><span>Small changes, happier spaces.</span></div></div>
        </div>
      </section>

      <section className="home-categories section-spacing" aria-labelledby="categories-heading">
        <div className="container-wide">
          <div className="section-heading-row"><div><span className="eyebrow"><span className="eyebrow-dot"/> FIND YOUR MATCH</span><h2 id="categories-heading">Every plant has <em>a personality.</em></h2></div><button className="section-text-button" type="button" onClick={shopPlants}>See the full collection <ArrowIcon size={19} /></button></div>
          <div className="category-cards">
            {categories.slice(0, 3).map((category, index) => (
              <button className={`category-card category-card-${index}`} type="button" key={category.id} onClick={shopPlants}>
                <span className="category-card-top">{`0${index + 1}`}<span>{category.icon}</span></span>
                <span className="category-card-bottom"><span><strong>{category.name}</strong><small>{category.subtitle}</small></span><span className="category-arrow"><ArrowIcon size={20}/></span></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section section-spacing" aria-labelledby="featured-heading">
        <div className="container-wide">
          <div className="section-heading-row"><div><span className="eyebrow"><span className="eyebrow-dot"/> CURRENT CRUSHES</span><h2 id="featured-heading">A few <em>crowd favorites.</em></h2><p className="section-subtitle">The plants our community keeps coming back for.</p></div><button className="section-text-button" type="button" onClick={shopPlants}>Shop all plants <ArrowIcon size={19}/></button></div>
          <div className="featured-grid">{featuredPlants.map((plant) => <PlantCard key={plant.id} plant={plant} compact onShop={shopPlants}/>)}</div>
        </div>
      </section>

      <section className="green-banner"><div className="container-wide green-banner-inner"><div><span className="eyebrow">A LITTLE REMINDER</span><h2>It's a good day to <em>grow something.</em></h2></div><button className="button-light" type="button" onClick={shopPlants}>Find your plant <ArrowIcon size={20}/></button><span className="banner-decoration" aria-hidden="true">✳</span></div></section>
      <AboutUs navigate={navigate} />
    </main>
  );
}

function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (nextPage) => {
    if (!validPages.has(nextPage)) return;
    setPage(nextPage);
    if (window.location.hash !== `#${nextPage}`) window.location.hash = nextPage;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />
      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'plants' && <ProductList navigate={navigate} />}
      {page === 'cart' && <CartItem onContinueShopping={() => navigate('plants')} navigate={navigate} />}
      {page === 'about' && <main className="about-page"><div className="page-topline container-wide"><span className="eyebrow">HOME / OUR STORY</span></div><AboutUs fullPage navigate={navigate} /></main>}
      <SiteFooter navigate={navigate} />
    </div>
  );
}

export default App;
