const { default: axios } = require("axios");

async function testRequest() {

    let res = await axios.get('https://autumnfish.cn/search')
    console.log(res.status)
    console.log(res.data)
    
}

testRequest()