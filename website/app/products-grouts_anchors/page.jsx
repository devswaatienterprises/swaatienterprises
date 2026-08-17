import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Grouts & Anchors - Swaati Enterprises',
  description: 'Non-shrink grouts, epoxy grouts and chemical anchor systems.',
};

export default function GroutsAnchorsPage() {
  const products = [
    {
      name: 'Fosroc',
      description: 'Fosroc grouting and anchoring systems are designed for precision installation of machinery, base plates and structural elements. These products ensure accurate load transfer and long term durability in demanding industrial environments.',
      features: ['High strength non-shrink grout', 'Excellent flow and workability', 'Reliable performance under heavy loads'],
      applications: ['Machinery foundations', 'Base plate grouting', 'Structural column supports'],
    },
    {
      name: 'MC Bauchemie',
      description: 'MC Bauchemie provides high performance grouting and anchoring solutions for infrastructure and industrial projects where precision and durability are critical.',
      features: ['High compressive strength', 'Controlled expansion properties', 'Durable performance in demanding environments'],
      applications: ['Equipment foundations', 'Bridge bearings', 'Industrial machinery installations'],
    },
    {
      name: 'CICO',
      description: 'CICO grouting compounds are widely used for structural fixing, machinery installation and repair works where strong bonding and dimensional stability are required.',
      features: ['Reliable non-shrink grout systems', 'Strong bonding with concrete surfaces', 'Easy mixing and application'],
      applications: ['Base plate grouting', 'Structural fixing works', 'Concrete repair zones'],
    },
    {
      name: 'MYK Arment',
      description: 'MYK Arment grouts and anchoring systems provide high strength solutions for equipment installation and structural fixing in construction and industrial projects.',
      features: ['High strength precision grouts', 'Controlled expansion properties', 'Durable structural performance'],
      applications: ['Machinery base plates', 'Structural connections', 'Industrial equipment installation'],
    },
    {
      name: 'Sika',
      description: 'Sika anchoring and grouting systems are trusted worldwide for precision installation of machinery and structural components requiring high strength bonding.',
      features: ['High load bearing capacity', 'Reliable chemical anchoring systems', 'Long term structural performance'],
      applications: ['Rebar anchoring', 'Structural fixings', 'Industrial machinery foundations'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Grouts & Anchors"
      description="Precision grouting and anchoring solutions for machinery foundations, equipment installation and structural connections. Our products ensure accurate load transfer and long-term performance."
      products={products}
    />
  );
}
