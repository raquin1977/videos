import React from 'react';

const PlayMovie = ({ movieID }) => {
  const videoUrl = `https://www.youtube.com/embed/${movieID}?si=dx-caFCXGJlKNjYP`;

  return (
    <div>
      <iframe
        width="750"
        height="425"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PlayMovie;
