import { Item } from "~types";

export const items: Item[] = [
  {
    name: "The North Face M S/S EASY TEE",
    type: "casual",
    size: ["XS", "S", "M", "L"],
    brand: "The North Face",
    model_year: 2024,
    price: 4199,
    reviews: null,
    image_name: "i1.jpg"
  },
  {
    name: "Champion CH T-SHIRT",
    type: "casual",
    size: ["S", "L"],
    brand: "Champion",
    model_year: 2023,
    price: 2499,
    reviews: null,
    image_name: "i2.jpg"
  },
  {
    name: "Champion SS Tee",
    type: "casual",
    size: ["S", "M", "XXL"],
    brand: "Champion",
    model_year: 2024,
    price: 3199,
    reviews: null,
    image_name: "i3.jpg"
  },
  {
    name: "Nike Giannis",
    type: "sport",
    size: ["L", "XL"],
    brand: "Nike",
    model_year: 2024,
    price: 5299,
    reviews: [{ username: "Alex B", bought_at: new Date("2024-08-08").toDateString(), stars: 5, comment: "cool" }],
    image_name: "i4.jpg"
  },
  {
    name: "TEXTURED STRETCH SHIRT",
    type: "business",
    size: ["S", "M", "XL"],
    brand: "Zara",
    model_year: 2024,
    price: 3990,
    reviews: null,
    image_name: "i5.jpg"
  },
  {
    name: "TEXTURED TWILL SHIRT",
    type: "business",
    size: ["S", "M", "L"],
    brand: "Zara",
    model_year: 2024,
    price: 4590,
    reviews: [{ username: "John D", bought_at: new Date("2024-05-25").toDateString(), stars: 4, comment: "could be better" }],
    image_name: "i6.jpg"
  },
  {
    name: "Columbia Silver Ridge™",
    type: "casual",
    size: ["S", "M", "L"],
    brand: "Columbia",
    model_year: 2022,
    price: 7499,
    reviews: null,
    image_name: "i7.jpg"
  },
  {
    name: "Ellesse MENS",
    type: "sport",
    size: ["XS", "S", "M", "L"],
    brand: "Ellesse",
    model_year: 2024,
    price: 8999,
    reviews: null,
    image_name: "i8.jpg"
  },
  {
    name: "adidas Z.N.E.",
    type: "sport",
    size: ["S", "M", "L"],
    brand: "Adidas",
    model_year: 2024,
    price: 11999,
    reviews: [{ username: "Jane D", bought_at: new Date("2024-03-20").toDateString(), stars: 3, comment: null }],
    image_name: "i9.jpg"
  },
  {
    name: "Nike Sportswear Tech Fleece",
    type: "sport",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    brand: "Nike",
    model_year: 2024,
    price: 9099,
    reviews: [{ username: "Mike C", bought_at: new Date("2024-04-12").toDateString(), stars: 5, comment: null },
    { username: "Don V", bought_at: new Date("2024-06-28").toDateString(), stars: 4, comment: "too expensive" }
    ],
    image_name: "i10.jpg"
  },
]
