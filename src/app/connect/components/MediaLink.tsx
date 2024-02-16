const MediaLink = (props: {media: Media}) => {
    const media = props.media;

    return (
        <a href={media.url} target="_blank" rel="noreferrer">
            <div className="media-links">
                {media.name}
            </div>
        </a>
    )
}

export default MediaLink;