import axios from 'axios';
const deployment = "http://music-lesson-lab-api-dev.us-east-1.elasticbeanstalk.com";

export default {

  //=== USER AUTHENTICATION FUNCTIONS ===//

  logIn: function(body) {
    return axios({
      method: 'post',
      headers: { 'content-type': 'application/json' },
      url: deployment + '/api/auth/login',
      data: body
    });
  },

  logout: function (body) {
    
  },

  //=== LESSON PLAN RETRIEVAL FUNCTIONS ===//

  showAllLessons: function (body) {
    return axios({
      method: 'get',
      headers: {},
      url: deployment + "/api/lessonPlan",
      data: body
    })
   },

  showAllUsersLessons: function (id) {
    return axios({
      method: 'get',
      headers: {},
      url: deployment + "/api/lessonPlan/myLessons",
      data: id
    })
   },

  findLessonById: function (id) {
    return axios({
      method: 'get',
      headers: {},
      url: deployment + "/api/lessonPlan/:id",
      data: id
    })
   },

  saveNewLesson: function (body) {
    return axios({
      method: 'post',
      headers: {},
      url: deployment + "/api/lessonPlan/createLesson",
      data: body
    })
   },

  updateLesson: function (body) {
    return axios({
      method: 'put',
      headers: {},
      url: deployment + "/api/lessonPlan/:id",
      data: body
    })
   },

  deleteLesson: function (id) {
    return axios({
      method: 'remove',
      headers: {},
      url: deployment + "/api/lessonPlan/:id",
      data: id
    })
   },

  //=== USER INFORMATION FUNCTIONS ===//


}

