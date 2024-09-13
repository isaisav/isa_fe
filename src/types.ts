import { Dispatch, ReactNode, SetStateAction } from "react"

export type Profile = {
  first_name: string,
  last_name: string
  email: string,
  phone: string,
  address: string
}

export type User = {
  username: string,
  password: string,
  profile?: Profile
}

export type AuthContextType = {
  user: User | null,
  setUser: Dispatch<SetStateAction<User | null>>
}

export type CartContextType = {
  cart: Item[] | null,
  addToCart: (arg0: Item) => void,
  removeFromCart: (arg0: string, arg1: string) => void,
  clearCart: () => void
}

export type Props = {
  children: ReactNode
}

export type ItemType = "casual" | "sport" | "business";
export type ItemSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
type ItemStars = 1 | 2 | 3 | 4 | 5;
type ItemReview = {
  username: string,
  bought_at: string,
  stars: ItemStars,
  comment: string | null
}

export type Item = {
  name: string,
  type: ItemType,
  size: ItemSize[] | ItemSize | string,
  brand: string,
  model_year: number,
  price: number,
  reviews: ItemReview[] | null,
  image_name: string
}

export type Size = {
  id: number,
  name: string
}
