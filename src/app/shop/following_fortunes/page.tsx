import BookPageData from "../components/BookPageData";
import followingFortunes from '../../assets/images/following_fortunes.png';
import BookPage from "../components/BookPage";

const FollowingFortunes = (props: {}) => {
    const data: BookPageData = {
        image: followingFortunes,
        summary: `<strong class='names'><i>Theo</i></strong>
        <br><br>
        I would do anything for my daughter. 
        Including marrying my sister's best friend. A man that drove me crazy because he was inexplicably calm. 
        A man that made me feel cared for in ways I didn't know possible.
        A man that would help me keep custody of my daughter.
        <br><br>
        And just when I thought everything was going right in my life, the Cult of Creatio reared its head and 
        threatened the most important person to me.
        <br><br>
        <em>My daughter.</em>
        <br><br>
        <strong class='names'><i>Oliver</i></strong>
        <br><br>
        I didn't make rash decisions. I was smart and methodical with my decisions. 
        But when it came to Theodora James, my best friend's sister, all rational thinking went out the window.
        <br><br>
        That's why I proposed on a whim in a coffee shop.
        <br><br>
        That's why I married her only a week later.
        <br><br>
        But how would I keep her safe when the cult that threatened our family was hidden in 
        the shadows we were only now bringing to light?
        <br><br>
        `,
        links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/Following-Fortunes-Advocates-Book-2-ebook/dp/B0DGMBBH5Z?ref_=ast_author_dp"
            },
            {
                name: "Goodreads",
                url: "https://www.goodreads.com/book/show/218683426-following-fortunes"
            },
            {
                name: "Playlist",
                url: "https://music.apple.com/us/playlist/following-fortunes-official-chapter-playlist/pl.u-V9D7mX9h3DLZvZ"
            }
        ],
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