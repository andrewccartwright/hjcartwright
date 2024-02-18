import { StaticImageData } from "next/image";

type Book = {
    "name": string,
    "tropes": string[],
    "url": string,
    "cover_image": StaticImageData
}

export default Book;