<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-row style="margin-top: 10px">
              <div style="float: left">
                <span style="font-weight: bolder;color:#409EFF ">职业证书记录</span>
              </div>
              <div style="float: right">
                <el-button type="primary" @click="openDialog">上传职业证书<i class="el-icon-upload el-icon--right" /></el-button>
              </div>
            </el-row>
          </div>
          <div class="card-container">
            <el-table
              :data="tableData.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="id"
                label="序号"
              />
              <el-table-column
                prop="certName"
                label="职业证书名称"
              />
              <el-table-column
                prop="certType"
                label="职业证书类别"
                width="300"
              />
              <el-table-column
                prop="obtainDate"
                label="获得日期"
              />
              <el-table-column
                prop="uploadDate"
                label="上传日期"
              />
              <el-table-column
                prop="auditStatus"
                label="审核状态"
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
            <div class="fenye">
              <el-pagination
                :current-page="currentPage4"
                :page-sizes="[5, 10, 20, 30]"
                :page-size="10"
                style="margin-top:20px;"
                :total="tableData.length"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div>
      <el-dialog
        title="上传职业证书"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <el-row>
          <el-form ref="ktxmform" :model="myform" label-width="200px">
            <el-form-item label="职业证书名称">
              <el-input v-model="myform.certName" placeholder="请输入职业证书名称" />
            </el-form-item>
            <el-form-item label="职业证书编号">
              <el-input v-model="myform.certNo" placeholder="请输入职业证书编号" />
            </el-form-item>
            <el-form-item label="职业证书类别">
              <el-input v-model="myform.certType" placeholder="请输入职业证书类别" />
            </el-form-item>
            <el-form-item label="获得日期">
              <!--              <el-input v-model="myform.obtainDate" placeholder="请输入获得日期" />-->
              <el-date-picker
                v-model="myform.obtainDate"
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
import { getAllCertInfo, uploadCert, uploadPicture } from '@/api/studentStatusInformation'
export default {
  name: 'ProfessionalCertificate',
  data() {
    return {
      pagesize: '10',
      currentPage4: 1,
      fileList: [],
      imgs: [],
      tableData: [],
      myform: {
        certName: '',
        certNo: '',
        certType: '',
        obtainDate: '',
        stuUsername: localStorage.getItem('jwt'),
        certClass: '职业证书',
        appdedix: ''
      },
      picUrl: [],
      dialogVisible: false,
      dialogVisibleTwo: false
    }
  },
  mounted() {
    this.getAllCert()
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
      console.log('测试拼接的图片数组')
      console.log(pingjie)
      this.myform.appdedix = pingjie
      console.log('测试myform')
      console.log(this.myform)
      var flag = true
      for (const i in this.myform) {
        if (this.myform[i] === '') {
          flag = false
        }
      }
      if (flag) {
        this.dialogVisible = false
        const sProfessionCertInfoDto = this.myform
        uploadCert(sProfessionCertInfoDto).then(response => {
          console.log('测试上传职业证书')
          console.log(response.data)
          this.getAllCert()
          this.myform.certNo = ''
          this.myform.certName = ''
          this.myform.certType = ''
          this.myform.obtainDate = ''
          this.myform.appdedix = ''
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '职业证书信息未录入完整',
          type: 'warning'
        })
      }
      // this.dialogVisible = false
      // const sProfessionCertInfoDto = this.myform
      // var pingjie = ''
      // for (let i = 0; i < this.picUrl.length; i++) {
      //   pingjie = pingjie + this.picUrl[i]
      //   if (this.picUrl[i + 1] !== 'undefined') {
      //     pingjie = pingjie + ','
      //   } else {
      //     break
      //   }
      // }
      // console.log('测试拼接的图片数组')
      // console.log(pingjie)
      // this.myform.appdedix = pingjie
      // uploadCert(sProfessionCertInfoDto).then(response => {
      //   console.log('测试上传职业证书')
      //   console.log(response.data)
      //   this.getAllCert()
      // })
    },
    getAllCert: function() {
      const prams = {
        username: localStorage.getItem('jwt'),
        certClass: '职业证书'
      }
      getAllCertInfo(prams).then(response => {
        console.log('测试获取所有的职业证书')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    getDetail: function(row) {
      console.log(row)
      this.dialogVisibleTwo = true
      this.imgs = row.appdedix
      console.log('测试imgs')
      console.log(this.imgs)
    },
    openDialog: function() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
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
  .fenye{
    text-align: center;
  }
</style>
