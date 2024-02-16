import Book from "./Book";
import NewRelease from "./NewRelease";
import Welcome from "./Welcome";
import theAdvocates from "../../assets/images/the_advocates.jpg";

const HomePage = (props: {}) => {
    const book: Book = {
        "name": "Diluted Truths\nThe Advocates: Book One",
        "description": "",
        "url": "/shop",
        "cover_image": theAdvocates
      }

    return (
        <div>
            <NewRelease book={book} />
            <Welcome />
        </div>
    )
}

export default HomePage;