import keys from "./config/keys";

// TRYING TO EXPORT THESE WITH HELP FROM: https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

// BUILD A QUERY STRING
let searchString = "WOODYGUTHRIE";
const apiKey = keys.google.Youtube;
let queryString =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=" +
  searchString +
  "&topicId=%2Fm%2F04rlf&type=video&videoCaption=any&key=" +
  apiKey;

let videoList;
let currentVideoMeta = {};
let currentVideoId;

// let selection = randomSelect(videoList.length);

// currentVideoMeta = videoList[selection];
// currentVideoId = videoList[selection].id.videoId;

// export function randomSelect(length) {
//   return Math.floor(Math.random() * length + 1);
// }

const loadVideo = async (inputs) => {
  let searchString = `${inputs.instrument}+${inputs.style}+${inputs.experience}+${inputs.lessonType}`;
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
};

///////////////////// VARIABLE TO HANG ON TO FOR LATER
// let level = $("#skill_level").val();
//   let type = $("#lesson_format").val();
//   let genre = $("#genre").val();
//   let keywords = $("#keyword").val();

////////// FOR THE SEARCHSTRING:
// level + "+" + genre + "+" + "guitar" + "+" + type + "+" + keywords; // IS LENGTH A SPECIAL STRING?

//////////////////////// FOR VIDEO REFRESH FUNCTION:
// $("#newVideo").on("click", function() {
//   loadVideo(videoList);
// });

export default loadVideo;
