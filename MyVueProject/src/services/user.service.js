import Axios from 'axios'

function getUserByGroup (requestJson) {
  console.log(requestJson)
  var data = requestJson
  const requestOptions = {
    method: 'POST',
    url: `${process.env.API_ROOT}/test`,
    data: data,
    headers: { 'Content-Type': 'text/plain' }
  }

  return Axios(requestOptions)
}

export const userService = {
  getUserByGroup
}
