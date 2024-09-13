import { Link } from "react-router-dom"
import CartIcon from "/cart.svg"
import ProfileIcon from "/profile.svg"
import { useCart } from "~/hooks/useCart"
import { useAuth } from "~/hooks/useAuth";

export function Navbar() {
  const { cart } = useCart();
  const { user } = useAuth();

  return (
    <div className="p-3">
      <div className="border-slate-600 border-2 rounded-xl w-full min-h-16 flex justify-between items-center px-20">
        <Link to="/" className="text-2xl">FE</Link>
        <nav className="flex-grow">
          <ul className="flex justify-end gap-4">
            <Link to="/cart" className="flex items-center gap-1">
              Cart
              {cart!.length > 0 &&
                <span>({cart!.length})</span>
              }
              <img src={CartIcon} alt="cart" className="w-8" />
            </Link>
            {!user ? <Link to="/auth" className="flex items-center gap-1">
              Sign in
              <img src={ProfileIcon} alt="profile" className="w-8" />
            </Link> : <p className="flex items-center">Signed in as: {user.username}</p>}
          </ul>
        </nav>
      </div>
    </div >
  )
}
