const VideoPlayer = () => {
    return (
        <div>
            <video controls width="100%">
                <source src="/videos/my-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;