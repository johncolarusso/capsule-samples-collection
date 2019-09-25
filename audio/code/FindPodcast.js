var podcastAudio = require('./podcastAudio.js')

module.exports.function = function findPodcast(searchTerm) {
    const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
    let podcastAudioFound = []

    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        podcastAudioFound = podcastAudio.audioItems.filter(function (audioItem) {
            return keysToSearchOn.some(function (key) {
                return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
            })
            ||
            (audioItem.tags && audioItem.tags.some(tag => {
              return tag.toLowerCase().includes(searchTerm);
            }));
        })
    } else {
        podcastAudioFound = podcastAudio.audioItems
    }

    return podcastAudioFound
}