import logo from "./logo.png";
import logo2 from "./logo2.png";

import remove_icon_red from "./remove_icon_red.png";
import add_icon_green from "./add_icon_green.png";

import biryani from "./biryani.jpeg";
import tiffin from "./tiffin.jpeg";

import chinese from "./chinese.jpeg";

import drink from "./drink.jpeg";



import beverage from "./beverages.jpg";

import biryani1 from "./biryani1.jpeg";
import biryani2 from "./biryani2.jpeg";
import biryani3 from "./biryani3.jpeg";
import biryani4 from "./biryani4.jpeg";
import biryani5 from "./biryani5.jpeg";

import chinese1 from "./chinese1.jpeg";
import chinese2 from "./chinese2.jpeg";
import chinese3 from "./chinese3.jpeg";
import chinese4 from "./chinese4.jpg";
import chinese5 from "./chinese5.jpg";

import tiffin1 from "./tiffin1.jpeg";
import tiffin2 from "./tiffin2.jpeg";
import tiffin3 from "./tiffin3.jpeg";
import tiffin4 from "./tiffin4.jpeg";
import tiffin5 from "./tiffin5.jpeg";


import drink1 from "./drink1.jpeg";
import drink2 from "./drink2.jpeg";
import drink3 from "./drink3.jpeg";
import drink4 from "./drink4.jpeg";
import drink5 from "./drink5.jpeg";





import beverages_1 from "./beverages_1.jpg";
import beverages_2 from "./beverages_2.jpg";
import beverages_3 from "./beverages_3.jpg";
import beverages_4 from "./beverages_4.jpg";


export const assets = {
  logo,
  logo2,

  remove_icon_red,
  add_icon_green
};

export const menu_list = [
  {
    menu_name: "biryani",
    menu_image: biryani,
  },
  {
    menu_name: "Chinese",
    menu_image: chinese,
  },
  {
    menu_name: "tiffin",
    menu_image: tiffin,
  },
  
  
  {
    menu_name: "drink",
    menu_image: drink,
  },
  
  
  {
    menu_name: "Beverages",
    menu_image: beverage,
  },
];

export const food_list = [
  // biryani
  {
  _id: "1",
  name: "Chicken Biryani",
  image: biryani1,
  price: 250,
  description:
    "Aromatic basmati rice cooked with tender chicken pieces and spices.",
  category: "biryani",
  },
{
  _id: "2",
  name: "Grilled Lamb Chops",
  image: biryani2,
  price: 480,
  description:
    "Juicy lamb chops marinated in herbs and grilled to perfection.",
  category: "biryani",
},
{
  _id: "3",
  name: "BBQ Chicken Wings",
  image: biryani3,
  price: 370,
  description: "Spicy BBQ wings served with a side of ranch dressing.",
  category: "biryani",
},
{
  _id: "4",
  name: "Fish Tacos",
  image: biryani4,
  price: 280,
  description:
    "Crispy fish fillets wrapped in soft tortillas with fresh salsa.",
  category: "biryani",
},
{
  _id: "5",
  name: "Beef Steak",
  image: biryani5,
  price: 650,
  description: "Tender and juicy beef steak cooked to your preference.",
  category: "biryani",
}, 

  // chinese
  {
    _id: "6",
    name: "Dragon Roll",
    image: chinese1,
    price: 620, // Updated price
    description: "A vibrant roll with tempura shrimp, avocado, and eel sauce.",
    category: "Chinese",
  },
  {
    _id: "7",
    name: "Crispy Tempura Noodles",
    image: chinese2,
    price: 490, // Updated price
    description: "Udon noodles topped with crispy tempura vegetables and shrimp.",
    category: "Chinese",
  },
  {
    _id: "8",
    name: "Pork Katsu",
    image: chinese3,
    price: 540, // Updated price
    description: "Crispy breaded pork cutlets served with savory curry sauce.",
    category: "Chinese",
  },
  {
    _id: "9",
    name: "Seaweed Miso Soup",
    image: chinese4,
    price: 390, // Updated price
    description: "A warm soup featuring tofu, seaweed, and a dash of sesame oil.",
    category: "Chinese",
  },
  {
    _id: "10",
    name: "Spicy Tonkotsu Ramen",
    image: chinese5,
    price: 600, // Updated price
    description: "Rich tonkotsu broth with ramen, marinated egg, and spicy pork belly.",
    category: "Chinese",
  },
  
  //tiffins
  {
    _id: "11",
    name: "puri",
    image: tiffin1,
    price: 450,
    description: "Warm chocolate cake with a gooey molten center.",
    category: "tiffin",
  },
  {
    _id: "12",
    name: "idly",
    image: tiffin2,
    price: 275,
    description:
      "Creamy cheesecake with a graham cracker crust and fresh berries.",
    category: "tiffin",
  },
  {
    _id: "13",
    name: "vada",
    image: tiffin3,
    price: 250,
    description:
      "Classic Italian dessert with layers of coffee-soaked sponge and mascarpone cream.",
    category: "tiffin",
  },
  {
    _id: "14",
    name: "bonda",
    image: tiffin4,
    price: 360,
    description:
      "Traditional apple pie with a buttery crust and cinnamon filling.",
    category: "tiffin",
  },
  {
    _id: "15",
    name: "chapathi",
    image: tiffin5,
    price: 220,
    description:
      "Fudgy brownie topped with ice cream, whipped cream, and chocolate syrup.",
    category: "tiffin",
  },
  {
    _id: "16",
    name: "Mojito",
    image: drink1,
    price: 240,
    description:
      "A refreshing cocktail with mint, lime, rum, and soda water, perfect for hot days..",
    category: "drink",
  },
  {
    _id: "17",
    name: "Margarita",
    image: drink2,
    price: 220,
    description: " A tangy blend of tequila, lime juice, and orange liqueur, often served in a salt-rimmed glass.",
    category: "drink",
  },
  {
    _id: "18",
    name: "Espresso Martini",
    image: drink3,
    price: 250,
    description: "A sophisticated mix of espresso, vodka, and coffee liqueur, ideal for an after-dinner boost.",
    category: "drink",
  },
  {
    _id: "19",
    name: "Pina Colada",
    image: drink4,
    price: 280,
    description:
      "A creamy tropical drink made with rum, coconut cream, and pineapple juice, blended with ice.",
    category: "drink",
  },
  {
    _id: "20",
    name: "Bubble Tea",
    image: drink5,
    price: 210,
    description: "A sweet, tea-based beverage with chewy tapioca pearls, available in various flavors and textures.",
    category: "drink",
  },

  
  
  // Beverages
  
{
  _id: "21",
  name: "Tropical Lemonade",
  image: beverages_1,
  price: 300,
  description: "A refreshing blend of lemons and tropical fruits with a hint of mint.",
  category: "Beverages",
},
{
  _id: "22",
  name: "Chilled Espresso",
  image: beverages_2,
  price: 350,
  description: "Bold espresso served chilled, topped with a splash of milk and cocoa.",
  category: "Beverages",
},
{
  _id: "23",
  name: "Creamy Mango Lassi",
  image: beverages_3,
  price: 280,
  description: "A traditional Indian yogurt drink blended with ripe mangoes and a hint of cardamom.",
  category: "Beverages",
},
{
  _id: "24",
  name: "Chamomile Citrus Tea",
  image: beverages_4,
  price: 120,
  description: "A calming blend of chamomile flowers and citrus notes for a relaxing experience.",
  category: "Beverages",
},

]