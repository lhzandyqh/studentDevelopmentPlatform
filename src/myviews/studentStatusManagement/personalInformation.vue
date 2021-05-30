<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">学籍信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="openDialog">填写</el-button>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.studentName }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学生状态：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.stuStatus }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">系&#8195;&#8195;部：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.department }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">班&#8195;&#8195;级：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.classGrade }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">专业：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.major }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学生干部：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.classPosition }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">出生年月：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.studentBirthDate }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">身份证号码：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.idCard }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学术类型：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.academicType }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.nation }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">政治面目：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.politicStatus }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">电话：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.phone }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.studentSex }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">生源所在地：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.placeOfBorn }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学生类别：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.stuType }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取方式：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.studyWay }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">邮编：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.zipCode }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">姓名拼音：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.pinyin }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">家庭地址：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.familyAddress }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">出生地：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.birthPlace }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">户口所在地：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.registResidencePlace }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">家庭联系人：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.familyContact }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">与本人的关系：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.familyRelationship }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">联系电话：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.familyContactPhone }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学&#8195;&#8195;制：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.educationSystem }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">培养层级：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.educationLevel }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学习形式：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.learningModality }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">电子注册：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.electronicRegistration }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入学日期：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.academicStart }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入学年份：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.academicYear }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入学批次：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.academicStartBatch }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">准考证号：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.admissionCardNo }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取专业：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.enrollMajor }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取日期：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.enrollDate }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取系部：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.enrollDepartent }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取类型：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.enrollType }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">委培单位：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.trainingUnit }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">毕业年度：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.graduationYear }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">毕业日期：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.graduationDate }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学历证号：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.educatioCertNo }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">证书签署人：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.certificateSigner }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">银行卡卡号：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.bankCardNumber }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.nativePlace }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">现役军人：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.servicemen }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">专项计划：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.specialPlan }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">考生来源：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.candidatesSource }}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">电子邮箱：</span>
                  </div>
                  <div class="content">
                    <span>{{ userData.email }}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">学籍信息审核</span>
          </div>
          <div>
            <div>
              <span style="color: #949494;">审核状态:</span>
              <el-tag v-show="statusData.auditStatus===0">暂无审核</el-tag>
              <el-tag v-show="statusData.auditStatus===1" type="success">审核通过</el-tag>
              <el-tag v-show="statusData.auditStatus===2" type="warning">待审核</el-tag>
              <el-tag v-show="statusData.auditStatus===3" type="danger">审核未通过</el-tag>
            </div>
            <div style="margin-top: 20px">
              <span style="color: #949494;float: left">审核意见：</span>
              <p v-if="statusData.auditDesc === ''" style="float: left;margin-top: 1px">暂无内容</p>
              <p v-else>{{ statusData.auditDesc }}</p>
            </div>
          </div>
        </el-card>
      </div>
    </el-row>
    <el-row style="margin-top: 20px">
      <div>
        <span style="color: red;font-weight: bolder">注意事项：</span>
      </div>
      <p>1.校验信息包括学生学籍基本信息</p>
      <p>2.学籍基本信息学生本人负责维护。</p>
      <p>3.学生信息不完整，到毕业阶段将不能提交毕业注册。</p>
    </el-row>
    <div>
      <el-dialog :visible.sync="DialogVisible" title="填写学籍信息" width="80%">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.studentName" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学生状态：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.stuStatus" style="width: 185px" placeholder="请选择">
                  <el-option label="在校" value="在校" />
                  <el-option label="休学" value="休学" />
                  <el-option label="退学" value="退学" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">系&#8195;&#8195;部：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.department" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">班&#8195;&#8195;级：</span>
              </div>
              <div class="content" style="width: 185px">
                <el-input v-model="infoForm.classGrade" placeholder="请输入内容" />
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专&#8195;&#8195;业：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.major" style="width: 185px" placeholder="请选择">
                  <el-option label="临床医学" value="临床医学" />
                  <el-option label="口腔医学" value="口腔医学" />
                  <el-option label="护理学" value="护理学" />
                  <el-option label="助产" value="助产" />
                  <el-option label="药学" value="药学" />
                  <el-option label="卫生信息管理" value="卫生信息管理" />
                  <el-option label="医学检验技术" value="医学检验技术" />
                  <el-option label="中医学" value="中医学" />
                  <el-option label="医学影像技术" value="医学影像技术" />
                  <el-option label="卫生信息与管理" value="卫生信息与管理" />
                  <el-option label="康复治疗技术" value="康复治疗技术" />
                  <el-option label="医学美容技术" value="医学美容技术" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学生干部：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.classPosition" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">出生年月：</span>
              </div>
              <div class="content" style="width: 185px">
                <el-date-picker v-model="infoForm.studentBirthDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">身份证号码：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.idCard" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学术类型：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.academicType" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">民&#8195;&#8195;族：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.nation" style="width: 185px" placeholder="请选择">
                  <el-option label="汉族" value="汉族" />
                  <el-option label="满族" value="满族" />
                  <el-option label="回族" value="回族" />
                  <el-option label="藏族" value="藏族" />
                  <el-option label="维吾尔族" value="维吾尔族" />
                  <el-option label="苗族" value="苗族" />
                  <el-option label="彝族" value="彝族" />
                  <el-option label="壮族" value="壮族" />
                  <el-option label="布依族" value="布依族" />
                  <el-option label="侗族" value="侗族" />
                  <el-option label="瑶族" value="瑶族" />
                  <el-option label="白族" value="白族" />
                  <el-option label="土家族" value="土家族" />
                  <el-option label="哈尼族" value="哈尼族" />
                  <el-option label="哈萨克族" value="哈萨克族" />
                  <el-option label="傣族" value="傣族" />
                  <el-option label="黎族" value="黎族" />
                  <el-option label="傈僳族" value="傈僳族" />
                  <el-option label="佤族" value="佤族" />
                  <el-option label="畲族" value="畲族" />
                  <el-option label="高山族" value="高山族" />
                  <el-option label="拉祜族" value="拉祜族" />
                  <el-option label="水族" value="水族" />
                  <el-option label="东乡族" value="东乡族" />
                  <el-option label="纳西族" value="纳西族" />
                  <el-option label="景颇族" value="景颇族" />
                  <el-option label="柯尔克孜族" value="柯尔克孜族" />
                  <el-option label="土族" value="土族" />
                  <el-option label="达斡尔族" value="在校" />
                  <el-option label="仫佬族" value="休学" />
                  <el-option label="羌族" value="退学" />
                  <el-option label="布朗族" value="在校" />
                  <el-option label="撒拉族" value="休学" />
                  <el-option label="毛南族" value="毛南族" />
                  <el-option label="仡佬族" value="仡佬族" />
                  <el-option label="锡伯族" value="锡伯族" />
                  <el-option label="阿昌族" value="阿昌族" />
                  <el-option label="普米族" value="普米族" />
                  <el-option label="朝鲜族" value="朝鲜族" />
                  <el-option label="塔吉克族" value="塔吉克族" />
                  <el-option label="怒族" value="怒族" />
                  <el-option label="乌孜别克族" value="乌孜别克族" />
                  <el-option label="俄罗斯族" value="俄罗斯族" />
                  <el-option label="鄂温克族" value="鄂温克族" />
                  <el-option label="德昂族" value="德昂族" />
                  <el-option label="保安族" value="保安族" />
                  <el-option label="裕固族" value="裕固族" />
                  <el-option label="京族" value="京族" />
                  <el-option label="塔塔尔族" value="塔塔尔族" />
                  <el-option label="独龙族" value="独龙族" />
                  <el-option label="鄂伦春族" value="鄂伦春族" />
                  <el-option label="赫哲族" value="赫哲族" />
                  <el-option label="门巴族" value="门巴族" />
                  <el-option label="珞巴族" value="珞巴族" />
                  <el-option label="基诺族" value="基诺族" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面目：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.politicStatus" style="width: 185px" placeholder="请选择">
                  <el-option label="中共党员" value="中共党员" />
                  <el-option label="中共预备党员" value="中共预备党员" />
                  <el-option label="共青团员" value="共青团员" />
                  <el-option label="民革党员" value="民革党员" />
                  <el-option label="民盟盟员" value="民盟盟员" />
                  <el-option label="民建会员" value="民建会员" />
                  <el-option label="民进会员" value="民进会员" />
                  <el-option label="农工党党员" value="农工党党员" />
                  <el-option label="致公党党员" value="致公党党员" />
                  <el-option label="九三学社社员" value="九三学社社员" />
                  <el-option label="台盟盟员" value="台盟盟员" />
                  <el-option label="无党派人士" value="无党派人士" />
                  <el-option label="群众" value="群众" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;联系电话：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
                <div class="content">
                  <el-input v-model="infoForm.phone" placeholder="请输入内容" />
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.studentSex" style="width: 185px" placeholder="请选择">
                  <el-option label="男" value="男" />
                  <el-option label="女" value="女" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">生源所在地：</span>
              </div>
              <div class="content">
                <!--                //v-model="infoForm.placeOfBorn"-->
                <el-cascader
                  v-model="selectedOptions"
                  size="large"
                  :options="options"
                  @change="handleChange"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学生类别：</span>
              </div>
              <div class="content" style="width: 200px">
                <el-input v-model="infoForm.stuType" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">录取方式：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.studyWay" style="width: 185px" placeholder="请选择">
                  <el-option label="统招" value="统招" />
                  <el-option label="对口" value="对口" />
                  <el-option label="单招" value="单招" />
                  <el-option label="五年一贯制" value="五年一贯制" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">邮&#8195;&#8195;编：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.zipCode" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;姓名拼音：</span>
              </div>
              <div class="content" style="width: 155px;padding: 0 0">
                <el-input v-model="infoForm.pinyin" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">家庭地址：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.familyAddress" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;出生地：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <!--                <el-input v-model="infoForm.birthPlace" style="width: 185px" placeholder="请输入内容" />-->
                <el-cascader
                  v-model="selectedOptionsOne"
                  size="large"
                  :options="options"
                  @change="handleChangeOne"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;户口所在地：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-input v-model="infoForm.registResidencePlace" style="width: 185px" placeholder="请输入内容" />-->
                <el-cascader
                  v-model="selectedOptionsTwo"
                  size="large"
                  :options="options"
                  @change="handleChangeTwo"
                />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">家庭联系人：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.familyContact" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;与本人的关系：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-select v-model="infoForm.familyRelationship" style="width: 185px" placeholder="请选择">
                  <el-option label="父子" value="父子" />
                  <el-option label="母子" value="母子" />
                  <el-option label="其他" value="其他" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;联系电话：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.familyContactPhone" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学&#8195;&#8195;制：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.educationSystem" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;培养层级：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.educationLevel" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;学习形式：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.learningModality" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">电子注册：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.electronicRegistration" style="width: 185px" placeholder="请选择">
                  <el-option label="已注册" value="已注册" />
                  <el-option label="未注册" value="未注册" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;入学日期：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker v-model="infoForm.academicStart" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;入学年份：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.academicYear" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">入学批次：</span>
              </div>
              <div class="content">
                <el-select v-model="infoForm.academicStartBatch" style="width: 185px" placeholder="请选择">
                  <el-option label="夏季" value="夏季" />
                  <el-option label="秋季" value="秋季" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;准考证号：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-input v-model="infoForm.admissionCardNo" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;录取专业：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-select v-model="infoForm.enrollMajor" style="width: 185px" placeholder="请选择">
                  <el-option label="临床医学" value="临床医学" />
                  <el-option label="口腔医学" value="口腔医学" />
                  <el-option label="护理学" value="护理学" />
                  <el-option label="助产" value="助产" />
                  <el-option label="药学" value="药学" />
                  <el-option label="卫生信息管理" value="卫生信息管理" />
                  <el-option label="医学检验技术" value="医学检验技术" />
                  <el-option label="中医学" value="中医学" />
                  <el-option label="医学影像技术" value="医学影像技术" />
                  <el-option label="卫生信息与管理" value="卫生信息与管理" />
                  <el-option label="康复治疗技术" value="康复治疗技术" />
                  <el-option label="医学美容技术" value="医学美容技术" />
                </el-select>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">录取日期：</span>
              </div>
              <div class="content">
                <el-date-picker v-model="infoForm.enrollDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;录取系部：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-input v-model="infoForm.enrollDepartent" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;录取类型：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.enrollType" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">委培单位：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.trainingUnit" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;毕业年度：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-input v-model="infoForm.graduationYear" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;毕业日期：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker v-model="infoForm.graduationDate" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学历证号：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.educatioCertNo" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;证书签署人：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-input v-model="infoForm.certificateSigner" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;银行卡号：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.bankCardNumber" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">籍&#8195;&#8195;贯：</span>
              </div>
              <div class="content">
                <!--                <el-input v-model="infoForm.nativePlace" style="width: 185px" placeholder="请输入内容" />-->

                <el-cascader
                  v-model="selectedOptionsThree"
                  size="large"
                  :options="options"
                  @change="handleChangeThree"
                />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;现役军人：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-select v-model="infoForm.servicemen" style="width: 185px" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;专项计划：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.specialPlan" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">考生来源：</span>
              </div>
              <div class="content">
                <el-input v-model="infoForm.candidatesSource" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;电子邮箱：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input v-model="infoForm.email" style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeThe">取 消</el-button>
          <el-button type="primary" @click="closeDialog">提 交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getStudentStatusInformationByNumber, editStudentStatusInformationByNumber, getVerifyStatus } from '@/api/studentStatusInformation'
