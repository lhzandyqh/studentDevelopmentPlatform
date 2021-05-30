import request from '@/utils/request'

// 学生获取所有能申请的奖学金
export function studentGetAllCanScholarship() {
  return request({
    url: '/student/stuScholarshipInfos',
    method: 'get'
  })
}

// 学生申请奖学金
export function studentApplyScholarship(parems) {
  return request({
    url: '/student/stuScholarshipInfoApply',
    method: 'post',
    data: parems
  })
}

// 学生申请助学金
export function studentApplyHelpMoney(parems) {
  return request({
    url: '/student/stuStipentInfoApply',
    method: 'post',
    data: parems
  })
}
