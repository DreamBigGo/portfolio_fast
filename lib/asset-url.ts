/**
 * Préfixe un chemin d'asset `/public` par le basePath du site.
 * Indispensable en export statique GitHub Pages (servi sous /portfolio_fast) :
 * `next/image` et les href bruts n'appliquent pas le basePath d'eux-mêmes.
 */
export const assetUrl = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
