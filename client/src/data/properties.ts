export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  size: string;
  type: string;
  bedrooms?: number;
  bathrooms?: number;
  imageUrl: string;
  featured: boolean;
}

export const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Karen Residential Plot",
    description: "Prime residential plot in the prestigious Karen area with excellent infrastructure and proximity to major amenities.",
    location: "Karen, Nairobi",
    price: "8500000",
    size: "0.5 acres (21,780 sq ft)",
    type: "plot",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    featured: true,
  },
  {
    id: "2",
    title: "Prime Residential Land",
    description: "Excellent residential plot in Kiambu Road area with ready infrastructure and great accessibility.",
    location: "Kiambu Road",
    price: "6500000",
    size: "0.25 acres (10,890 sq ft)",
    type: "plot",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    featured: true,
  },
  {
    id: "3",
    title: "Investment Land",
    description: "Excellent investment opportunity with great potential for future development in growing Machakos area.",
    location: "Machakos County",
    price: "2500000",
    size: "5 acres (217,800 sq ft)",
    type: "plot",
    imageUrl: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    featured: true,
  },
  {
    id: "4",
    title: "Premium Estate Land",
    description: "Exceptional large plot in the exclusive Runda area with great potential for luxury development.",
    location: "Runda Estate",
    price: "18000000",
    size: "1.2 acres (52,272 sq ft)",
    type: "plot",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    featured: true,
  },
  {
    id: "5",
    title: "Commercial Plot",
    description: "Prime commercial plot in the heart of Westlands with excellent visibility and accessibility.",
    location: "Westlands, Nairobi",
    price: "25000000",
    size: "0.25 acres (10,890 sq ft)",
    type: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    featured: true,
  },
  {
    id: "6",
    title: "Affordable Development Plot",
    description: "Perfect starter plot for development in a growing area with good infrastructure and peaceful environment.",
    location: "Ongata Rongai",
    price: "4200000",
    size: "0.4 acres (17,424 sq ft)",
    type: "plot",
    imageUrl: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    featured: true,
  },
];