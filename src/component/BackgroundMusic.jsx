// import { useState, useEffect } from 'react';
// import sound from '../../public/sound/horrorSound.mp3';

// export default function BackgroundMusic() {
//     const [isMuted, setIsMuted] = useState(false);
//     const [audio] = useState(new Audio(sound));

//     useEffect(() => {
//         audio.loop = true;
//         audio.volume = 0.4;
//         audio.play();

//         if (isMuted) {
//             audio.volume = 0;
//         } else {
//             audio.volume = 0.4;
//         }

//         return () => {
//             audio.pause();
//             audio.currentTime = 0;
//         };
//     }, [isMuted, audio]);

//     const toggleMute = () => {
//         setIsMuted(prev => !prev);
//     };

//     return (
//         <div>
//             <button onClick={toggleMute}>
//                 {isMuted ? "Attiva Suono" : "Disattiva Suono"}
//             </button>
//         </div>
//     );
// };