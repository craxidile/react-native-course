## React Router
router 

/path

/query string

## Api

**Fetch**

_fetch doesn't support older browser version._

_get_

```js
fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    
    })
  })

```

_post_

```js
let data = {
    name: 'Sara'
}

let fetchData = { 
    method: 'POST', 
    body: data,
}
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
})

```
_fetch support_

![React Lifecycle](/week04-20171012/images/fetch_support_version.png)

**Axios**

_axios support all browser and older version._

_Installation_

    $ npm install --save axios

_get_

```js
axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```

_post_

```js
axios.post(url, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

```
See more [axios](https://github.com/axios/axios)

