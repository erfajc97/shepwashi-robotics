import type { ProductDetail } from '@/app/data/productDetails';
import { products, categoryLabel } from '@/app/data/products';

export interface RelatedCard {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  image: string;
  href: string;
}

const toCard = (p: (typeof products)[number]): RelatedCard => ({
  slug: p.slug,
  name: p.nombre,
  tagline: p.tagline,
  category: categoryLabel(p.categoria),
  image: p.imagen,
  href: p.href,
});

/**
 * Tarjetas de "Otros modelos" desde src/app/data/products.ts (catálogo).
 * `related.slugs` fija la lista (slugs del catálogo; los desconocidos se ignoran). Sin `related`,
 * se usan los de la misma categoría y, si faltan, el resto del catálogo en su orden.
 */
export function getRelatedCards(product: ProductDetail, max = 4): RelatedCard[] {
  const self = products.find((p) => p.slug === product.slug);
  const pool = products.filter((p) => p.slug !== product.slug && p.href !== `/producto/${product.slug}`);
  const picked = product.related?.slugs
    ? product.related.slugs.map((s) => pool.find((p) => p.slug === s)).filter((p): p is (typeof pool)[number] => Boolean(p))
    : [
        ...pool.filter((p) => p.categoria === self?.categoria),
        ...pool.filter((p) => p.categoria !== self?.categoria),
      ];
  return picked.slice(0, max).map(toCard);
}
