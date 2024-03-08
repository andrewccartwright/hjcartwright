import { StaticImageData } from "next/image";

type BookPageData = {
    image: StaticImageData,
    summary: string,
    amazon_url: string,
    bn_url: string,
    playlist_url: string,
    id: string,
    media: StaticImageData[]
}

export default BookPageData;