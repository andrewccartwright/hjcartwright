import Book from "./Book";
import NewRelease from "./NewRelease";
// import dilutedTruths from "../../assets/images/diluted_truths/diluted_truths.jpg";
// import followingFortunes from "../../assets/images/following_fortunes/following_fortunes.png";
import fatesDemise from "../../assets/images/fates_demise/fates_demise.jpg";

const HomePage = (props: {}) => {
    // const book: Book = {
    //     "name": "Diluted Truths\nThe Advocates: Book One",
    //     "tropes": ["7 Year Age Gap", "Dual POV", "Slow Burn", "Sunshine x Grumpy", "Forbidden Romance"],
    //     "url": "/shop/diluted_truths",
    //     "cover_image": dilutedTruths
    // }

    // const book: Book = {
    //     name: "Following Fortunes\nThe Advocates: Book Two",
    //     tropes: ["He Falls First", "Marriage of Convenience", "Best Friend's Sister", "Romantic Suspense", "Single Mom"],
    //     url: "/shop/following_fortunes",
    //     cover_image: followingFortunes
    // }

    const book: Book = {
        "name": `Fate's Demise`,
        "tropes": ["Slow Burn", "Healing Heroine", "Tortured Past MMC", "Forced Proximity"],
        "url": "/shop/fates_demise",
        "cover_image": fatesDemise
    }

    return (
        <div id="home">
            <NewRelease book={book} />
        </div>
    )
}

export default HomePage;