import { StaticImageData } from "next/image";

type Book = {
    "name": string,
    "tropes": string[],
    "url": string,
    "cover_image": StaticImageData,
    "img_height": number,
    "img_width": number
}

export default Book;