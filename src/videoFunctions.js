// TRYING TO EXPORT THESE WITH HELP FROM: https://stackoverflow.com/questions/38402025/how-to-create-helper-file-full-of-functions-in-react-native

// BUILD A QUERY STRING
let searchString = "WOODYGUTHRIE"
const apiKey = "AIzaSyAIy_n7C7B97RBNWvyzAb0AChKzG9Sx7d4";
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
  alert("IT WORKS!");
  fetch(queryString)
    .then(function (response) {
      console.log(queryString);
      console.log(response.items);
      videoList = response.body.items;
      console.log(videoList);
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
