import request from '@/utils/request'

export default {

  //1.根据课程id分页查询评论列表
  getCommentList(page,limit,courseId) {
    return request({
      url: `/eduService/comment/commentPage/${courseId}/${page}/${limit}`,
      method: 'get'
    })
  },

  //2.添加评论的接口(必须要用户登录，所以需要判断用户登录状态)
  addComment(comment) {
    return request({
      url: `/eduService/comment/addComment`,
      method: 'post',
      data:comment
    })
  }

}
