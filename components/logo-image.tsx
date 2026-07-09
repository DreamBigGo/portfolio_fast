import { assetUrl } from "@/lib/asset-url";

interface LogoImageProps {
  /** Chemin du logo dans /public (ex. `/holinea-logo.svg`). */
  src: string;
  alt: string;
  /** Côté du carré d'affichage en pixels. */
  size?: number;
}

/**
 * Logo d'organisation servi depuis /public. `<img>` natif plutôt que
 * `next/image` : en export statique, ce dernier n'applique pas le basePath.
 */
export function LogoImage({ src, alt, size = 48 }: LogoImageProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assetUrl(src)}
      alt={alt}
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  );
}
