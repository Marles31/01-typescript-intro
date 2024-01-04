interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    songTitle: string;
    details: Details;    
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 0.5,
    songDuration: 200,
    songTitle: 'Dance Monkey',
    details: {
        author: 'Tones and I',
        year: 2019
    }
}

const { songTitle:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

console.log('Song title: ', anotherSong);
console.log('Song duration: ', duration);
console.log('Author: ', author);

const [ , , trunks ='Not found' ]:string []= ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', trunks);

export {}