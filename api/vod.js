import request from '@/utils/request'

export default {

    //1.根据视频id获取视频
  getPlayAuth(vid) {
    return request({
      url: `/eduvod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}