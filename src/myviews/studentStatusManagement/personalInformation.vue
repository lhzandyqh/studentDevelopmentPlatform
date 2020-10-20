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
                    <span>王小明</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学生状态：</span>
                  </div>
                  <div class="content">
                    <span>在校</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">院&#8195;&#8195;系：</span>
                  </div>
                  <div class="content">
                    <span>护理学院</span>
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
                    <span>1995-08-02</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">身份证号码：</span>
                  </div>
                  <div class="content">
                    <span>430482199508110001</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学术类型：</span>
                  </div>
                  <div class="content">
                    <span>学士</span>
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
                    <span>汉</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">政治面目：</span>
                  </div>
                  <div class="content">
                    <span>中国共产主义青年团团员</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">是否有学历：</span>
                  </div>
                  <div class="content">
                    <span>有学历</span>
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
                    <span>男</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">生源地区：</span>
                  </div>
                  <div class="content">
                    <span>北京市海淀区</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学生类别：</span>
                  </div>
                  <div class="content">
                    <span>普通</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">攻读方式：</span>
                  </div>
                  <div class="content">
                    <span>全国统考</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">攻读专业：</span>
                  </div>
                  <div class="content">
                    <span>0345-护理学</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">姓名拼音：</span>
                  </div>
                  <div class="content">
                    <span>wangxiaoming</span>
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
                    <span>3年</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">培养层级：</span>
                  </div>
                  <div class="content">
                    <span>大专</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学习形式：</span>
                  </div>
                  <div class="content">
                    <span>全日制</span>
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
                    <span>无</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入学日期：</span>
                  </div>
                  <div class="content">
                    <span>2018-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">入学年份：</span>
                  </div>
                  <div class="content">
                    <span>2018</span>
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
                    <span>秋季</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">准考证号：</span>
                  </div>
                  <div class="content">
                    <span>14430181330002</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取专业：</span>
                  </div>
                  <div class="content">
                    <span>0345-护理学</span>
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
                    <span>2018-06-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取院系：</span>
                  </div>
                  <div class="content">
                    <span>护理学院</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取类型：</span>
                  </div>
                  <div class="content">
                    <span>非定向</span>
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
                    <span>无</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">毕业年度：</span>
                  </div>
                  <div class="content">
                    <span>2021</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">毕业日期：</span>
                  </div>
                  <div class="content">
                    <span>暂定</span>
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
                    <span>203847858932</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">证书签署人：</span>
                  </div>
                  <div class="content">
                    <span>刘老师</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">委培单位：</span>
                  </div>
                  <div class="content">
                    <span>无</span>
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
                    <span>北京市|海淀区</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">现役军人：</span>
                  </div>
                  <div class="content">
                    <span>非军人</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">专项计划：</span>
                  </div>
                  <div class="content">
                    <span>无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">医专邮箱：</span>
                  </div>
                  <div class="content">
                    <span>wangxiaoming@yizhuan.com</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">本人联系电话：</span>
                  </div>
                  <div class="content">
                    <span>18642078943</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">电子邮箱：</span>
                  </div>
                  <div class="content">
                    <span>297766455@qq.com</span>
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
                    <span>其他人员</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">出生地：</span>
                  </div>
                  <div class="content">
                    <span>北京市|海淀区</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">户口所在地：</span>
                  </div>
                  <div class="content">
                    <span>北京市|海淀区</span>
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
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学生状态：</span>
              </div>
              <div class="content">
                <el-select v-model="sex" style="width: 185px" placeholder="请选择">
                  <el-option label="在校" value="1" />
                  <el-option label="休学" value="0" />
                  <el-option label="退学" value="0" />
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">院&#8195;&#8195;系：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
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
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">身份证号码：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学术类型：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
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
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面目：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder;">&#8195;&#8195;&#8195;是否有学历：</span>
              </div>
              <div class="content" style="width: 176px;padding: 0 0 ">
                <el-select v-model="sex" style="width: 185px" placeholder="请选择">
                  <el-option label="有" value="1" />
                  <el-option label="无" value="0" />
                </el-select>
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
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">生源地区：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学生类别：</span>
              </div>
              <div class="content" style="width: 200px">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">攻读方式：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">攻读专业：</span>
              </div>
              <div class="content">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;姓名拼音：</span>
              </div>
              <div class="content" style="width: 155px;padding: 0 0">
                <el-input placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">学制：</span>
              </div>
              <div class="content">
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;培养层级：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;学习形式：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;入学日期：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;入学年份：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;录取专业：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;录取院系：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;录取类型：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;毕业日期：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;委培单位：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;专项计划：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="7">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">医专邮箱：</span>
              </div>
              <div class="content">
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;本人联系电话：</span>
              </div>
              <div class="content" style="width: 130px">
                <!--                <el-date-picker type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />-->
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;电子邮箱：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
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
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">&#8195;&#8195;&#8195;户口所在地：</span>
              </div>
              <div class="content" style="width: 130px">
                <el-input style="width: 185px" placeholder="请输入内容" />
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="closeDialog">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInformation',
  data() {
    return {
      DialogVisible: false
    }
  },
  methods: {
    openDialog: function() {
      this.DialogVisible = true
    },
    closeDialog: function() {
      this.DialogVisible = false
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
