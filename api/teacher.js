import request from '@/utils/request'

export default {

  //1.获取讲师列表
  getTeacherList(page,limit) {
    return request({
      url: `/eduService/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },

  //2.根据id获取讲师详情的方法
  getTeacherInfo(id) {
    return request({
      url: `/eduService/teacherfront/getTeacherInfo/${id}`,
      method: 'get'
    })
  }

}