import { StaticImageData } from "next/image";

type Book = {
    "name": string,
    "description": string,
    "url": string,
    "cover_image": StaticImageData,
    "img_height": number,
    "img_width": number
}

export default Book;