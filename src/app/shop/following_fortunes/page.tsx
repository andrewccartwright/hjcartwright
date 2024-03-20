import BookPageData from "../components/BookPageData";
import followingFortunes from '../../assets/images/following_fortunes.png';
import BookPage from "../components/BookPage";

const FollowingFortunes = (props: {}) => {
    const data: BookPageData = {
        image: followingFortunes,
        summary: "<strong id='following_fortunes_text'>Coming Soon!</strong>",
        amazon_url: "",
        bn_url: "",
        playlist_url: "",
        id: "following_fortunes",
        media: []
    }

    return (
        <div className="book-page-wrapper">
            <BookPage data={data} />
        </div>
    )
}

export default FollowingFortunes;