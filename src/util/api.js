import axios from "axios";
const deployment =
  // "http://music-lesson-lab-api-dev.us-east-1.elasticbeanstalk.com";
  "http://localhost:3001";

export default {
  //=== USER AUTHENTICATION FUNCTIONS ===//

  logIn: function(body) {
    console.log("FART");
    return axios({
      method: "post",
      // headers: { "content-type": "application/json" },
      url: deployment + "/login",
      data: body
    });
  },

  logout: function(body) {},

  //=== LESSON PLAN RETRIEVAL FUNCTIONS ===//

  showAllLessons: function(body) {
    return axios({
      method: "get",
      headers: {},
      url: deployment + "/api/lessonPlan",
      data: body
    });
  },

  showAllUsersLessons: function(id) {
    return axios({
      method: "get",
      headers: {},
      url: deployment + "/api/lessonPlan/myLessons",
      data: id
    });
  },

  findLessonById: function(id) {
    return axios({
      method: "get",
      headers: {},
      url: deployment + "/api/lessonPlan/:id",
      data: id
    });
  },

  saveNewLesson: function(body) {
    console.log(
      "CREATE NEW: ",
      deployment + "/api/lessonPlan/createLesson",
      body
    );
    return fetch(`${deployment}/api/lessonPlan/createLesson`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, cors, *same-origin
      headers: {
        // "Content-Type": "application/json"
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body // body data type must match "Content-Type" header
    });
    // return axios
    //   .post(`${deployment}/api/lessonPlan/createLesson`, { body })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   });
    // return axios({
    //   method: "post",
    //   // headers: { "content-type": "application/json" },
    //   url: deployment + "/api/lessonPlan/createLesson",
    //   data: body
    // });
  },

  updateLesson: function(body) {
    return axios({
      method: "put",
      headers: {},
      url: deployment + "/api/lessonPlan/:id",
      data: body
    });
  },

  deleteLesson: function(id) {
    return axios({
      method: "remove",
      headers: {},
      url: deployment + "/api/lessonPlan/:id",
      data: id
    });
  }

  //=== USER INFORMATION FUNCTIONS ===//
};
