/**
 * Created by emerge_2 on 16/9/20.
 */
import Fetch from 'whatwg-fetch'

function checkStatus(response) {  // todo: 错误码 回头可以定一下
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
const session = Window.sessionStorage

const headers = new Headers({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Token':  session.getItem('Token')// todo: 回头商量下请求机制
})

export function getToken() {
  Fetch('').then(v=>session.setItem('Token',v))
}

export default function ({method, url, data}) {
  if(!/^http/.test(url)){
    url = '后台'.concat(url)
  }
  if(method=='get'){
    Object.keys(data).forEach(name=>{
      url += `&name=${data[name]}`
    })
  }
  return Fetch(url, {method, headers, body: JSON.stringify(data)}).then(checkStatus).then(parseJSON).catch(err=>{
    console.log(err)
  })
}
