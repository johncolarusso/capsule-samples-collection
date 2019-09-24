var podcastAudio = require('./podcastAudio.js')

module.exports.function = function findPodcast(searchTerm) {
    const keysToSearchOn = ['title', 'artist', 'subtitle', 'albumName']
    let podcastAudioFound = []

    if (searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        podcastAudioFound = podcastAudio.audioItems.filter(function (audioItem) {
            keysToSearchOn.some(function (key) {
                return audioItem[key] && audioItem[key].toLowerCase().includes(searchTerm)
            })
        })
    } else {
        podcastAudioFound = podcastAudio.audioItems
    }

    return podcastAudioFound
}