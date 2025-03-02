import { StaticImageData } from "next/image";

type BookPageData = {
    image: StaticImageData,
    summary: string,
    links: LinkData[],
    id: string,
    media: StaticImageData[]
}

export default BookPageData;