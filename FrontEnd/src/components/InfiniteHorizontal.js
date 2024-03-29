import React from 'react'

import YoutubeEmbed from './YoutubeEmbed'


function InfiniteHorizontal({data, bgcolor}) {


  return (
    <>
    <div className={`relative h-80 p-7 hidden xl:block infinite-horizontal bg-${bgcolor}`}>
      <div className='absolute whitespace-nowrap w-full flex justify-around scroll-horizontal-normal h-4/5 overflow-hidden left-full'>
        {data && data.vids.slice(0,4).map((vid) => (
            <YoutubeEmbed key={vid.id} embedId={vid.IdVideo} title={vid.titre} />
        ))}
      </div>
      <div className="absolute whitespace-nowrap w-full flex justify-around scroll-horizontal-delay h-4/5 overflow-hidden left-full">
      {data && data.vids.slice(0,4).map((vid) => (
            <YoutubeEmbed key={vid.id} embedId={vid.IdVideo} title={vid.titre} />
        ))}
        </div>
    </div>
    <div className={`block xl:hidden bg-${bgcolor}`}>
        <div className='flex justify-around overflow-scroll'>
            {data && data.vids.slice(0,3).map((vid) => (
                    <YoutubeEmbed key={vid.id} embedId={vid.IdVideo} title={vid.titre} />
                ))}
        </div>
        <div className='mt-2 flex justify-around overflow-scroll'>
            {data && data.vids.slice(3,6).map((vid) => (
                    <YoutubeEmbed key={vid.id} embedId={vid.IdVideo} title={vid.titre} />
                ))}
        </div>
    </div>
    </>
  )
}

export default InfiniteHorizontal