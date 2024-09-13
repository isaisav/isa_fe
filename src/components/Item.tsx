import { useState } from "react";
import type { Item } from "~types";
import { ItemSize } from "./ItemSize";
import { useCart } from "~/hooks/useCart";
import { RSD } from "~/util/currency";

export function Item({ name, size, model_year, price, reviews, type, image_name, brand, inCart }: Item & { inCart: boolean }) {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const { addToCart, removeFromCart } = useCart();
  const [currentSize, setCurrentSize] = useState<string>("");

  const changeSize = (s: string) => {
    setCurrentSize(s);
  }

  return (
    <div className="w-96 flex flex-col items-center relative" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      {showDetails && !inCart &&
        <div className="absolute w-full h-full backdrop-blur-sm bg-slate-100/70 flex flex-col justify-evenly items-center">
          <div className="flex-grow flex justify-evenly items-center flex-col">
            <p>Type: {type}</p>
            <p>Season: {model_year}</p>
            <p>Reviews{reviews && "(" + reviews.length + ")"}: {(reviews && reviews.length > 0) ? (reviews?.reduce((acc, cv) => acc + cv.stars, 0) / reviews?.length) : "None"}</p>
            <div className="flex gap-2">
              {Array.isArray(size) && size.map(s => {
                return (
                  <ItemSize key={s} size={s} onClick={changeSize} />
                )
              })}
            </div>
          </div>
          <button className="w-full bg-slate-600 text-white flex-grow-[2]" onClick={() => addToCart({ name, image_name, size: currentSize, brand, model_year, price, reviews, type })}>Add to cart</button>
        </div>
      }
      <div className="flex justify-center max-h-72">
        <img src={"/" + image_name} alt={name} className="p-3 w-3/4 object-contain" />
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-2xl">{name}</p>
        {!inCart ?
          <p className="text-lg">{brand}</p> : <p>{size ? size : "M"}</p>}
        <p className="font-extrabold">{RSD.format(price)}</p>
        {inCart && <p onClick={() => removeFromCart(name, !Array.isArray(size) ? size : "M")} className="p-2 border-2 border-red-400 hover:bg-red-400 hover:text-white rounded-l self-center cursor-pointer">Remove from cart</p>}
      </div>
    </div>
  )
}
