import "./SnackBar.css";
import { MdAddShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { ShopContext } from "../../shop-context";

function SnackBar() {
  const { showSnackBar } = useContext(ShopContext);
  return (
    <div id={showSnackBar ? "showSB" : "hideSB"} className="snackBar">
      <div className="snackBarIcon">
        <MdAddShoppingCart />
      </div>
      <div className="snackBarTitle">Add item successfully!</div>
    </div>
  );
}

export default SnackBar;
