import mock from 'mockjs'
import homeData from '../public/data/home.json'
import cityData from '../public/data/city.json'
mock.mock('/home/data', {
    code: 0,
    codemsg: true,
    data: homeData
})

mock.mock('/city/data',{
    code: 0,
    codemsg: true,
    data: cityData
})