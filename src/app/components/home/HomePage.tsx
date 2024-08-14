import Book from "./Book";
import NewRelease from "./NewRelease";
// import dilutedTruths from "../../assets/images/diluted_truths.jpg";
import followingFortunes from "../../assets/images/following_fortunes.png";

const HomePage = (props: {}) => {
    // const book: Book = {
    //     "name": "Diluted Truths\nThe Advocates: Book One",
    //     "tropes": ["7 Year Age Gap", "Dual POV", "Slow Burn", "Sunshine x Grumpy", "Forbidden Romance"],
    //     "url": "/shop/diluted_truths",
    //     "cover_image": dilutedTruths
    // }

    const book: Book = {
        name: "Following Fortunes\nThe Advocates: Book Two",
        tropes: ["7 Year Age Gap", "Dual POV", "Slow Burn", "Sunshine x Grumpy", "Forbidden Romance"],
        url: "/shop/following_fortunes",
        cover_image: followingFortunes
    }

    return (
        <div id="home">
            <NewRelease book={book} />
        </div>
    )
}

export default HomePage;