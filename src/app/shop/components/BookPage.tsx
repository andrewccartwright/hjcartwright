'use client'

import Image from "next/image";
import BookPageData from "./BookPageData";
import '../../css/BookPage.css';

const BookPage = (props: { data: BookPageData }) => {
    const { data } = props;

    const links: string[] = [data.amazon_url, data.bn_url, data.playlist_url]

    return (
        <div className="book-page-container">
            <div id={data.id} className="book-panel">
                <div id="left-side">
                    <Image id="book-image" src={data.image} alt="Book cover image" />

                    <div id="links-section">
                        {
                            data.amazon_url !== "" && <a className="page-links" href={data.amazon_url} target="_blank" rel="noreferrer"><button type="button" className='book-page-buttons btn btn-primary'>Amazon</button></a>
                        }
                        {
                            data.bn_url !== "" && <a className="page-links" href={data.bn_url} target="_blank" rel="noreferrer"><button type="button" className='book-page-buttons btn btn-primary'>Barnes & Noble</button></a>
                        }
                        {
                            data.playlist_url !== "" && <a className="page-links" href={data.playlist_url} target="_blank" rel="noreferrer"><button type="button" className='book-page-buttons btn btn-primary'>Playlist</button></a>
                        }
                    </div>
                </div>

                <span id="book-summary" dangerouslySetInnerHTML={{__html: data.summary}}></span>

            </div>
        </div>
    )
}

export default BookPage;