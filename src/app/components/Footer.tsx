'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import '../css/Footer.css';
import Image from "next/image";

const access_token = 'IGQWROQ1B0d0I4WDUxWjBDSmpRWXBMYnV2NUY1enpLV1pybDR2ZA3hVUWwwNEZAmWDVXNEt3VzZANTS1GVXJudE0tbTBKU0xQNXhwdDdGVFVKb1h3X3Fwa2xpQmJFU0VMUkZAwN2I1MEJ6UzIzbFlqSXVINGZADMlQxYVUZD';
const url = `https://graph.instagram.com/me/media?fields=permalink,caption,media_type,media_url&access_token=${access_token}`;

const Footer = () => {
    const [mediaList, setMediaList] = useState<InstagramPost[]>([]);
    const [showPosts, setShowPosts] = useState(false);

    useEffect(() => {
        if (mediaList.length === 0) {
            getPosts();
        }
    }, [mediaList.length]);

    /**
     * This function asynchronously fetches Instagram posts using the axios library to make a GET request to the specified URL.
     * Upon a successful request, it logs the response data to the console, updates the mediaList state with the fetched data,
     * and sets the showPosts state to true to indicate that posts are ready to be displayed.
     * If the request fails, it catches the error and logs it to the console.
     */
    const getPosts = async () => {
        try {
            const response = await axios.get(url);
            setMediaList(Array.from(response.data.data));
            setShowPosts(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id='footer-container'>
            {
                showPosts && mediaList.map((media, index) => {
                    return (
                        <div key={index} className="instagram_media">
                            <a href={media.permalink} target="_blank">
                                {
                                    (media.media_type === "IMAGE" || media.media_type === "CAROUSEL_ALBUM") &&
                                        <Image src={media.media_url} alt={`Image ${index}`} width={150} height={150} priority={true} loading="eager" /> 
                                }
                                {
                                    media.media_type === "VIDEO" &&
                                    <video height={150} autoPlay muted playsInline>
                                        <source src={media.media_url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                }
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )    
}

export default Footer;