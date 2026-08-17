import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Structural Repair - Swaati Enterprises',
  description: 'Repair mortars, bonding agents, injection systems and CFRP solutions.',
};

export default function StructuralRepairPage() {
  const products = [
    {
      name: 'Fosroc',
      description: 'Fosroc provides advanced structural repair systems designed to restore damaged concrete and extend the service life of structures.',
      features: ['High strength repair materials', 'Excellent bonding with concrete', 'Durable long term performance'],
      applications: ['Concrete repair', 'Structural strengthening', 'Infrastructure rehabilitation'],
    },
    {
      name: 'MC-Bauchemie',
      description: 'MC-Bauchemie structural repair systems are designed for repairing and protecting concrete in demanding construction environments.',
      features: ['High performance repair mortars', 'Strong adhesion to concrete', 'Improves structural durability'],
      applications: ['Concrete repair works', 'Bridge structures', 'Industrial buildings'],
    },
    {
      name: 'Dr. Fixit',
      description: 'Dr. Fixit repair products help restore damaged concrete surfaces and prevent further deterioration of structures.',
      features: ['Easy application on site', 'Strong bonding properties', 'Reliable repair performance'],
      applications: ['Concrete repairs', 'Wall restoration', 'Structural maintenance'],
    },
    {
      name: 'MYK Arment',
      description: 'MYK Arment offers repair and rehabilitation systems for strengthening concrete structures and improving long term durability.',
      features: ['High bond repair systems', 'Durable repair performance', 'Suitable for structural strengthening'],
      applications: ['Concrete repair areas', 'Structural strengthening', 'Industrial construction'],
    },
    {
      name: 'Penetron',
      description: 'Penetron crystalline technology protects concrete and helps repair structures by sealing pores and preventing water penetration.',
      features: ['Crystalline concrete protection', 'Improves durability of structures', 'Long lasting waterproof protection'],
      applications: ['Basements', 'Water retaining structures', 'Concrete rehabilitation'],
    },
    {
      name: 'Sunanda',
      description: 'Sunanda repair systems help restore damaged concrete and protect structures from corrosion and deterioration.',
      features: ['High quality repair materials', 'Improves surface strength', 'Long lasting structural protection'],
      applications: ['Concrete repair', 'Structural maintenance', 'Building restoration'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Structural Repair & Strengthening"
      description="Advanced materials for concrete repair, strengthening and rehabilitation of buildings and infrastructure."
      products={products}
    />
  );
}
