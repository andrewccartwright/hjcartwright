import dilutedTruths from "../assets/images/diluted_truths/diluted_truths.jpg";
import followingFortunes from '../assets/images/following_fortunes/following_fortunes.png';
import fatesDemise from '../assets/images/fates_demise/fates_demise.jpg';
import '../css/Shop.css';
import ShopLink from "./components/ShopLink";
import Book from "../components/home/Book";

const Shop = (props: {}) => {
    const books: Book[] = [
        {
            "name": `Diluted Truths<br>
            The Advocates: Book One`,
            "tropes": ["7 Year Age Gap", "Dual POV", "Slow Burn", "Sunshine x Grumpy", "Forbidden Romance"],
            "url": "/shop/diluted_truths",
            "cover_image": dilutedTruths
        },
        {
            "name": `Following Fortunes
            <br>
            The Advocates: Book Two`,
            "tropes": [],
            "url": "/shop/following_fortunes",
            "cover_image": followingFortunes
        },
        {
            "name": `Fate's Demise
            <br>
            The Advocates: Book Three`,
            "tropes": ["Slow Burn", "Healing Heroine", "Tortured Past MMC", "Forced Proximity"],
            "url": "/shop/fates_demise",
            "cover_image": fatesDemise
        }
    ]

    return (
        <div id="shop-container">
            <div id="shop-links-section">
                {
                    books.map((book, i) => {
                        return <ShopLink book={book} key={i} />
                    })
                }
            </div>
        </div>
        
    )
}

export default Shop;