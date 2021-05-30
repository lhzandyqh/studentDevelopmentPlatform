<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">奖学金类别:</div>
        <div>
          <el-select v-model="myform.type" placeholder="请选择">
            <el-option label="国家级" value="国家级" />
            <el-option label="省级" value="省级" />
            <el-option label="市级" value="市级" />
            <el-option label="校级" value="校级" />
            <el-option label="院级" value="院级" />
            <el-option label="冠名奖学金" value="冠名奖学金" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">申请对象:</div>
        <div>
          <el-select v-model="myform.duixiang" placeholder="请选择">
            <el-option label="在校所有学生" value="在校所有学生" />
            <el-option label="本院所有学生" value="本院所有学生" />
            <el-option label="其他" value="其他" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">申请状态:</div>
        <div>
          <el-select v-model="myform.zhuangtai" placeholder="请选择">
            <el-option label="可申请" value="可申请" />
            <el-option label="不可申请" value="不可申请" />
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-divider />
    <el-table
      :data="tableDataTea.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="编号"
        width="50"
      />
      <el-table-column
        prop="scholarship_name"
        label="奖项名称"
      />
      <el-table-column
        prop="apply_year"
        label="年度"
      />
      <el-table-column
        prop="scholarship_level"
        label="级别"
      />
      <el-table-column
        prop="scholarship_status"
        label="状态"
      />
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="shenqing(scope.row)">申请</el-button>
          <el-button type="text" @click="selectCourse(scope.row)">查看申请要求</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="5"
        style="margin-top:20px;"
        :total="tableDataTea.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div>
      <el-dialog
        title="奖学金申请"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <el-row>
          <el-table
            :data="oneData"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="name"
              label="姓名"
            />
            <el-table-column
              prop="sex"
              label="性别"
            />
            <el-table-column
              prop="date"
              label="出生年月"
            />
            <el-table-column
              prop="zzmm"
              label="政治面貌"
            />
          </el-table>
        </el-row>
        <el-row>
          <el-table
            :data="twoData"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="zy"
              label="专业"
            />
            <el-table-column
              prop="xh"
              label="学号"
            />
            <el-table-column
              prop="sfz"
              label="身份证"
            />
            <el-table-column
              prop="xz"
              label="学制"
            />
          </el-table>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-form ref="ktxmform" :model="myform" label-width="200px">
            <el-form-item label="具体原因">
              <el-input
                v-model="myform.reason"
                type="textarea"
                :rows="5"
                placeholder="请输入具体原因"
              />
            </el-form-item>
            <el-form-item label="附件上传">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :http-request="uploadFiles"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传成绩单和相关证明</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmApply">提 交 申 请</el-button>
        </span>
      </el-dialog>
    </div>
    <el-dialog
      title="申请要求"
      :visible.sync="dialogVisibleTwo"
      width="50%"
      :before-close="handleClose"
    >
      <p>{{ applyRequirements }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { studentGetAllCanScholarship, studentApplyScholarship } from '@/api/scholarshipManagement'
import { uploadPicture } from '@/api/studentStatusInformation'
export default {
  name: 'ScholarshipApplication',
  data() {
    return {
      fileList: [],
      oneData: [{
        name: '王小明',
        sex: '男',
        date: '1995-02-21',
        zzmm: '中国共产主义青年团团员'
      }],
      twoData: [{
        zy: '护理',
        xh: '2018Z2354',
        sfz: '4304821995022101111',
        xz: '3'
      }],
      dialogVisible: false,
      dialogVisibleTwo: false,
      tableDataTea: [
        {
          xh: '1',
          jxmc: '国家奖学金',
          nd: '2020',
          jb: '国家级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '2',
          jxmc: '河北省优秀学生奖学金',
          nd: '2020',
          jb: '省级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '3',
          jxmc: '石家庄市三好学生奖学金',
          nd: '2020',
          jb: '市级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '4',
          jxmc: '石家庄市市长特别奖学金',
          nd: '2020',
          jb: '市级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '5',
          jxmc: '人民医专优秀毕业生奖学金',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '6',
          jxmc: '护理之星奖学金',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '7',
          jxmc: '人民医专学业一等奖学金',
          nd: '2020',
          jb: '院级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '8',
          jxmc: '人民医专学业二等奖学金',
          nd: '2020',
          jb: '院级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '9',
          jxmc: '王明奖学金',
          nd: '2020',
          jb: '冠名奖学金',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '10',
          jxmc: '人民医院奖学金',
          nd: '2020',
          jb: '冠名奖学金',
          zt: '申请中',
          psfs: '其他'
        }
      ],
      applyRequirements: '',
      myform: {
        reason: ''
      },
      input: '',
      currentPage: 1,
      pageSize: 5,
      applyId: ''
    }
  },
  mounted() {
    this.getAllData()
  },
  methods: {
    selectCourse: function(row) {
      // console.log(row.kcmc)
      this.applyRequirements = row.apply_requirements
      this.dialogVisibleTwo = true
    },
    handleSizeChange(val) {
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    getAllData: function() {
      studentGetAllCanScholarship().then(response => {
        console.log('测试学生获取所有能申请的奖学金接口')
        console.log(response.data)
        this.tableDataTea = response.data.data
      })
    },
    shenqing: function(row) {
      console.log(row)
      this.applyId = row.id
      this.dialogVisible = true
    },
    uploadFiles: function(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      uploadPicture(formData).then(response => {
        console.log('测试文件上传')
        console.log(response)
        this.fileList.push(response.data.data.fileUrl)
      })
    },
    confirmApply: function() {
      const prams = {
        appendix: '',
        applyReason: '',
        scholarshipId: '',
        stuUsername: ''
      }
      prams.appendix = this.fileList[0]
      prams.applyReason = this.myform.reason
      prams.scholarshipId = this.applyId
      prams.stuUsername = '20150406'
      console.log('测试申请参数')
      console.log(prams)
      studentApplyScholarship(prams).then(response => {
        console.log('测试上传接口')
        console.log(response.data)
        this.$message({
          message: '成功申请该奖学金',
          type: 'success'
        })
        this.dialogVisible = false
        this.myform.reason = ''
      })
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
