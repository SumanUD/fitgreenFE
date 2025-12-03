import { products } from "../../../../data/home";
import ProductPage from "./ProductPage";

export function generateStaticParams() {
  return products.map((item) => ({
    param: item.title.toLowerCase().split(" ").join("-"),
  }));
}

export default function Page({ params }) {
  const { param } = params;

  const theProd =
    products.find(
      (p) => p.title.toLowerCase() === param.split("-").join(" ")
    ) || null;

  return <ProductPage product={theProd} />;
}
