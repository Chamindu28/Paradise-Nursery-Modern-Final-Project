/**
 * Paradise Nursery's curated catalog.
 * Product images are included in /public/plants, so they work offline and on GitHub Pages.
 * Every product has a globally unique id; each of our four categories contains six plants.
 */
export const categories = [
  {
    id: 'air-purifying',
    name: 'Air Purifying',
    subtitle: 'A little fresher, a little greener.',
    description: 'Beautiful foliage to give your favorite spaces a fresh new feeling.',
    icon: '✳',
  },
  {
    id: 'easy-care',
    name: 'Easy Care',
    subtitle: 'Low fuss. High impact.',
    description: 'Easygoing companions for busy schedules and new plant parents.',
    icon: '◌',
  },
  {
    id: 'aromatic',
    name: 'Aromatic & Herbs',
    subtitle: 'Nature you can really notice.',
    description: 'Fragrant flowers and fresh herbs to brighten your everyday.',
    icon: '✿',
  },
  {
    id: 'flowering',
    name: 'Flowering Favorites',
    subtitle: 'A little color goes a long way.',
    description: 'Charming blooms and expressive leaves made to be admired.',
    icon: '❋',
  },
];

export const plants = [
  { id: 'snake-plant', name: 'Snake Plant', category: 'air-purifying', price: 22, description: 'Architectural upright leaves with an effortlessly modern look.', light: 'Indirect light', water: 'Every 2–3 weeks', tag: 'Bestseller' },
  { id: 'spider-plant', name: 'Spider Plant', category: 'air-purifying', price: 16, description: 'A cheerful cascade of striped foliage for bright corners.', light: 'Indirect light', water: 'Weekly', tag: 'Pet friendly' },
  { id: 'peace-lily', name: 'Peace Lily', category: 'air-purifying', price: 28, description: 'Elegant deep-green foliage with delicate white spathes.', light: 'Low–medium light', water: 'Weekly' },
  { id: 'boston-fern', name: 'Boston Fern', category: 'air-purifying', price: 24, description: 'Soft, feathery fronds that make every shelf feel lush.', light: 'Indirect light', water: 'Keep moist' },
  { id: 'rubber-plant', name: 'Rubber Plant', category: 'air-purifying', price: 32, description: 'Glossy statement leaves with an effortlessly timeless feel.', light: 'Bright indirect', water: 'Every 1–2 weeks', tag: 'Popular' },
  { id: 'aloe-vera', name: 'Aloe Vera', category: 'air-purifying', price: 18, description: 'Sculptural succulent leaves with sunny, easygoing energy.', light: 'Bright light', water: 'Every 2–3 weeks' },

  { id: 'zz-plant', name: 'ZZ Plant', category: 'easy-care', price: 30, description: 'Glossy green stems, minimal watering, maximum charm.', light: 'Low–bright light', water: 'Every 2–3 weeks', tag: 'Beginner favorite' },
  { id: 'golden-pothos', name: 'Golden Pothos', category: 'easy-care', price: 18, description: 'Trailing heart-shaped leaves that look lovely anywhere.', light: 'Indirect light', water: 'Every 1–2 weeks', tag: 'Bestseller' },
  { id: 'cast-iron-plant', name: 'Cast Iron Plant', category: 'easy-care', price: 26, description: 'Dependable and leafy, even in less-than-ideal light.', light: 'Low light', water: 'Every 1–2 weeks' },
  { id: 'jade-plant', name: 'Jade Plant', category: 'easy-care', price: 19, description: 'Sweet rounded succulent leaves on a tiny tree-like form.', light: 'Bright light', water: 'Every 2–3 weeks' },
  { id: 'echeveria', name: 'Echeveria', category: 'easy-care', price: 15, description: 'A perfectly formed rosette in beautiful calming greens.', light: 'Bright light', water: 'Every 2–3 weeks' },
  { id: 'chinese-evergreen', name: 'Chinese Evergreen', category: 'easy-care', price: 29, description: 'Easygoing, patterned foliage that adds quiet texture.', light: 'Low–medium light', water: 'Every 1–2 weeks' },

  { id: 'lavender', name: 'Lavender', category: 'aromatic', price: 20, description: 'Soft purple blooms with a relaxing, familiar aroma.', light: 'Direct sunlight', water: 'When soil is dry', tag: 'Lovely scent' },
  { id: 'jasmine', name: 'Jasmine', category: 'aromatic', price: 26, description: 'Graceful climbing stems and beautifully fragrant flowers.', light: 'Bright light', water: 'Regularly' },
  { id: 'rosemary', name: 'Rosemary', category: 'aromatic', price: 17, description: 'A sun-loving kitchen herb with fresh woody fragrance.', light: 'Direct sunlight', water: 'When soil is dry' },
  { id: 'spearmint', name: 'Spearmint', category: 'aromatic', price: 14, description: 'Fresh leaves for a fragrant, bright kitchen windowsill.', light: 'Bright indirect', water: 'Keep lightly moist' },
  { id: 'lemon-balm', name: 'Lemon Balm', category: 'aromatic', price: 16, description: 'Lively green leaves with a soft citrusy scent.', light: 'Bright light', water: 'Regularly' },
  { id: 'gardenia', name: 'Gardenia', category: 'aromatic', price: 34, description: 'Creamy blooms with an unmistakable floral fragrance.', light: 'Bright indirect', water: 'Keep lightly moist', tag: 'Gift pick' },

  { id: 'anthurium', name: 'Anthurium', category: 'flowering', price: 35, description: 'Glossy heart-shaped leaves and vivid waxy blooms.', light: 'Bright indirect', water: 'Weekly', tag: 'Statement plant' },
  { id: 'moth-orchid', name: 'Moth Orchid', category: 'flowering', price: 39, description: 'Sculptural stems with flowers that feel truly special.', light: 'Bright indirect', water: 'Every 1–2 weeks' },
  { id: 'african-violet', name: 'African Violet', category: 'flowering', price: 21, description: 'Velvety leaves framed by dainty jewel-toned flowers.', light: 'Bright indirect', water: 'When surface dries' },
  { id: 'rex-begonia', name: 'Rex Begonia', category: 'flowering', price: 27, description: 'An artistic mix of leaf shapes, textures, and tones.', light: 'Indirect light', water: 'Moderately' },
  { id: 'cyclamen', name: 'Cyclamen', category: 'flowering', price: 23, description: 'Delicate swept-back petals and wonderfully patterned leaves.', light: 'Bright indirect', water: 'Keep lightly moist' },
  { id: 'kalanchoe', name: 'Kalanchoe', category: 'flowering', price: 20, description: 'Pretty clusters of colorful blooms on a compact succulent.', light: 'Bright light', water: 'When soil is dry' },
].map((plant) => ({ ...plant, image: `${import.meta.env.BASE_URL}plants/${plant.id}.svg` }));

export const featuredPlants = ['snake-plant', 'golden-pothos', 'moth-orchid']
  .map((id) => plants.find((plant) => plant.id === id));

export function formatMoney(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2,
  }).format(amount);
}
