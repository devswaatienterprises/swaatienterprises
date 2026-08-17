import ProductCategoryPage from '@/components/ProductCategoryPage';

export const metadata = {
  title: 'Building & Joint Sealants - Swaati Enterprises',
  description: 'High-performance sealants for expansion joints, glazing, façade and structural applications.',
};

export default function BuildingAndJointSealantsPage() {
  const products = [
    {
      name: 'MYK Arment',
      description: 'MYK Arment sealants provide reliable solutions for sealing construction joints in buildings and infrastructure while preventing water ingress.',
      features: ['High performance joint sealants', 'Excellent adhesion to concrete and metal', 'Flexible movement accommodation'],
      applications: ['Expansion joints', 'Building facades', 'Structural joints'],
    },
    {
      name: 'MC Bauchemie',
      description: 'MC Bauchemie sealant systems provide durable joint sealing solutions for buildings exposed to movement, moisture and weather conditions.',
      features: ['Long lasting joint sealing systems', 'Strong adhesion to construction materials', 'Resistant to weather exposure'],
      applications: ['Concrete joints', 'Expansion joints', 'Building structures'],
    },
    {
      name: 'Sunanda',
      description: 'Sunanda joint sealants protect buildings from leakage and moisture penetration while maintaining flexibility in moving structural joints.',
      features: ['Durable sealant technology', 'Excellent bonding strength', 'Flexible sealing performance'],
      applications: ['Construction joints', 'Wet areas and bathrooms', 'Terrace and facade joints'],
    },
    {
      name: 'CICO',
      description: 'CICO sealant products protect building joints from water ingress while maintaining flexibility and long term durability.',
      features: ['Reliable joint sealing compounds', 'Good adhesion with construction surfaces', 'Long term sealing performance'],
      applications: ['Structural joints', 'Concrete expansion joints', 'Building repair works'],
    },
  ];

  return (
    <ProductCategoryPage
      title="Building & Joint Sealants"
      description="Swaati Enterprises supplies high performance building and joint sealants from trusted manufacturers. Our sealants accommodate structural movement while preventing water penetration in expansion joints, building facades and concrete structures."
      products={products}
    />
  );
}
