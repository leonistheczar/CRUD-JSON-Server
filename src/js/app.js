import * as http from "./easyHTTP.js";
import { UI } from "./ui.js";
let uiSelectors = UI.uiSelectors;

// JSON-API
const API_BASE_URL =
  window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://crud-json-server-qapr.onrender.com"; // Render backend URL

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Fetch Posts
  getPosts();
  // Add Post
  document
    .getElementById(uiSelectors.submitBtn)
    .addEventListener("click", (e) => {
      e.preventDefault();
      addPost(e);
    });
  // Submit Post
  document
    .querySelector(uiSelectors.postsContainer)
    .addEventListener("click", (e) => {
      let editIcon = e.target.closest(".updateIcon");
      let deleteIcon = e.target.closest(".deleteIcon");
      if (editIcon) {
        UI.checkConfirmation(
          "Are you sure you want this post to get set for update?",
          "Click, Yes to continue, No to cancel",
          function (response) {
            if (response) {
              updatePost(e);
            }
          }
        );
      } else if (deleteIcon) {
        UI.checkConfirmation(
          "Are you sure you want this post to get deleted?",
          "Click, Yes to continue, No to cancel",
          function (response) {
            if (response) {
              deletePost(e);
            }
          }
        );
      }
    });
  // Icon Testing
  document.querySelector("#sideMenuIcon i").addEventListener("click", (e) => {
    e.preventDefault();
    let overlay = document.getElementById(uiSelectors.sideMenuOverlay);
    let menu = document.getElementById(uiSelectors.sideMenu);
    document.body.classList.add("overflow-y-hidden");
    overlay.classList.remove("hidden");
    menu.classList.remove("hidden");
    requestAnimationFrame(() => {
      menu.classList.remove("sideMenuExit");
      menu.classList.add("sideMenuEntrance");
    });
    console.log(menu.classList);
  });
  document
    .getElementById(uiSelectors.closeMenu)
    .addEventListener("click", (e) => {
      e.preventDefault();
      let overlay = document.getElementById(uiSelectors.sideMenuOverlay);
      let menu = document.getElementById(uiSelectors.sideMenu);
      document.body.classList.remove("overflow-y-hidden");
      menu.classList.remove("sideMenuEntrance");
      menu.classList.add("sideMenuExit");
      setTimeout(() => {
        overlay.classList.add("hidden");
        menu.classList.add("hidden");
        menu.classList.remove("sideMenuExit");
      }, 700);
      console.log(menu.classList);
    });
});

// easyHTTP - AJAX
// @desc Fetch all posts
// @route GET /posts
// function getPosts() {
//   http.easyhttp.get("http://localhost:3000/posts", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       UI.fetchPosts(data);
//     }
//   });
// }

// @desc Post a post
// @route POST /posts
// function addPost() {
//   let post = UI.getPostFields();
//   if (UI.checkValidation(post)) {
//     // Ask for confirmation FIRST
//     UI.checkConfirmation(
//       "Confirm Post Submission?",
//       "Are you sure you want to submit this post?",
//       function (response) {
//         if (response) {
//           // Only submit if user confirms
//           http.easyhttp.post(
//             "http://localhost:3000/posts",
//             post,
//             (err, res) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 UI.success(
//                   "Post - Submission Successful",
//                   "Post has been submitted successfully without any errors"
//                 );
//                 getPosts();
//               }
//             }
//           );
//         }
//       }
//     );
//   } else {
//     console.error("Validation Failed");
//   }
// }
// function updatePost(e) {
//   e.preventDefault();
//         let postID = UI.getPostID(e);
//         let postToEdit = UI.getPostInfo(postID);
//         if (postToEdit) {
//           document
//             .getElementById(uiSelectors.submitBtn)
//             .addEventListener("click", () => {
//               UI.checkConfirmation(
//                 "Confirm Post Updation?",
//                 "Are you sure you want to update this post?",
//                 function (response) {
//                   if (response) {
//                     http.easyhttp.put(
//                       `http://localhost:3000/posts/${postID}`,
//                       UI.getPostFields(),
//                       (err, res) => {
//                         if (err) {
//                           console.log(err);
//                         } else if (UI.checkValidation(res)) {
//                           UI.success(
//                             "Post - Updation Successful",
//                             "Post has been updated successfully without any errors"
//                           );
//                           getPosts();
//                         }
//                       }
//                     );
//                   }
//                 }
//               );
//             });
//         }
//       }
// @desc Delete a specific post
// @route DELETE /posts/id
// function deletePost(e) {
//   e.preventDefault();
//   let postID = UI.getPostID(e);
//   console.log(postID);
//   if (postID) {
//     http.easyhttp.delete(
//       `http://localhost:3000/posts/${postID}`,
//       (err, res) => {
//         if (err) {
//           console.log(err);
//         } else {
//           UI.success(
//             "Post - Deletion Successful",
//             "Post has been deleted successfully without any errors"
//           );
//           getPosts();
//         }
//       }
//     );
//   }
// }

