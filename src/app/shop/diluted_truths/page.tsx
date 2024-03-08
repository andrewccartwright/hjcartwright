import BookPage from "../components/BookPage";
import BookPageData from "../components/BookPageData";
import dilutedTruths from "../../assets/images/diluted_truths.jpg";
import image1 from '../../assets/images/diluted_truths_1.png';
import image2 from '../../assets/images/diluted_truths_2.png';
import image3 from '../../assets/images/diluted_truths_3.jpg';
import image4 from '../../assets/images/diluted_truths_4.jpg';
import image5 from '../../assets/images/diluted_truths_5.png';
import Image from "next/image";


const DilutedTruths = (props: {}) => {
    const data: BookPageData = {
        image: dilutedTruths,
        summary: "<strong class='names'><i>Jackie</i></strong>\n\nHave you ever found yourself in a situation that just seems to get messier by the second? Well, I have. Quite a few times. But researching the Cult of Creatio was slowly becoming the messiest situation yet.\n\nTo make matters worse, I was slowly falling for the one man I shouldn’t. The man my mentor had sworn me off. The man who was slowly invading my every thought. The man who decided to help me research the cult and I was now spending almost every day with. That man was William Bly.\n\n<strong class='names'><i>Will</i></strong>\n\nLove wasn’t something I did. It was something I avoided. I had spent a lifetime keeping the darkness within myself hidden. Love could expose it. I avoided it like the plague.\n\nYet, every time I looked at Jackie James, the darkness disappeared bit by bit. She was slowly becoming my world. But, I couldn’t have her. Couldn’t love her.\n\nRight?",
        amazon_url: "https://www.amazon.com/Diluted-Truths-Advocates-Book-1-ebook/dp/B0CV4SSZJK?ref_=ast_author_mpb",
        bn_url: "",
        playlist_url: "",
        goodreads_url: "https://www.goodreads.com/book/show/207672080-diluted-truths",
        id: "diluted_truths",
        media: [image1, image2, image3, image4, image5]
    }

    return (
        <div>
            <BookPage data={data} />
            <div id="media-section">
                {
                    data.media.map((image, i) => {
                        return <div className="media-div" key={i}>
                            <Image priority={true} className="media-image" src={image} alt={`media image ${i}`} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default DilutedTruths;