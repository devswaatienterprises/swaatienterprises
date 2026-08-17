import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Industrial Solutions - Swaati Enterprises',
  description: 'Corrosion protection, coatings, sealants and specialty industrial products.',
};

export default function IndustrialSolutionPage() {
  const products = [
    {
      name: 'SWAATI ZINC COAT',
      description: 'Zinc-rich epoxy primer',
      features: ['Cathodic protection', 'Excellent adhesion', 'Abrasion resistant'],
      applications: ['Steel structures', 'Pipelines', 'Tanks'],
    },
    {
      name: 'SWAATI POLY COAT',
      description: 'Polyurethane protective coating',
      features: ['UV resistant', 'Chemical resistant', 'Flexible'],
      applications: ['Facades', 'Bridges', 'Infrastructure'],
    },
    {
      name: 'SWAATI SEAL PU',
      description: 'Polyurethane joint sealant',
      features: ['High movement', 'UV stable', 'Paintable'],
      applications: ['Expansion joints', 'Curtain walls', 'Facades'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Industrial Solutions"
      description="Specialized solutions for industrial protection, corrosion resistance and infrastructure durability."
      products={products}
    />
  );
}
