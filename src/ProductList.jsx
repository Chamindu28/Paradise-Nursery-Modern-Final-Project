import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { ArrowIcon, SearchIcon, CheckIcon } from './components/Icons';
import { categories, plants, formatMoney } from './plantCatalog';
import './ProductList.css';

/**
 * Task 6: 24 unique plants in four categories (6 in each), plus Add to Cart,
 * dynamic navbar count (from the shared Navbar in App.jsx), search, filters, sorting.
 * Catalog data lives in plantCatalog.js; each item is rendered here with its own
 * thumbnail, name, price, and a Redux-connected Add to Cart button.
 */
function CatalogPlantCard({ plant }) {
  const dispatch = useDispatch();
  const alreadyAdded = useSelector((state) => state.cart.items.some((item) => item.id === plant.id));

  const handleAddToCart = () => dispatch(addItem(plant));

  return (
    <article className="plant-card">
      <div className="plant-media">
        {plant.tag && <span className="plant-tag">{plant.tag}</span>}
        <img src={plant.image} alt={`${plant.name} houseplant thumbnail`} loading="lazy" />
        <span className="plant-media-index" aria-hidden="true">✳</span>
      </div>
      <div className="plant-card-body">
        <div className="plant-card-title-row"><h3>{plant.name}</h3><strong>{formatMoney(plant.price)}</strong></div>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-card-meta"><span>◌ {plant.light}</span><span>·</span><span>{plant.water}</span></div>
        <button type="button" className={`plant-button ${alreadyAdded ? 'plant-button-added' : ''}`} onClick={handleAddToCart} disabled={alreadyAdded} aria-label={alreadyAdded ? `${plant.name} already added to cart` : `Add ${plant.name} to cart`}>
          {alreadyAdded ? <><CheckIcon /> Added to cart</> : <>Add to Cart <span aria-hidden="true">＋</span></>}
        </button>
      </div>
    </article>
  );
}
export default function ProductList() {
  const [categoryId, setCategoryId] = useState('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const groupedPlants = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    return categories
      .filter((category) => categoryId === 'all' || category.id === categoryId)
      .map((category) => {
        const items = plants.filter((plant) => {
          const matchesCategory = plant.category === category.id;
          const matchesSearch = !searchTerm || `${plant.name} ${plant.description} ${category.name}`.toLowerCase().includes(searchTerm);
          return matchesCategory && matchesSearch;
        });
        if (sortBy === 'price-asc') items.sort((a, b) => a.price - b.price);
        else if (sortBy === 'price-desc') items.sort((a, b) => b.price - a.price);
        else if (sortBy === 'name') items.sort((a, b) => a.name.localeCompare(b.name));
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [categoryId, search, sortBy]);

  const count = groupedPlants.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <main className="shop-page">
      <section className="shop-hero"><div className="container-wide shop-hero-inner"><div><div className="eyebrow"><span className="eyebrow-dot"/> PLANTS FOR EVERY SPACE</div><h1>Find your <em>happy place.</em></h1><p>Bright corners, cozy shelves, sunny windows. There's a little green something for every part of life.</p></div><div className="shop-hero-decoration" aria-hidden="true"><span>✳</span><small>THE GOOD<br/>GREEN STUFF</small></div></div></section>
      <div className="container-wide shop-content">
        <div className="shop-toolbar" aria-label="Plant catalog filters">
          <div className="category-tabs" role="group" aria-label="Filter by category">
            <button type="button" className={categoryId === 'all' ? 'is-selected' : ''} onClick={() => setCategoryId('all')} aria-pressed={categoryId === 'all'}>All plants <span>24</span></button>
            {categories.map((category) => <button type="button" key={category.id} className={categoryId === category.id ? 'is-selected' : ''} onClick={() => setCategoryId(category.id)} aria-pressed={categoryId === category.id}>{category.name}</button>)}
          </div>
          <div className="shop-tools">
            <label className="search-field"><SearchIcon size={19}/><span className="sr-only">Search plants</span><input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search plants..." /></label>
            <label className="sort-select"><span className="sr-only">Sort products</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="name">Name: A to Z</option></select></label>
          </div>
        </div>
        <div className="results-label" aria-live="polite"><span>Showing <strong>{count}</strong> {count === 1 ? 'plant' : 'plants'}</span><span>Curated with care <span aria-hidden="true">✳</span></span></div>
        {groupedPlants.length ? groupedPlants.map((category, index) => (
          <section className="product-category" key={category.id} aria-labelledby={`${category.id}-heading`}>
            <div className="product-category-heading"><div><span className="category-index">{String(index + 1).padStart(2, '0')} / <span>THE COLLECTION</span></span><h2 id={`${category.id}-heading`}>{category.name}<span className="heading-star">✳</span></h2><p>{category.description}</p></div><span className="category-plant-count">{category.items.length} PLANTS <ArrowIcon size={17}/></span></div>
            <div className="product-grid">{category.items.map((plant) => <CatalogPlantCard plant={plant} key={plant.id}/>)}</div>
          </section>
        )) : <div className="no-results"><div className="no-results-icon">✳</div><h2>No plants found</h2><p>Try another search or browse our full collection.</p><button className="button-primary" type="button" onClick={() => { setSearch(''); setCategoryId('all'); }}>Explore all plants <ArrowIcon size={18}/></button></div>}
      </div>
    </main>
  );
}
