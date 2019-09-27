var http = require('http')
var console = require('console')

module.exports.function = function getPodcasts() {
  // let url = "https://www.npr.org/rss/podcast.php?id=510289";
  // let url = "https://www.pbs.org/newshour/feeds/rss/podcasts/show";
  // let url = "http://feed.thisamericanlife.org/talpodcast";
  // let url = "https://anchor.fm/s/526e7d8/podcast/rss";
  // let url = "http://feeds.nightvalepresents.com/welcometonightvalepodcast";
  let url = "https://frpodcast.libsyn.com/rss";

  let response = http.getUrl(url, {
    format: "xmljs"
  })

  console.log('response', response)

  let itunesFields = response.rss['@xmlns:itunes'] ? true : false;

  let imageUrl;
  if (itunesFields) {
    imageUrl = response.rss.channel['itunes:image']['@href']
  } else {
    imageUrl = response.rss.channel.image.url;
  }

  let channelTitle = response.rss.channel.title;

  let result = response.rss.channel.item.map((item, index) => {

    return {
      id: index,
      stream: [
        {
          url: item.enclosure["@url"],
          format: "mp3",
        }
      ],
      title: item.title,
      artist: channelTitle,
      // TODO pubdate
      albumArtUrl: imageUrl,
    }
  }).slice(0, 3)

  return result
}
