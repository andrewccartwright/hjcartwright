import { StaticImageData } from "next/image";

type Book = {
    "name": string,
    "description": string,
    "url": string,
    "cover_image": StaticImageData
}

export default Book;