import mock from 'mockjs'
import data from '../public/data/data.json'

mock.mock('/home/data', {
    code: 0,
    codemsg: true,
    data: data
})