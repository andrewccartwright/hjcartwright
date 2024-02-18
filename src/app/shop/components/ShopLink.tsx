'use client'

import Book from "@/app/components/home/Book";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ShopLink = (props: {book: Book}) => {
    const { book } = props;
    const [isVisible, setIsVisible] = useState(false);
    
    const toggleVisibility = (event: React.MouseEvent) => {
        event.preventDefault();
        const target = (event.currentTarget as HTMLElement);
        const image = (target.firstChild as HTMLElement);
        const clickMe = (target.childNodes[1] as HTMLElement);
        if (isVisible) {
            image.style.opacity = "1";
            clickMe.style.display = "none";
            setIsVisible(false);
        } else {
            image.style.opacity = "0.5";
            clickMe.style.display = "block";
            setIsVisible(true);
        }
    }

    return (
        <div className="shop-link-container">
            <Link href={book.url} onMouseEnter={toggleVisibility} onMouseLeave={toggleVisibility}>
                <Image className="shop-links" src={book.cover_image} alt="Book Cover" priority={true} />
                <p className="click-me">Click Here</p>
                <p className="book-name">{book.name}</p>
            </Link>
        </div>
    )
}

export default ShopLink;