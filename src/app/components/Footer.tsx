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

    const getPosts = async () => {
        await axios.get(url)
            .then((res) => {
                console.log(res.data.data);
                setMediaList(Array.from(res.data.data));
                setShowPosts(true);
            })
            .catch((err) => {
                console.log(err);
            })
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
                                    <video height={150}>
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