import Book from "@/app/components/home/Book";
import Image from "next/image";
import Link from "next/link";

const ShopLink = (props: {book: Book}) => {
    const { book } = props;

    return (
        <div>
            <Link href={book.url}>
                <Image className="shop-links" src={book.cover_image} height={book.img_height} width={book.img_width} alt={book.description} />
                <p className="book-name">{book.name}</p>
            </Link>
        </div>
    )
}

export default ShopLink;