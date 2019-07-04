const request = require('request');

// request('https://moreaf:Morea1234@opensky-network.org/api/states/all', { json: true }, (err, res, body) => {
//   if (err) {
//        return console.log(err); 
//     }
//     console.log(body.time)
// });

const myPromise = new Promise((resolve,reject) => {
    resolve(request('https://moreaf:Morea1234@opensky-network.org/api/states/all'));
});

const handleSuccess = (resolvedValue => {
    console.log(resolvedValue)
})

function getAPI(url) {
    // returns a promise
    return request(url).then(body => {
        // make the count be the resolved value of the promise
        // let responseJSON = JSON.parse(body);
        // return responseJSON.results.count;
        return body.time;
    });
}

getAPI('https://opensky-network.org/api/states/all').then(count => {
    // use the count result in here
    console.log(`Got time = ${body.time}`);
}).catch(err => {
    console.log('Got error from getNumResults ', err);
});