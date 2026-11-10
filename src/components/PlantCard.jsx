import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';
import { formatMoney } from '../plantCatalog';
import { ArrowIcon, CheckIcon } from './Icons';

export default function PlantCard({ plant, compact = false, onShop }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.items.some((item) => item.id === plant.id));

  return (
    <article className={`plant-card ${compact ? 'plant-card-compact' : ''}`}>
      <div className="plant-media">
        {plant.tag && <span className="plant-tag">{plant.tag}</span>}
        <img src={plant.image} alt={`${plant.name} in a planter`} loading="lazy" />
        <span className="plant-media-index" aria-hidden="true">✳</span>
      </div>
      <div className="plant-card-body">
        <div className="plant-card-title-row">
          <h3>{plant.name}</h3><strong>{formatMoney(plant.price)}</strong>
        </div>
        <p className="plant-description">{plant.description}</p>
        <div className="plant-card-meta"><span>◌ {plant.light}</span><span>·</span><span>{plant.water}</span></div>
        {compact ? (
          <button type="button" className="plant-button plant-button-see" onClick={onShop}>Shop this plant <ArrowIcon size={18} /></button>
        ) : (
          <button type="button" className={`plant-button ${inCart ? 'plant-button-added' : ''}`} disabled={inCart} onClick={() => dispatch(addItem(plant))} aria-label={inCart ? `${plant.name} already added to cart` : `Add ${plant.name} to cart`}>
            {inCart ? <><CheckIcon /> Added to cart</> : <>Add to cart <span aria-hidden="true">＋</span></>}
          </button>
        )}
      </div>
    </article>
  );
}
