import axios from 'axios'

/**
 * 查询信息
 * @param {*} data
 */
export function getInfoAPI (data) {
  axios.get('http://localhost:8080').then(
    response => {
      console.log('请求成功了', response.data)
    },
    error => {
      console.log('请求失败了', error.message)
    }
  )
}

/**
 * 发送命令
 * @param {*} data
 */
export function sendCommandAPI (data) {
  axios.post('http://localhost:8080', data)
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}
