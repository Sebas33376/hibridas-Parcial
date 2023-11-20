function call({uri, method = "GET", body = undefined}) {

   return fetch(`http://localhost:2023/api/${uri}`, {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(body)
      })
      .then(res => {
        if (!res.ok || res.status === 401) {
            localStorage.removeItem("token");
            console.log("borre");
            throw res.json()
        }
        return res.json();
      })
    
}

export {call}