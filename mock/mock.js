import mock from 'mockjs'
import data from '../data/data.json'

mock.mock('/user/info', {
    code: 0,
    codemsg: true,
    data: data
})