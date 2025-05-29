interface MenuItem {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  rating: number;
  price: number;
}

export const menuItems: MenuItem[] = [
  {
    id: "101",
    name: "Chocolate Cupcake",
    type: "Dessert",
    image: "/chocolate cupcake.jpg",
    description: "Rich chocolate cupcake topped with creamy frosting.",
    rating: 4.8,
    price: 3.99,
  },
  {
    id: "102",
    name: "Risotto",
    type: "Main",
    image: "/risotto.jpg",
    description: "Creamy Italian rice dish cooked in broth with Parmesan.",
    rating: 4.6,
    price: 14.99,
  },
  {
    id: "103",
    name: "Filet Mignon",
    type: "Main",
    image: "/filet mignon.jpg",
    description: "Tender cut of beef, perfectly seared and seasoned.",
    rating: 4.9,
    price: 28.99,
  },
  {
    id: "104",
    name: "Slice of Vanilla Cake",
    type: "Dessert",
    image: "/vanilla cake.jpg",
    description: "Moist vanilla cake slice with buttercream frosting.",
    rating: 4.7,
    price: 4.49,
  },
];
