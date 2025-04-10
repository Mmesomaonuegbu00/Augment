
import React, { useRef } from 'react'

interface VideoProps {
    playState: boolean;
    setPlayState: (state: boolean) => void;
}

const Video: React.FC<VideoProps> = ({ playState, setPlayState }) => {

    const user = useRef<HTMLDivElement>(null);

    const closeVideo = (e: React.MouseEvent<HTMLDivElement>) => {

        if (e.target === user.current) {
            setPlayState(false);
        }
    }


    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex justify-center items-center ${playState ? '' : 'hidden'}`} onClick={closeVideo} ref={user}>
            <video src="/video1.mp4" autoPlay muted controls className='w-[90%] max-w-[900px] h-auto border-[4px] border-white'></video>

        </div>
    )
}

export default Video
