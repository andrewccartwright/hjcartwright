import Book from "./Book";
import NewRelease from "./NewRelease";
import Welcome from "./Welcome";
import theAdvocates from "../../assets/images/the_advocates.jpg";

const HomePage = (props: {}) => {
    const book: Book = {
        "name": "Diluted Truths\nThe Advocates: Book One",
        "description": "",
        "url": "/hjcartwright/shop/diluted_truths",
        "cover_image": theAdvocates,
        "img_height": 352,
        "img_width": 220.5
    }

    return (
        <div>
            <NewRelease book={book} />
            <Welcome />
        </div>
    )
}

export default HomePage;