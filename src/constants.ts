/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  calories: number;
}

export const CATEGORIES = [
  "Chicken Sandwiches",
  "Nuggets",
  "Sides",
  "Drinks",
  "Desserts",
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "cs-1",
    name: "Classic Crimson Sandwich",
    description: "A boneless breast of chicken seasoned to perfection, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
    price: 5.49,
    category: "Chicken Sandwiches",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop",
    calories: 440,
  },
  {
    id: "cs-2",
    name: "Spicy Crimson Sandwich",
    description: "A boneless breast of chicken seasoned with a spicy blend of peppers, freshly breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips.",
    price: 5.79,
    category: "Chicken Sandwiches",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop",
    calories: 460,
  },
  {
    id: "cs-3",
    name: "Grilled Chicken Sandwich",
    description: "A lemon-herb marinated boneless breast of chicken, grilled for a tender and juicy taste, served on a toasted Multigrain Bun with Green Leaf lettuce and tomato. Pairs well with Honey Roasted BBQ Sauce.",
    price: 6.49,
    category: "Chicken Sandwiches",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&auto=format&fit=crop",
    calories: 380,
  },
  {
    id: "ng-1",
    name: "Crimson Nuggets (8-count)",
    description: "Bite-sized pieces of boneless chicken breast, seasoned to perfection, freshly breaded and pressure cooked in 100% refined peanut oil.",
    price: 4.89,
    category: "Nuggets",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    calories: 250,
  },
  {
    id: "ng-2",
    name: "Grilled Nuggets (8-count)",
    description: "Bite-sized pieces of boneless chicken breast, marinated with a special blend of seasonings and grilled for a tender and juicy taste.",
    price: 5.29,
    category: "Nuggets",
    image: "https://images.unsplash.com/photo-1560684352-8497838122ad?q=80&w=800&auto=format&fit=crop",
    calories: 130,
  },
  {
    id: "sd-1",
    name: "Waffle Potato Fries",
    description: "Waffle-cut potatoes cooked in canola oil until crispy outside and tender inside. Sprinkled with Sea Salt.",
    price: 2.19,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    calories: 420,
  },
  {
    id: "sd-2",
    name: "Mac & Cheese",
    description: "A classic macaroni and cheese recipe featuring a special blend of cheeses including Cheddar, Parmesan and Romano.",
    price: 3.49,
    category: "Sides",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop",
    calories: 450,
  },
  {
    id: "dr-1",
    name: "Freshly-Brewed Iced Tea",
    description: "Freshly-brewed each day from a blend of tea leaves. Available sweetened with real cane sugar or unsweetened.",
    price: 1.99,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1499638472904-ea5c6178a300?q=80&w=800&auto=format&fit=crop",
    calories: 120,
  },
  {
    id: "dr-2",
    name: "Crimson Lemonade",
    description: "Classic lemonade made with real lemon juice, not from concentrate, containing only three ingredients: water, lemon juice and sugar.",
    price: 2.49,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1523472721958-978152f4d69b?q=80&w=800&auto=format&fit=crop",
    calories: 220,
  },
  {
    id: "ds-1",
    name: "Chocolate Chunk Cookie",
    description: "Our large, warm, gooey cookies are made with both semi-sweet dark and milk chocolate chunks, along with wholesome oats for a delicious touch.",
    price: 1.49,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    calories: 350,
  },
  {
    id: "ds-2",
    name: "Icedream Cone",
    description: "A delicious, dairy treat with a classic vanilla taste. Served in a sugar cone.",
    price: 1.49,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop",
    calories: 170,
  },
];

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  zip: string;
  hours: string;
  phone: string;
}

export const LOCATIONS: Location[] = [
  {
    id: "loc-1",
    name: "Crimson Bamenda Main",
    address: "Commercial Avenue",
    city: "Bamenda",
    zip: "NW001",
    hours: "6:30 AM - 10:00 PM (Closed Sunday)",
    phone: "+237 658-424-009",
  },
  {
    id: "loc-2",
    name: "Up Station Crimson",
    address: "Food Market Plaza",
    city: "Bamenda",
    zip: "NW002",
    hours: "6:30 AM - 10:00 PM (Closed Sunday)",
    phone: "+237 658-424-009",
  },
];
