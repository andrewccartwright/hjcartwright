import { StaticImageData } from "next/image";

type BookPageData = {
    image: StaticImageData,
    img_height: number,
    img_width: number,
    summary: string,
    amazon_url: string,
    bn_url: string,
    playlist_url: string,
    id: string
}

export default BookPageData;