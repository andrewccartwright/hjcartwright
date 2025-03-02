import BookPageData from "../components/BookPageData";
import fatesDemise from '../../assets/images/fates_demise/fates_demise.jpg';
import BookPage from "../components/BookPage";
import image1 from '../../assets/images/fates_demise/fates_demise_1.png';
import image2 from '../../assets/images/fates_demise/fates_demise_2.png';
import image3 from '../../assets/images/fates_demise/fates_demise_3.png';
import image4 from '../../assets/images/fates_demise/fates_demise_4.png';
import image5 from '../../assets/images/fates_demise/fates_demise_5.png';

const FatesDemise = (props: {}) => {
    const data: BookPageData = {
        image: fatesDemise,
        summary: `
        <strong class='names'><i>Nate</i></strong>
        <br><br>
        Surviving as a captive for nearly eight years was hard. 
        Recovering from those years was harder. I couldn't trust my thoughts, 
        my memories, or my dreams. Detective Scarlett Guerrero, the only assigned 
        security detail I hadn't tried to escape from, had become my only reprieve 
        from my mind. She offered safety, warmth, and light in my dimly lit reality.
        Scarlett was all I wanted.
        <br><br>
        Getting involved with me put her at risk. The people who had taken me were still out there. 
        The people who had harassed and attacked my family for years had never been captured.
        <br><br>
        Would I have to choose between keeping her safe and keeping her?

        <br><br>
        <strong class='names'><i>Scarlett</i></strong>
        <br><br>
        Being assigned as Nate James' security detail was the start of a slippery slope. 
        I was supposed to keep him safe from the people who held him captive for nearly eight years. 
        I needed to find the people responsible for hurting him and his family. 
        I wasn't supposed to get lost in his icy blue eyes, 
        I wasn't supposed to spend every night with him as he battled his nightmares, 
        I wasn't supposed to fall head over heels for him. If my captain were to find out about our relationship, my career would be over.

        <br><br>
        Being with Nate James risked everything I had worked for.
        <br><br>
        Was he worth the risk?
        `,
        links: [
            {
                name: "Amazon",
                url: "https://www.amazon.com/gp/product/B0DP1D8MHK?ref_=dbs_m_mng_rwt_calw_tkin_2&storeType=ebooks"
            },
            {
                name: "Goodreads",
                url: "https://www.goodreads.com/book/show/221931470-fates-demise"
            }
        ],
        id: "fates_demise",
        media: [image1, image2, image3, image4, image5]
    }

    return (
        <div className="book-page-wrapper">
            <BookPage data={data} />
        </div>
    )
}

export default FatesDemise;