import type { NextConfig } from "next";

/**
 * Le site est déployé en **export statique** sur GitHub Pages (dépôt projet),
 * servi sous le sous-chemin `/portfolio_fast`. En conséquence :
 * - `output: 'export'` génère un dossier `out/` 100 % statique ;
 * - `basePath`/`assetPrefix` préfixent liens et assets par `/portfolio_fast` ;
 * - `images.unoptimized` désactive l'optimiseur serveur (indisponible en statique) ;
 * - `trailingSlash` garantit un `index.html` par route (compatible Pages).
 */
const basePath = "/portfolio_fast";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
