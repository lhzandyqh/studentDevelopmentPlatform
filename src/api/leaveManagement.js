import request from '@/utils/request'

// 学生获取自己所有的请假记录
export function studentGetAllLeaveData(parems) {
  return request({
    url: '/stuLeave/getAllLeaveInfoByUsername',
    method: 'get',
    params: parems
  })
}

// 学生提交请假申请
export function studentSubmitLeaveApplication(parems) {
  return request({
    url: '/stuLeave/askForLeave',
    method: 'post',
    params: parems
  })
}

// 学生修改请假申请
export function studentEditLeaveApplication(parems) {
  return request({
    url: '/stuLeave/updateLeaveInfo',
    method: 'post',
    data: parems
  })
}
