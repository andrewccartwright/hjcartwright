'use client'

import Image from "next/image";
import BookPageData from "./BookPageData";
import '../../css/BookPage.css';

const BookPage = (props: { data: BookPageData }) => {
    const { data } = props;

    return (
        <div className="book-page-container">
            <div id={data.id} className="book-panel">
                <div id="left-side">
                    <Image id="book-image" src={data.image} alt="Book cover image" />

                    <div id="links-section">
                        {
                            data.links.map((link, i) => {
                                return (
                                    <a key={i} className="page-links" href={link.url} target="_blank" rel="noreferrer">
                                        <button type="button" className='book-page-buttons btn btn-primary'>
                                            {link.name}
                                        </button>
                                    </a>

                                )
                            })
                        }
                    </div>
                </div>

                <span id="book-summary" dangerouslySetInnerHTML={{__html: data.summary}}></span>

            </div>
        </div>
    )
}

export default BookPage;