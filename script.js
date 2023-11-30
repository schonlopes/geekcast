document.addEventListener('DOMContentLoaded', function () {
    const playlist = document.getElementById('playlist');

    // Sample podcast episodes
    const episodes = [
        { title: 'Saúde', src: 'Adrian.ogg' },
        { title: 'Espaço', src: 'Maria.mp4' },
        { title: 'Tanques de Guerra', src: 'Ezequiel.mpeg' },
        { title: 'Cyberbullying', src: 'Ryan.mp4' },
        { title: 'Cinema', src: 'Jose.mp3' },
        // Add more episodes as needed
    ];

    // Create playlist dynamically
    episodes.forEach((episode, index) => {
        const episodeElement = document.createElement('div');
        episodeElement.classList.add('episode');
        episodeElement.innerHTML = `<h3>${episode.title}</h3>
                                     <audio controls>
                                         <source src="${episode.src}" type="audio/mp3">
                                         Your browser does not support the audio element.
                                     </audio>`;
        playlist.appendChild(episodeElement);
    });
});