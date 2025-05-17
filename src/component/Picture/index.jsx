const Picture = ({ picture, title }) => {
  if (!picture) return null;

  const isYouTube = picture.includes("youtube.com/embed");

  return (
    <div className="w-5/6 rounded-md border-2 border-gray-400 overflow-hidden">
      {isYouTube ? (
        <iframe
          src={picture}
          title={title}
          className="w-full aspect-video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <img src={picture} alt={title} className="w-full h-auto" />
      )}
    </div>
  );
};

export default Picture;


