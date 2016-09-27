/**
 * Created by emerge_2 on 16/9/20.
 */
import {types} from 'actions/bars'
let Fetch = fetch

function checkStatus (response) {  // todo: 错误码 回头可以定一下
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON (response) {
  return response.json()
}

const session = window.localStorage || window.sessionStorage

export function getToken () {
  Fetch('').then(v => session.setItem('Token', v))
}

export default function ({method, url, data}, dispatch, successAction) {
  if (!/^http/.test(url)) {
    url = 'http://66d974a6.ngrok.io/api/'.concat(url)
  }
  if (method === 'get') {
    Object.keys(data).forEach((name, idx) => {
      url += idx === 0 ? '?' : '&'
      url += `${name}=${data[name]}`
    })
  }
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Token': session.getItem('Token')// todo: 回头商量下请求机制
  }
  dispatch(types.GLOBAL_FETCHING, 1)
  return Fetch(url, {method, headers, body: JSON.stringify(data)}).then(checkStatus).then(parseJSON).then(res => {
    dispatch(types.GLOBAL_FETCHING, -1)
    if (res.success) {
      dispatch(successAction, res)
    } else {
      console.error(res.msg)
    }
  }).catch(err => {
    dispatch(types.GLOBAL_FETCHING, -1)
    console.error(err)
  })
}
