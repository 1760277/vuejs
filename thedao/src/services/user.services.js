import Axios from 'axios'

export const userServices = {
  getUserByGroup
}

function getUserByGroup (reqJson) {
  return Axios
    .post(`${process.env.API_ROOT}/test`, reqJson, {headers: { 'Content-type': 'text/plain' }})
  // var data = reqJson
  // console.log(typeof data)
  // const requestOptions = {
  //   method: 'POST',
  //   url: `${process.env.API_ROOT}/test`,
  //   data,
  //   headers: { 'Content-type': 'text/plain' }
  // }
  // return Axios(requestOptions)
  // return fetch(`${process.env.API_ROOT}/test`, requestOptions)
}
