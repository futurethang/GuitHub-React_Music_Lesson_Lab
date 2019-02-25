import keys from './config/keys';

// TRYING TO EXPORT THESE WITH HELP FROM: https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

// BUILD A QUERY STRING
let searchString = "WOODYGUTHRIE"
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

export function loadVideo() {
  fetch(queryString)
    .then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data.items);
      videoList = data.items;
      // loadVideo(videoList);
    })
    .catch(err => console.log(err));
  console.log(videoList);
}

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
