const { default: axios } = require("axios");

async function testRequest() {

    let res = await axios.get('http://192.168.1.121/doctor/api/v1/referral/web/follow/')
    console.log(res.status)
    console.log(res.data)
    
}

testRequest()