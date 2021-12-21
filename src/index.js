const { default: axios } = require("axios");

function testRequest() {
    axios.get('https://autumnfish.cn/search?keywords=Love%20Story').then(res => {
        console.log('request success')
        console.log(res)
    }
    ).catch(error => {
        console.log('request failed')
        console.log(`error${error}`)
    })
}

testRequest()