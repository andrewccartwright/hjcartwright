import Book from "./Book";
import NewRelease from "./NewRelease";
import Welcome from "./Welcome";
import dilutedTruths from "../../assets/images/diluted_truths.jpg";

const HomePage = (props: {}) => {
    const book: Book = {
        "name": "Diluted Truths\nThe Advocates: Book One",
        "tropes": ["7 Year Age Gap", "Dual POV", "Slow Burn", "Sunshine x Grumpy", "Forbidden Romance"],
        "url": "/shop/diluted_truths",
        "cover_image": dilutedTruths
    }

    return (
        <div id="home">
            <NewRelease book={book} />
            {/* <Welcome /> */}
        </div>
    )
}

export default HomePage;