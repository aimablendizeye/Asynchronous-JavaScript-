

// fetching using promise 


function fetchDataPromise(url) {

    return fetch(url)
        .then(response => {

            if (!response.ok) {
                throw new Error(
                    `Http request error: ${response.status}`
                );
            }

            return response.json();
        });
}

