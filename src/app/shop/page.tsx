import Link from "next/link";
import theAdvocates from "../assets/images/the_advocates.jpg";
import Image from "next/image";
import '../css/Shop.css';
import ShopLink from "./components/ShopLink";
import Book from "../components/home/Book";

const Shop = (props: {}) => {
    const book: Book = {
        "name": "Diluted Truths\nThe Advocates: Book One",
        "description": "",
        "url": "/shop/diluted_truths",
        "cover_image": theAdvocates,
        "img_height": 352,
        "img_width": 220.5
    }

    return (
        <div id="shop-container">
            <div id="shop-links-section">
                <ShopLink book={book} />
            </div>
        </div>
        
    )
}

export default Shop;