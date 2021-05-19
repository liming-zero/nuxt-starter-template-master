import request from '@/utils/request'

export default {

  //1.条件查询带分页查询课程
  getCourseList(page,limit,serachObj) {
    return request({
      url: `/eduService/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data:serachObj
    })
  },

  //2.查询所有分类的方法
  getAllSubject() {
    return request({
      url: `/eduService/subject/getAllSubject`,
      method: 'get'
    })
  },

  //3.根据id查询课程详情的方法(多表连接)
  getCourseInfo(id){
    return request({
      url: `/eduService/coursefront/getFrontCourseInfo/${id}`,
      method: 'get'
    })
  }

}