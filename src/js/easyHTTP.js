// Custom Ajax Library
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// MAKE GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);

    this.http.onload = () => {
        if (this.http.status >= 200 && this.http.status < 300) {
            let res = JSON.parse(this.http.responseText);
            callback(null, res);
        }
        else{
            callback("Error: " + this.http.status);
        }
    }
    this.http.send();
}
// MAKE POST REQUEST
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);

    this.http.setRequestHeader("Content-Type", "application/json");

    this.http.onreadystatechange = () =>{
        if (this.http.readyState === 4) {
            const status = Number(this.http.status);
            if (status >= 200 || status < 300) {   
                callback(null, JSON.parse(this.http.responseText));
            }
            else{
                callback(`Error: ${this.http.status}`, null);
            }
        }
    }
    this.http.send(JSON.stringify(data));
}
// MAKE PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);

    this.http.setRequestHeader("Content-Type", "application/json");
    this.http.onreadystatechange = () =>{
        if (this.http.readyState === 4) {
        if (this.http.status >= 200 && this.http.status < 300){
            callback(null, this.http.responseText);
        }   
    }
}
    this.http.send(JSON.stringify(data));
}
// MAKE DELETE REQUEST
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
        if (this.http.status === 200) {
            callback(null, "Post Deleted");
        }
        else{
            callback("Error: " + this.http.status);
        }
    }
    this.http.send();
}

// // Custom Fetch Library with Promises
class fetchPromiseHTTP{
    get(url){
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
    post(url, data){
        return new Promise ((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
               })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    put(url,data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
            })
            .then(response => response.json())
            .then(() => resolve("User deleted..."))
            .catch(err => reject(err))
        })
    }
}

// Custom Library with Promises (Async & Await)
class fetchHTTP{
    async get(url){
        const response = await fetch(url);
        const userData = await response.json();
        return userData;
    }
    async post(url, data){
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
               });
        const postData = await response.json();
        return postData;
    }
    async put(url,data){
        const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            });
        const putData = await response.json();
        return putData;
    }
    async delete(url){
        const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type' : 'application/json'
                },
            });
        const deleteData = await 'User successfully deleted...';
        return deleteData;
    }
}
// Exporting the libraries
export const easyhttp = new easyHTTP();
export const fetchhttp = new fetchHTTP();
export const fetchPromise = new fetchPromiseHTTP();