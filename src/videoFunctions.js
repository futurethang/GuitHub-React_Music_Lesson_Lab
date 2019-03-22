import keys from "./config/keys";

// TRYING TO EXPORT THESE WITH HELP FROM: https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

export async function loadVideo(inputs) {
  let searchString = `${inputs.instrument}+${inputs.style}+${
    inputs.experience
  }+${inputs.lessonType}`;
  const apiKey = keys.google.Youtube;
  let queryString =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=" +
    searchString +
    "&topicId=%2Fm%2F04rlf&type=video&videoCaption=any&key=" + // some basic YouTube Params
    apiKey;
  let videos = [];
  await fetch(queryString)
    .then(response => {
      return response.json();
    })
    .then(data => {
      videos = data.items;
    })
    .catch(err => console.log(err));
  return videos;
}

export async function randomSelect(length) {
  return Math.floor(Math.random() * length + 1);
}
