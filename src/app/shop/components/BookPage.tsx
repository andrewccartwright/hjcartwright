'use client'

import Image from "next/image";
import BookPageData from "./BookPageData";
import { useEffect } from "react";
import '../../css/BookPage.css';

const BookPage = (props: { data: BookPageData }) => {
    const { data } = props;

    return (
        <div className="book-page-container">
            <div id={data.id} className="book-panel">
                <div id="left-side">
                    <Image src={data.image} height={data.img_height} width={data.img_width} alt="Book cover image" />

                    <div id="links-section">
                        <a className="page-links" href="https://www.amazon.com/Diluted-Truths-Advocates-Book-1-ebook/dp/B0CV4SSZJK?ref_=ast_author_mpb" target="_blank" rel="noreferrer"><button type="button" className='book-page-buttons btn btn-primary'>Amazon</button></a>
                    </div>
                </div>

                <span id="book-summary" dangerouslySetInnerHTML={{__html: data.summary}}></span>

            </div>
        </div>
    )
}

export default BookPage;