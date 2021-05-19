import request from '@/utils/request'

export default {

  //1.查询前8条热门课程，前4条名师
  getIndex() {
    return request({
      url: `/eduService/indexfront/index`,
      method: 'get'
    })
  }

}