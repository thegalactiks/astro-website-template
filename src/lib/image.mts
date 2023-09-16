import { parse } from "path";

export function dynamicViteAssetImport(filePath: string) {
  const { name, ext } = parse(filePath);

  switch (ext) {
    case ".webp":
      return import(`../assets/${name}.webp`);
    case ".jpg":
      return import(`../assets/${name}.jpg`);
    case ".png":
      console.log("png");
      return import(`../assets/${name}.png`);
    case ".svg":
      return import(`../assets/${name}.svg`);
    case ".gif":
      return import(`../assets/${name}.gif`);
    case ".avif":
      return import(`../assets/${name}.avif`);
    case ".jpeg":
      return import(`../assets/${name}.jpeg`);
    default:
      return import(`../assets/${name}.jpg`);
  }
}
