import React from "react";

const YoutubeEmbed = ({ embedId, title }) => (
    <iframe
      className=" w-1/3 ml-4 rounded-xl h-auto md:h-52 md:w-auto xl:w-1/4 xl:h-auto"
      src={`https://www.youtube-nocookie.com/embed/${embedId}?color=white`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
);

export default YoutubeEmbed;
