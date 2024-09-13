import { useCart } from "~/hooks/useCart"
import { Item } from "./Item";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "~/hooks/useAuth";
import { RSD } from "~/util/currency";

export function Cart() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const notify = () => toast.success("Purchase successful", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const buy = async () => {
    clearCart();
    navigate("/", { replace: true })
    notify();
  }

  return (
    cart!.length > 0 ? <div className="relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          {cart && cart.map(i => <Item key={i.image_name} image_name={i.image_name} type={i.type} reviews={i.reviews} price={i.price} model_year={i.model_year} brand={i.brand} size={i.size} name={i.name} inCart={true} />)}
        </div>
      </div>
      <div className="fixed right-0 top-0 h-full">
        <div className="w-96 h-full flex flex-col justify-center items-center gap-4">
          <h1>{user?.username}</h1>
          <p className="text-3xl font-bold">Total: {RSD.format(cart?.reduce((acc, item) => acc + item.price, 0) as number)}</p>
          {user ? <button className="text-4xl border-black border-4 p-4 rounded-xl" onClick={() => buy()}>Purchase</button> :
            <Link to="/auth" className="text-4xl border-black border-4 p-4 rounded-xl">Sign in</Link>}
        </div>
      </div>
    </div> : (<div className="flex flex-col justify-center items-center h-screen w-screen"><p>Cart is empty</p><Link to="/" className="underline">Go back</Link></div>)
  )
}
