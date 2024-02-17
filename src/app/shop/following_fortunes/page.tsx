import BookPageData from "../components/BookPageData";
import followingFortunes from '../../assets/images/following_fortunes.png';
import BookPage from "../components/BookPage";

const FollowingFortunes = (props: {}) => {
    const data: BookPageData = {
        image: followingFortunes,
        img_height: 352,
        img_width: 220.5,
        summary: "<strong id='following_fortunes_text'>Coming Soon!</strong>",
        amazon_url: "",
        bn_url: "",
        playlist_url: "",
        id: "following_fortunes",
        media: []
    }

    return <BookPage data={data} />
}

export default FollowingFortunes;