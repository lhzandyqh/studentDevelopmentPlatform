<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="fisrt_layer">
          <div class="function_container">
            <div style="float: left">
              <h3>毕业反馈表</h3>
            </div>
            <div style="float: right;padding-top: 20px">
              <span style="font-weight: bolder;color: #696e73">填写状态：</span>
              <span style="color: #48d69a">未填写</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="content_container">
          <div class="content_item">
            <h4>基本信息</h4>
            <el-row>
              <el-col :span="6">
                <span>填写人姓名：</span>
                <el-input v-model="myform.stuName" style="width: 200px" placeholder="请输入内容" />
              </el-col>
              <el-col :span="6">
                <span>填写人学号：</span>
                <el-input v-model="myform.stuNo" style="width: 200px" placeholder="请输入内容" />
              </el-col>
              <el-col :span="6">
                <span>填写人电话：</span>
                <el-input v-model="myform.phone" style="width: 200px" placeholder="请输入内容" />
              </el-col>
              <el-col :span="6">
                <span>填写时间：</span>
                <el-date-picker
                  v-model="myform.submitDate"
                  style="width: 200px"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                />
              </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
              <el-col :span="6">
                <span>身份证号码：</span>
                <el-input v-model="myform.idCard" style="width: 200px" placeholder="请输入内容" />
              </el-col>
              <el-col :span="6">
                <span>毕业去向落实情况：</span>
                <el-select v-model="myform.employType" style="width: 185px" placeholder="请选择">
                  <el-option label="签就业协议形式就业" value="签就业协议形式就业" />
                  <el-option label="签劳动合同形式就业" value="签劳动合同形式就业" />
                  <el-option label="其他录用形式就业" value="其他录用形式就业" />
                  <el-option label="科研助理" value="科研助理" />
                  <el-option label="应征义务兵" value="应征义务兵" />
                  <el-option label="国家基层项目" value="国家基层项目" />
                  <el-option label="地方基层项目" value="地方基层项目" />
                  <el-option label="待就业" value="待就业" />
                  <el-option label="自主创业" value="自主创业" />
                  <el-option label="自由职业" value="自由职业" />
                  <el-option label="升学" value="升学" />
                </el-select>
              </el-col>
            </el-row>
          </div>
          <el-divider />
          <div class="content_item">
            <h4>就业信息</h4>
            <div v-show="myform.employType === '签就业协议形式就业'||myform.employType === '签劳动合同形式就业'||myform.employType === '其他录用形式就业'||myform.employType === '科研助理'||myform.employType === '国家基层项目'||myform.employType === '地方基层项目'">
              <el-row>
                <el-col :span="6">
                  <span>单位名称：</span>
                  <el-input v-model="myform.unitName" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位地址：</span>
                  <el-input v-model="myform.unitPlace" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位联系人：</span>
                  <el-input v-model="myform.unitContact" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位电话：</span>
                  <el-input v-model="myform.unitPhone" style="width: 200px" placeholder="请输入内容" />
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px;margin-top: 20px">
                <el-col :span="6">
                  <span>组织机构代码：</span>
                  <el-input v-model="myform.unitCode" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位行业：</span>
                  <el-input v-model="myform.unitBusiness" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位性质：</span>
                  <el-input v-model="myform.unitNature" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>工作相关度：</span>
                  <el-select v-model="myform.unitCorrelation" style="width: 185px" placeholder="请选择">
                    <el-option label="是" value="是" />
                    <el-option label="否" value="否" />
                  </el-select>
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px">
                <el-col :span="12">
                  <span style="display: inline-block">上传就业证明：</span>
                  <div style="display: inline-block;">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-show="myform.employType === '应征义务兵'">
              <el-row>
                <el-col :span="6">
                  <span>应征地：</span>
                  <el-input v-model="myform.unitPlace" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位联系人：</span>
                  <el-input v-model="myform.unitContact" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位电话：</span>
                  <el-input v-model="myform.unitPhone" style="width: 200px" placeholder="请输入内容" />
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px">
                <el-col :span="12">
                  <span style="display: inline-block">上传入伍证明：</span>
                  <div style="display: inline-block;">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-show="myform.employType === '待就业'">
              <el-row>
                <el-col :span="6">
                  <span>需要帮助解决问题：</span>
                  <el-input v-model="myform.questionToSolve" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>工作期望所在地：</span>
                  <el-input v-model="myform.expectPlace" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>期望行业：</span>
                  <el-input v-model="myform.expectBusiness" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>期望薪资：</span>
                  <el-input v-model="myform.expectSalary" style="width: 200px" placeholder="请输入内容" />
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px">
                <el-col :span="24">
                  <span>未就业原因：</span>
                  <el-input v-model="myform.unemployReason" style="width: 200px" placeholder="请输入内容" />
                </el-col>
              </el-row>
            </div>
            <div v-show="myform.employType === '自主创业'">
              <el-row>
                <el-col :span="6">
                  <span>单位名称：</span>
                  <el-input v-model="myform.unitName" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位地址：</span>
                  <el-input v-model="myform.unitPlace" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位联系人：</span>
                  <el-input v-model="myform.unitContact" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位电话：</span>
                  <el-input v-model="myform.unitPhone" style="width: 200px" placeholder="请输入内容" />
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px;margin-top: 20px">
                <el-col :span="6">
                  <span>组织机构代码：</span>
                  <el-input v-model="myform.unitCode" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位行业：</span>
                  <el-input v-model="myform.unitBusiness" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位性质：</span>
                  <el-input v-model="myform.unitNature" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>工作相关度：</span>
                  <el-select v-model="myform.unitCorrelation" style="width: 185px" placeholder="请选择">
                    <el-option label="是" value="是" />
                    <el-option label="否" value="否" />
                  </el-select>
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px">
                <el-col :span="12">
                  <span style="display: inline-block">上传营业执照：</span>
                  <div style="display: inline-block;">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div v-show="myform.employType === '自由职业'">
              <el-row>
                <el-col :span="6">
                  <span>联系人：</span>
                  <el-input v-model="myform.unitContact" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>联系电话：</span>
                  <el-input v-model="myform.unitPhone" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>工作相关度：</span>
                  <el-select v-model="myform.unitCorrelation" style="width: 185px" placeholder="请选择">
                    <el-option label="是" value="是" />
                    <el-option label="否" value="否" />
                  </el-select>
                </el-col>
              </el-row>
            </div>
            <div v-show="myform.employType === '升学'">
              <el-row>
                <el-col :span="6">
                  <span>深造院校：</span>
                  <el-input v-model="myform.continueLearnCollege" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>专业：</span>
                  <el-input v-model="myform.continueLearnMajor" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位联系人：</span>
                  <el-input v-model="myform.unitCorrelation" style="width: 200px" placeholder="请输入内容" />
                </el-col>
                <el-col :span="6">
                  <span>单位电话：</span>
                  <el-input v-model="myform.unitPhone" style="width: 200px" placeholder="请输入内容" />
                </el-col>
              </el-row>
              <el-row style="margin-top: 20px">
                <el-col :span="12">
                  <span style="display: inline-block">上传录取通知书：</span>
                  <div style="display: inline-block;">
                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList"
                    >
                      <el-button size="small" type="primary">点击上传</el-button>
                      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                  </div>
                </el-col>
              </el-row>
            </div>
            <el-divider />
            <h4>证书信息</h4>
            <el-row>
              <el-table
                :data="tableData"
                stripe
                style="width: 100%"
              >
                <el-table-column
                  prop="id"
                  label="序号"
                />
                <el-table-column
                  prop="certName"
                  label="证书名称"
                />
                <el-table-column
                  prop="certType"
                  label="证书类别"
                />
                <el-table-column
                  prop="obtainDate"
                  label="获得日期"
                />
                <el-table-column
                  prop="certNo"
                  label="证书编号"
                />
                <el-table-column
                  prop="status"
                  label="操作"
                >
                  <template slot-scope="scope">
                    <el-button type="text" @click="getDetail(scope.row)">查看详情</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-row>
            <el-row style="margin-top: 20px">
              <el-button size="small" type="primary" @click="addZhengshu">添加证书</el-button>
            </el-row>
          </div>
          <div class="button_container">
            <div style="float: right">
              <el-button size="small" type="success">重置</el-button>
              <el-button size="small" type="primary" @click="submit">提交</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <!--    <el-dialog :visible.sync="submitVisible" title="提交信息">-->
    <!--      <div>-->
    <!--        &lt;!&ndash;        <el-row :gutter="5">&ndash;&gt;-->
    <!--        &lt;!&ndash;          <el-col :span="4">&ndash;&gt;-->
    <!--        &lt;!&ndash;              <span style="font-weight: bolder">选择提交部门：</span>&ndash;&gt;-->
    <!--        &lt;!&ndash;          </el-col>&ndash;&gt;-->
    <!--        &lt;!&ndash;          <el-col :span="6">&ndash;&gt;-->
    <!--        &lt;!&ndash;            <div class="select">&ndash;&gt;-->
    <!--        &lt;!&ndash;              <el-select v-model="type_select_department" placeholder="请选择提交部门" >&ndash;&gt;-->
    <!--        &lt;!&ndash;                <el-option label="科研处" value="keyan"/>&ndash;&gt;-->
    <!--        &lt;!&ndash;                <el-option label="财务处" value="caiwu"/>&ndash;&gt;-->
    <!--        &lt;!&ndash;              </el-select>&ndash;&gt;-->
    <!--        &lt;!&ndash;            </div>&ndash;&gt;-->
    <!--        &lt;!&ndash;          </el-col>&ndash;&gt;-->
    <!--        &lt;!&ndash;        </el-row>&ndash;&gt;-->
    <!--        <el-row :gutter="5" style="margin-top: 5px">-->
    <!--          <el-col :span="4">-->
    <!--            <span style="font-weight: bolder">选择审核人：</span>-->
    <!--          </el-col>-->
    <!--          <el-col :span="6">-->
    <!--            <div class="select">-->
    <!--              <el-select v-model="type_select_people" placeholder="请选择审核人">-->
    <!--                <el-option label="王老师" value="keyan" />-->
    <!--                <el-option label="刘老师" value="keyan" />-->
    <!--                <el-option label="张老师" value="keyan" />-->
    <!--                <el-option label="赵老师" value="keyan" />-->
    <!--                <el-option label="李老师" value="caiwu" />-->
    <!--              </el-select>-->
    <!--            </div>-->
    <!--          </el-col>-->
    <!--        </el-row>-->
    <!--        <el-row style="padding-top: 10px">-->
    <!--          <span style="font-weight: bolder">备注</span>-->
    <!--        </el-row>-->
    <!--        <el-row style="padding-top: 10px">-->
    <!--          <el-input-->
    <!--            v-model="AuditingReason"-->
    <!--            :rows="4"-->
    <!--            type="textarea"-->
    <!--            placeholder="请输入内容"-->
    <!--          />-->
    <!--        </el-row>-->
    <!--      </div>-->
    <!--      <div class="foot">-->
    <!--        <span slot="footer" class="dialog-footer">-->
    <!--          <el-button type="primary" size="small" plain @click="submit">确认提交</el-button>-->
    <!--          <el-button type="danger" size="small" plain @click="submitVisible = false">取消</el-button>-->
    <!--          &lt;!&ndash;          <el-button type="primary" @click="zhuanyeVisible = false" size="small" plain>关闭</el-button>&ndash;&gt;-->
    <!--        </span>-->
    <!--      </div>-->
    <!--    </el-dialog>-->
    <div>
      <el-dialog
        title="添加职业证书"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <el-row>
          <el-form ref="ktxmform" :model="certForm" label-width="200px">
            <el-form-item label="职业证书名称">
              <el-input v-model="certForm.certName" placeholder="请输入职业证书名称" />
            </el-form-item>
            <el-form-item label="职业证书编号">
              <el-input v-model="certForm.certNo" placeholder="请输入职业证书编号" />
            </el-form-item>
            <el-form-item label="职业证书类别">
              <el-input v-model="certForm.certType" placeholder="请输入职业证书类别" />
            </el-form-item>
            <el-form-item label="获得日期">
              <!--              <el-input v-model="myform.phone" placeholder="请输入获得日期" />-->
              <el-date-picker
                v-model="certForm.obtainDate"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <el-form-item label="附件上传">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :http-request="uploadPic"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传职业证书封面页和内容页</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="beginUploadCert">上 传</el-button>
        </span>
      </el-dialog>
      <el-dialog
        title="职业证书详情"
        :visible.sync="dialogVisibleTwo"
        width="50%"
        :before-close="handleClose"
      >
        <el-carousel indicator-position="outside" height="600px">
          <el-carousel-item v-for="(src,item) in imgs" :key="item">
            <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;">
          </el-carousel-item>
        </el-carousel>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleTwo = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { graduateFeedback } from '@/api/studentStatusInformation'
