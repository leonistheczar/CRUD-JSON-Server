const UI = (() => {
    // DOM Selectors
    const uiSelectors = {
        postsContainer: ".apiPosts",
        postTitle: "#title",
        postBody: "#body",
        submitBtn: "post-submit",
        alert: "alert", 
        postForm: ".post-form",
        success: "success",
        about: "about",
        successTitle: "success-title",
        successDesc: "success-desc",
        confirmation: "confirmation",
        allowBtn: "allow",
        rejectBtn: "reject",
        confirmTitle: "confirm-title",
        confirmDesc: "confirm-desc",
        sideMenu: "sideMenu",
        sideMenuOverlay: "sideOverlay",
        sideMenuIcon: "sideMenuIcon",
        closeMenu: 'sideMenuClose'
    };
    // Public methods
    // Fetch Posts
    const fetchPosts = (data) => {
        const postsContainer = document.querySelector(uiSelectors.postsContainer);
        postsContainer.innerHTML = ""; // clear old posts first
        if (!Array.isArray(data)) {
            postsContainer.innerHTML = `<div class="text-red-500 text-center text-xl">Invalid data format</div>`;
            return;
        }   
    
        if (!data || data.length === 0) {
            postsContainer.innerHTML = `<div class="text-white text-center text-3xl">No Posts!!</div>`;
            return;
        }
        data.forEach((post) => {
            if (post) {
                postsContainer.insertAdjacentHTML("beforeend", `
                    <div class="post p-2 bg-[#ebf6f7] rounded-lg" id="post-${post.id}">
                        <h3 id="post-title" class="text-2xl text-center font-bold py-2">${post.title}</h3>
                        <p id="post-body" class="font-semi-bold mb-3 text-wrap text-justify px-2">${post.body}</p>
                        <div class="flex gap-x-3 place-content-end pb-3">
                            <a href="#" class="updateIcon inline-block">
                                <i class="fa-solid fa-pencil pencil text-xl text-[#001fa8] transition-all hover:text-blue-500 hover:-translate-y-0.5" title="Edit"></i>
                            </a>
                            <a href="#" class="deleteIcon inline-block">
                                <i class="fa-solid fa-xmark xmark text-xl text-[#d83b3b] transition-all hover:text-red-600 hover:-translate-y-0.5" title="Remove"></i>
                            </a>
                        </div>
                    </div>
                `);
            }
        });
    };
    // Get post fields
    const getPostFields = () => {
            return {
                title: document.querySelector(uiSelectors.postTitle).value,
                body: document.querySelector(uiSelectors.postBody).value,
            };
    };
    // Check validation
    const checkValidation = (post) => {
            let alertID = document.getElementById(uiSelectors.alert);
            // Validation
            if (post.title === '' || post.body === '') {
                alertID.classList.remove('slideAnimation');
                alertID.classList.remove('hidden');
                alertID.offsetWidth;
                alertID.classList.add('slideAnimation');
                if (post.title === '') {
                    document.querySelector(uiSelectors.postTitle).style.borderColor = "red";
                }
                if (post.body === '') {
                    document.querySelector(uiSelectors.postBody).style.borderColor = "red";
                }
                setTimeout(() => {
                    alertID.classList.add('hidden');
                    alertID.classList.remove('slideAnimation');
                    document.querySelector(uiSelectors.postTitle).style.borderColor = "";
                    document.querySelector(uiSelectors.postBody).style.borderColor = "";
                }, 4000);       
                return false;
            }
            return true;
    }
    // Get post info for update
    const getPostInfo = (postID) => {
        let container = document.querySelector(uiSelectors.postsContainer);
        let posts = Array.from(container.children);
        let foundPost = posts.find((post) => {
            let id = post.id.split('-');
            if(id[1] == postID){
                let inputTitle = document.querySelector(uiSelectors.postTitle);
                let inputBody = document.querySelector(uiSelectors.postBody);
                inputTitle.value = post.querySelector("#post-title").textContent;
                inputBody.value = post.querySelector("#post-body").textContent;
                return true;
            }
            else{
                return false;
            }
        })
        return foundPost;
    };
    // Post ID from icons
    function getPostID(e) {
            let post = e.target.parentElement.parentElement.parentElement;
            let postID = post.id.split('-');   
            return postID[1];
    } 
    const clearFields = () =>{
        document.querySelector(uiSelectors.postTitle).value = '';
        document.querySelector(uiSelectors.postBody).value = '';
        document.querySelector(uiSelectors.postTitle).style.borderColor = "";   
        document.querySelector(uiSelectors.postBody).style.borderColor = "";
    };
    const success = (title, desc) => {
        let success = document.getElementById(uiSelectors.success);
        let successTitle = document.getElementById(uiSelectors.successTitle); 
        let successBody = document.getElementById(uiSelectors.successDesc);
        // Set Value
        successTitle.textContent = title;
        successBody.textContent = desc;
        success.classList.remove('hidden');
        success.classList.add('fadeInAnimation');

        setTimeout(() => {
            window.location.reload();
        }, 2500)
    }
    const checkConfirmation = (title, desc,callback) => {
        let confirmationBox = document.getElementById(uiSelectors.confirmation);
        let confirmTitle = document.getElementById(uiSelectors.confirmTitle);
        let confirmDesc = document.getElementById(uiSelectors.confirmDesc);
        confirmTitle.textContent = title
        confirmDesc.textContent = desc;

        confirmationBox.classList.remove('hidden');
        
        document.getElementById(uiSelectors.allowBtn).onclick = (e) => {
            e.preventDefault();
            confirmationBox.classList.add('hidden');
            callback(true);
        }
        document.getElementById(uiSelectors.rejectBtn).onclick = (e) => {
            e.preventDefault();
            confirmationBox.classList.add('hidden');
            callback(false);
        }
    }
    return {
        uiSelectors,
        fetchPosts,
        getPostFields,
        checkValidation,
        getPostInfo,
        getPostID,
        success,
        clearFields,
        checkConfirmation,
    };
})();

export { UI };
