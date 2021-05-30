import request from '@/utils/request'

// 获取学生所有的规划
export function getAllStudentPlan(parems) {
  return request({
    url: '/student/learnCareerPlansByStu',
    method: 'get',
    params: parems
  })
}

// 新建规划
export function addNewPlan(parems) {
  return request({
    url: '/student/learnCareerPlanSubmit',
    method: 'post',
    data: parems
  })
}

// 设置规划状态
export function changePlanStatus(parems) {
  return request({
    url: '/student/learnCareerPlanCompleted',
    method: 'post',
    params: parems
  })
}

// 获取学生学籍信息
export function getStudentStatusInformationByNumber(parems) {
  return request({
    url: '/student/getStudentInfoByUsername',
    method: 'get',
    params: parems
  })
}

// 学生修改学籍信息
export function editStudentStatusInformationByNumber(parems) {
  return request({
    url: '/student/updateStudentInfoByUsername',
    method: 'post',
    data: parems
  })
}

// 获取学籍信息审核状态
export function getVerifyStatus(parems) {
  return request({
    url: '/student/getStuUpdateAuditInfoByUsername',
    method: 'get',
    params: parems
  })
}

// 获取学生注册数据
export function getRegisterInfo(parems) {
  return request({
    url: '/student/stermRegisterInfosByUsername',
    method: 'get',
    params: parems
  })
}

// 开始注册
export function beginTermRegister(parems) {
  return request({
    url: '/student/stermRegister',
    method: 'post',
    data: parems
  })
}

//  学生获取实习实践信息
export function getStudentInternshipInfo(parems) {
  return request({
    url: '/student/stuPracticeInfoByUsername',
    method: 'get',
    params: parems
  })
}

// 提交实习反馈
export function submitNewInternshipFeedback(parems) {
  return request({
    url: '/student/stuPracticeFeedbackInfoInsert',
    method: 'post',
    data: parems
  })
}

// 查看反馈详情
export function getInternshipFeedbackDetail(parems) {
  return request({
    url: '/student/stuPracticeFeedBackInfoByPracticeId',
    method: 'get',
    params: parems
  })
}

// 第二课堂获取所有的职业证书
export function getAllCertInfo(parems) {
  return request({
    url: '/student/stuProfessionCertInfosByUsername',
    method: 'get',
    params: parems
  })
}

// 上传职业证书
export function uploadCert(parems) {
  return request({
    url: '/student/stuProfesstionCertInfoUpload',
    method: 'post',
    data: parems
  })
}

// 上传图片
export function uploadPicture(parems) {
  return request({
    url: '/upload/fileUpdate',
    method: 'post',
    data: parems
  })
}

// 学生毕业信息反馈
export function graduateFeedback(parems) {
  return request({
    url: '/student/graduateInfo',
    method: 'post',
    data: parems
  })
}

