import { items } from "~/data/items";
import { Item } from "./Item";
import { useState } from "react";
import { ItemSize } from "~types";

export default function Body() {
  const [nameFilter, setNameFilter] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(0);
  const [reviewsFilter, setReviewsFilter] = useState(0);

  const filteredItems = items.filter(item => {
    return (item.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      item.brand.toLowerCase().includes(brandFilter.toLowerCase()) &&
      (typeFilter.toLowerCase() === "all" || item.type.toLowerCase() === typeFilter.toLowerCase())) &&
      (sizeFilter.toLowerCase() === "all" || (item.size as ItemSize[]).includes(sizeFilter as ItemSize)) &&
      (priceMin === priceMax || (item.price <= priceMax && item.price >= priceMin)) &&
      (reviewsFilter === 0 || (item.reviews && reviewsFilter >= (item.reviews.reduce((acc, cv) => acc + cv.stars, 0) / item.reviews.length)))
  })

  return (
    <main className="px-3 flex gap-3 w-full h-screen">
      <div className="border-slate-600 border-2 rounded-xl min-w-72 p-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="border-slate-600 border-2 p-2 rounded-xl" value={nameFilter} onChange={e => setNameFilter(e.target.value)} placeholder="Product name..." />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" className="border-slate-600 border-2 p-2 rounded-xl" value={brandFilter} onChange={e => setBrandFilter(e.target.value)} placeholder="Brand..." />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="type">Type</label>
          <select name="type" id="type" className="border-slate-600 border-2 p-2 rounded-xl bg-transparent" onChange={e => setTypeFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="casual">Casual</option>
            <option value="sport">Sport</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="size">Size</label>
          <select name="size" id="size" className="border-slate-600 border-2 p-2 rounded-xl bg-transparent" onChange={e => setSizeFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price-min">Price from</label>
          <input type="number" id="price-min" className="border-slate-600 border-2 p-2 rounded-xl" value={priceMin} onChange={e => setPriceMin(parseInt(e.target.value))} />

          <label htmlFor="price-max">Price to</label>
          <input type="number" id="price-max" className="border-slate-600 border-2 p-2 rounded-xl" value={priceMax} onChange={e => setPriceMax(parseInt(e.target.value))} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="reviews">Reviews</label>
          <select name="reviews" id="reviews" className="border-slate-600 border-2 p-2 rounded-xl bg-transparent" onChange={e => setReviewsFilter(e.target.value !== "all" ? parseInt(e.target.value) : 0)}>
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="flex-grow p-3 flex flex-wrap gap-10 justify-evenly">
        {filteredItems.map(item => {
          return <Item
            name={item.name}
            brand={item.brand}
            image_name={item.image_name}
            type={item.type}
            reviews={item.reviews}
            price={item.price}
            model_year={item.model_year}
            size={item.size}
            inCart={false}

            key={item.name}
          />
        })}
      </div>
    </main>
  );
}
