import MediaLink from "./components/MediaLink";
import '../css/Connect.css';

const medias: Media[] = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/hjcartwrightauthor/'
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@hjcartwright'
    },
    {
        name: 'Amazon',
        url: 'https://www.amazon.com/stores/author/B0CVR6T3YC?ingress=0&visitId=dca68d10-7463-4ac6-b6d1-cfd2db04a78c'
    },
    {
        name: 'Pinterest',
        url: 'https://www.pinterest.com/hjcartwrightauthor/'
    }
]

const Connect = (props: {}) => {
    return (
        <div id="connect-container">
            <h2 id="connect-title">Connect With Me</h2>

            <div className="media-links-section">
            {
                medias.map((media, i) => {
                    return <MediaLink media={media} key={i} />
                })
            }
            </div>
            
        </div>
    )
}

export default Connect;