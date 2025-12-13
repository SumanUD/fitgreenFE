import { products } from "../../../../data/home";
import ProductPage from "./ProductPage";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  // Create all variations of params (lowercase, original case, and mixed)
  const paramsSet = new Set();
  
  products.forEach((item) => {
    const lowerParam = item.title.toLowerCase().split(" ").join("-");
    paramsSet.add(lowerParam);
    // Also add original casing for backward compatibility
    paramsSet.add(item.title.split(" ").join("-"));
  });

  const params = Array.from(paramsSet).map(param => ({ param }));

  // If products is empty, return the hardcoded fallback
  if (params.length === 0) {
    return [
      { param: "power-bowl" },
      { param: "Power-Bowl" },
      { param: "vitality-bowl" },
      { param: "Vitality-Bowl" },
      { param: "harmony-bowl" },
      { param: "Harmony-Bowl" },
      { param: "lean-bowl" },
      { param: "Lean-Bowl" },
      { param: "sukoon-bowl" },
      { param: "Sukoon-Bowl" },
      { param: "sabzi-bowl" },
      { param: "Sabzi-Bowl" },
      { param: "utsav-bowl" },
      { param: "Utsav-Bowl" },
      { param: "janta-bowl" },
      { param: "Janta-Bowl" },
      { param: "jeevan-bowl" },
      { param: "Jeevan-Bowl" }
    ];
  }

  return params;
}

export default function Page({ params }) {
  const { param } = params;

  // Redirect if param is not lowercase (handle case-insensitive URLs)
  const normalizedParam = param.toLowerCase();
  if (param !== normalizedParam) {
    redirect(`/fitgreen-bowls/${normalizedParam}`);
  }

  const searchTerm = normalizedParam.split("-").join(" ");

  const theProd =
    products.find(
      (p) => p.title.toLowerCase() === searchTerm.toLowerCase()
    ) || null;

  return <ProductPage product={theProd} />;
}
