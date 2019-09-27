module.exports.function = function buildPodcastAudioInfo(podcastAudio) {
  var audioInfo = {};

  audioInfo.audioItem = podcastAudio.map(function (audioItem) {
    let audioItemStructure = {
      id: audioItem.id,
      stream: audioItem.stream,
      title: audioItem.title,
      artist:audioItem.artist,
      albumArtUrl: audioItem.albumArtUrl
    }
    //optional properties of audioItem
    if (audioItem.subtitle) {
      audioItemStructure.subtitle = audioItem.subtitle
    }
    if (audioItem.albumName) {
      audioItemStructure.albumName = audioItem.albumName
    }
    if (audioItem.duration) {
      audioItemStructure.duration = audioItem.duration
    }
    return audioItemStructure
  });

  audioInfo.category = 'PODCAST';
  audioInfo.displayName = 'Podcast Capsule';
  audioInfo.repeatMode = 'ALL';
  audioInfo.doNotWaitForTTS = false;

  return audioInfo;
}