import { getAllCertInfo, uploadCert, uploadPicture } from '@/api/studentStatusInformation'
export default {
  name: 'Index',
  data() {
    return {
      // 修改
      dialogVisible: false,
      dialogVisibleTwo: false,
      imgs: [],
      myform: {
        stuName: '',
        stuNo: '',
        phone: '',
        submitDate: '',
        idCard: '',
        employType: '',
        unitCode: '',
        unitBusiness: '',
        unitNature: '',
        unitCorrelation: '',
        unitName: '',
        unitPlace: '',
        unitContact: '',
        unitPhone: '',
        questionToSolve: '',
        expectPlace: '',
        expectBusiness: '',
        expectSalary: '',
        unemployReason: '',
        continueLearnCollege: '',
        continueLearnMajor: '',
        stuUsername: localStorage.getItem('jwt')
      },
      certForm: {
        certName: '',
        certNo: '',
        certType: '',
        obtainDate: '',
        appdedix: '',
        stuUsername: localStorage.getItem('jwt'),
        certClass: '毕业证书'
      },
      value1: '',
      option1: [{
        value: '个人项目',
        label: '个人项目'
      }, {
        value: '集体项目',
        label: '集体项目'
      }],
      value2: '',
      option2: [{
        value: '院级课题',
        label: '院级课题'
      }, {
        value: '厅级课题',
        label: '厅级课题'
      }, {
        value: '省级课题',
        label: '省级课题'
      }, {
        value: '国家级课题',
        label: '国家级课题'
      }, {
        value: '教育厅课题',
        label: '教育厅课题'
      }],
      time: '',
      picUrl: [],
      submitVisible: false,
      type_select_department: '',
      type_select_people: '',
      tableData: []
    }
  },
  methods: {
    uploadPic: function(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      uploadPicture(formData).then(response => {
        console.log('测试图片上传')
        console.log(response)
        this.picUrl.push(response.data.data.fileUrl)
        console.log(this.picUrl)
      })
    },
    getDetail: function(row) {
      console.log(row)
      this.dialogVisibleTwo = true
      this.imgs = row.appdedix
    },
    getAllCert: function() {
      const prams = {
        username: localStorage.getItem('jwt'),
        certClass: '毕业证书'
      }
      getAllCertInfo(prams).then(response => {
        console.log('测试获取所有的职业证书')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    submit() {
      // this.submitVisible = false
      var flag = true
      for (const i in this.myform) {
        if (this.myform[i] === '') {
          flag = false
        }
      }
      if (flag) {
        const sEmployInfo = this.myform
        graduateFeedback(sEmployInfo).then(response => {
          console.log('测试毕业反馈接口')
          console.log(response.data)
          this.$message({
            type: 'success',
            message: '提交成功'
          })
          // for (const i in this.myform) {
          //   this.myform[i] = ''
          // }
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '反馈信息未填写完整',
          type: 'warning'
        })
      }
      // const sEmployInfo = this.myform
      // graduateFeedback(sEmployInfo).then(response => {
      //   console.log('测试毕业反馈接口')
      //   console.log(response.data)
      //   this.$message({
      //     type: 'success',
      //     message: '提交成功'
      //   })
      //   for (const i in this.myform) {
      //     this.myform[i] = ''
      //   }
      // })
    },
    addZhengshu: function() {
      this.dialogVisible = true
    },
    beginUploadCert: function() {
      var pingjie = ''
      for (let i = 0; i < this.picUrl.length; i++) {
        pingjie = pingjie + this.picUrl[i]
        if (this.picUrl[i + 1] !== 'undefined') {
          pingjie = pingjie + ','
        } else {
          break
        }
      }
      this.certForm.appdedix = pingjie
      var flag = true
      for (const i in this.certForm) {
        if (this.certForm[i] === '') {
          flag = false
        }
      }
      if (flag) {
        this.dialogVisible = false
        const sProfessionCertInfoDto = this.certForm
        console.log('测试拼接的图片数组')
        console.log(pingjie)
        sProfessionCertInfoDto.appdedix = pingjie
        uploadCert(sProfessionCertInfoDto).then(response => {
          console.log('毕业反馈测试上传职业证书')
          console.log(response.data)
          this.getAllCert()
          // for (const i in this.certForm) {
          //   this.certForm[i] = ''
          // }
          this.certForm.certName = ''
          this.certForm.certNo = ''
          this.certForm.certType = ''
          this.certForm.obtainDate = ''
          this.certForm.appdedix = ''
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '证书信息未填写完整',
          type: 'warning'
        })
      }
      // this.dialogVisible = false
      // const sProfessionCertInfoDto = this.certForm
      // console.log('测试拼接的图片数组')
      // console.log(pingjie)
      // sProfessionCertInfoDto.appdedix = pingjie
      // uploadCert(sProfessionCertInfoDto).then(response => {
      //   console.log('毕业反馈测试上传职业证书')
      //   console.log(response.data)
      //   this.getAllCert()
      //   // for (const i in this.certForm) {
      //   //   this.certForm[i] = ''
      //   // }
      // })
    }
  }
}
</script>

<style scoped>
  .option_container{
    float: left;
    margin-left: 30px;
  }
  .button_container{
    margin-bottom: 20px;
  }
  .foot{
    text-align: center;
    margin-top: 20px;
  }
</style>