// eslint-disable-next-line no-unused-vars
import { regionDataPlus, CodeToText, TextToCode, provinceAndCityData } from 'element-china-area-data'
export default {
  name: 'PersonalInformation',
  data() {
    return {
      DialogVisible: false,
      userData: {},
      options: regionDataPlus,
      optionsOne: provinceAndCityData,
      selectedOptions: [],
      selectedOptionsOne: [],
      selectedOptionsTwo: [],
      selectedOptionsThree: [],
      infoForm: {
        studentName: '',
        stuStatus: '',
        department: '',
        classGrade: '',
        major: '',
        classPosition: '',
        studentBirthDate: '',
        idCard: '',
        academicType: '',
        nation: '',
        politicStatus: '',
        phone: '',
        studentSex: '',
        placeOfBorn: '',
        stuType: '',
        studyWay: '',
        zipCode: '',
        pinyin: '',
        familyAddress: '',
        birthPlace: '',
        registResidencePlace: '',
        familyContact: '',
        familyRelationship: '',
        familyContactPhone: '',
        educationSystem: '',
        educationLevel: '',
        learningModality: '',
        electronicRegistration: '',
        academicStart: '',
        academicYear: '',
        academicStartBatch: '',
        admissionCardNo: '',
        enrollMajor: '',
        enrollDate: '',
        enrollDepartent: '',
        enrollType: '',
        trainingUnit: '',
        graduationYear: '',
        graduationDate: '',
        educatioCertNo: '',
        certificateSigner: '',
        bankCardNumber: '',
        nativePlace: '',
        servicemen: '',
        specialPlan: '',
        candidatesSource: '',
        email: '',
        username: localStorage.getItem('jwt')
      },
      statusData: {}
    }
  },
  mounted() {
    this.getStudentAllData()
    this.getStatus()
  },
  methods: {
    getStatus: function() {
      const prams = {
        username: localStorage.getItem('jwt')
      }
      getVerifyStatus(prams).then(response => {
        console.log('测试获取状态')
        console.log(response.data)
        this.statusData = response.data.data
      })
    },
    handleChange(value) {
      // console.log(this.selectedOptions)
      console.log('测试生源所在地')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
      this.infoForm.placeOfBorn = str
      console.log(this.infoForm.placeOfBorn)
    },
    handleChangeOne(value) {
      // console.log(this.selectedOptions)
      console.log('测试出生地')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
      this.infoForm.birthPlace = str
      console.log(this.infoForm.birthPlace)
    },
    handleChangeTwo(value) {
      // console.log(this.selectedOptions)
      console.log('测试户口所在地')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
      this.infoForm.registResidencePlace = str
      console.log(this.infoForm.registResidencePlace)
    },
    handleChangeThree(value) {
      // console.log(this.selectedOptions)
      console.log('测试籍贯')
      console.log(value)// ["110000", "110100", "110101"]
      // CodeToText是个大对象，属性是区域码，属性值是汉字 用法例如：CodeToText['110000']输出北京市
      console.log(CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]])// 北京市 市辖区 东城区
      var str = CodeToText[value[0]] + CodeToText[value[1]] + CodeToText[value[2]]
      this.infoForm.nativePlace = str
      console.log(this.infoForm.nativePlace)
    },
    openDialog: function() {
      this.DialogVisible = true
    },
    closeThe: function() {
      this.DialogVisible = false
      console.log(1)
    },
    closeDialog: function() {
      var flag = true
      for (const i in this.infoForm) {
        if (this.infoForm[i] === '') {
          flag = false
        }
      }
      if (flag) {
        this.DialogVisible = false
        const prams = this.infoForm
        console.log('测试infoForm')
        console.log(prams)
        editStudentStatusInformationByNumber(prams).then(response => {
          console.log('测试学籍信息修改')
          console.log(response.data)
          for (const i in this.infoForm) {
            this.infoForm[i] = ''
          }
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '个人信息未填写完整',
          type: 'warning'
        })
      }
      // this.DialogVisible = false
      // const prams = this.infoForm
      // console.log('测试infoForm')
      // console.log(prams)
      // editStudentStatusInformationByNumber(prams).then(response => {
      //   console.log('测试学籍信息修改')
      //   console.log(response.data)
      // })
    },
    getStudentAllData: function() {
      const prams = {
        // username: localStorage.getItem('jwt')
        username: 'rmyzAdmin'
      }
      getStudentStatusInformationByNumber(prams).then(response => {
        console.log('测试获取学籍信息')
        console.log(response.data.data)
        this.userData = response.data.data
        console.log(this.userData)
      })
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
    height: 100%;
  }
  .single{
    display: inline-block;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
  .row-container{
    padding-top: 10px;
  }
  .button{
    display: inline-block;
    margin-left: 80px;
  }
  .card-container{
    margin-top: 10px;
  }
  .twoButton{
    display: inline-block;
  }
</style>