// Custom fetch using (Async/Await)
// function getPosts() {
//   http.fetchhttp
//     .get("http://localhost:3000/posts")
//     .then((data) => {
//       if (data) {
//         UI.fetchPosts(data);
//       }
//     })
//     .catch((err) => console.log(err));
// }
// function addPost() {
//   let post = UI.getPostFields();
//   if (UI.checkValidation(post)) {
//     // Ask for confirmation FIRST
//     UI.checkConfirmation(
//       "Confirm Post Submission?",
//       "Are you sure you want to submit this post?",
//       function (response) {
//         if (response) {
//           // Only submit if user confirms
//           http.fetchhttp
//             .post("http://localhost:3000/posts", post)
//             .catch((err) => {
//               if (err) {
//                 console.log(err);
//               }
//             })
//             .then((res) => {
//               UI.success(
//                 "Post - Submission Successful",
//                 "Post has been submitted successfully without any errors"
//               );
//               getPosts();
//             });
//         }
//       }
//     );
//   } else {
//     console.error("Validation Failed");
//   }
// }
// function updatePost(e) {
//   e.preventDefault();
//   let postID = UI.getPostID(e);
//   let postToEdit = UI.getPostInfo(postID);
//   if (postToEdit) {
//     document
//       .getElementById(uiSelectors.submitBtn)
//       .addEventListener("click", () => {
//         UI.checkConfirmation(
//           "Confirm Post Updation?",
//           "Are you sure you want to update this post?",
//           function (response) {
//             if (response) {
//               http.fetchhttp
//                 .put(
//                   `http://localhost:3000/posts/${postID}`,
//                   UI.getPostFields()
//                 )
//                 .catch((err) => {
//                   if (err) {
//                     console.log(err);
//                   }
//                 })
//                 .then((data) => {
//                   if (UI.checkValidation(data)) {
//                     UI.success(
//                       "Post - Updation Successful",
//                       "Post has been updated successfully without any errors"
//                     );
//                     getPosts();
//                   }
//                 });
//             }
//           }
//         );
//       });
//   }
// }
// function deletePost(e) {
//   e.preventDefault();
//   let postID = UI.getPostID(e);
//   console.log(postID);
//   if (postID) {
//     http.fetchhttp
//       .delete(`http://localhost:3000/posts/${postID}`)
//       .catch((err) => {
//         if (err) {
//           console.log(err);
//         }
//       })
//       .then((res) => {
//         UI.success(
//           "Post - Deletion Successful",
//           "Post has been deleted successfully without any errors"
//         );
//         getPosts();
//       });
//   }
// }
// Custom Fetch (Promises)
function getPosts() {
  http.fetchPromise
    .get(`${API_BASE_URL}/posts`)
    .then((data) => {
      if (data) {
        UI.fetchPosts(data);
      }
    })
    .catch((err) => console.log(err));
}
function addPost() {
  let post = UI.getPostFields();
  if (UI.checkValidation(post)) {
    // Ask for confirmation FIRST
    UI.checkConfirmation(
      "Confirm Post Submission?",
      "Are you sure you want to submit this post?",
      function (response) {
        if (response) {
          // Only submit if user confirms
          http.fetchPromise
            .post(`${API_BASE_URL}/posts`, post)
            .catch((err) => {
              if (err) {
                console.log(err);
              }
            })
            .then((res) => {
              UI.success(
                "Post - Submission Successful",
                "Post has been submitted successfully without any errors"
              );
              getPosts();
            });
        }
      }
    );
  } else {
    console.error("Validation Failed");
  }
}
function updatePost(e) {
  e.preventDefault();
  let postID = UI.getPostID(e);
  let postToEdit = UI.getPostInfo(postID);
  if (postToEdit) {
    document
      .getElementById(uiSelectors.submitBtn)
      .addEventListener("click", () => {
        UI.checkConfirmation(
          "Confirm Post Updation?",
          "Are you sure you want to update this post?",
          function (response) {
            if (response) {
              http.fetchPromise
                .put(
                  `${API_BASE_URL}/posts/${postID}`,
                  UI.getPostFields()
                )
                .catch((err) => {
                  if (err) {
                    console.log(err);
                  }
                })
                .then((data) => {
                  if (UI.checkValidation(data)) {
                    UI.success(
                      "Post - Updation Successful",
                      "Post has been updated successfully without any errors"
                    );
                    getPosts();
                  }
                });
            }
          }
        );
      });
  }
}
function deletePost(e) {
  e.preventDefault();
  let postID = UI.getPostID(e);
  console.log(postID);
  if (postID) {
    http.fetchPromise
      .delete(`${API_BASE_URL}/posts/${postID}`)
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })
      .then((res) => {
        UI.success(
          "Post - Deletion Successful",
          "Post has been deleted successfully without any errors"
        );
        getPosts();
      });
  }
}
