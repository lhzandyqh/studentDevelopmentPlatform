<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-row style="margin-top: 10px">
              <div style="float: left">
                <span style="font-weight: bolder;color:#409EFF ">助学金发放记录查询</span>
              </div>
              <div style="float: right">
                <el-button type="primary" @click="openDialog">助学金申请<i class="el-icon-upload el-icon--right" /></el-button>
              </div>
            </el-row>
          </div>
          <div class="card-container" style="height: 400px">
            <el-table
              :data="tableData"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="xh"
                label="序号"
              />
              <el-table-column
                prop="xm"
                label="姓名"
              />
              <el-table-column
                prop="ffxq"
                label="发放学期"
                width="300"
              />
              <el-table-column
                prop="ffbz"
                label="发放标准"
              />
              <el-table-column
                prop="ffzt"
                label="发放状态"
              />
              <el-table-column
                prop="bfje"
                label="补发金额"
              />
              <el-table-column
                prop="pc"
                label="批次"
              />
              <el-table-column
                prop="hsw"
                label="账号后4位"
              />
              <el-table-column
                prop="zt"
                label="状态"
              />
              <el-table-column
                prop="byrq"
                label="毕业日期"
              />
            </el-table>
            <div class="fenye">
              <el-pagination
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 30]"
                :page-size="5"
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
        title="助学金申请"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <el-row>
          <el-form ref="ktxmform" :model="myform" label-width="200px">
            <el-form-item label="姓名">
              <el-input v-model="myform.name" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="所在学院">
              <el-input v-model="myform.xueyuan" placeholder="请输入所在学院" />
            </el-form-item>
            <el-form-item label="银行卡号">
              <el-input v-model="myform.num" placeholder="请输入银行卡号" />
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="myform.phone" placeholder="请输入联系电话" />
            </el-form-item>
            <el-form-item label="附件上传">
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
                <el-button size="small" type="primary">点击上传成绩单和相关证明</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">提 交 申 请</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GrantApplication',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          xm: '王小明',
          ffxq: '2020-2021学年（秋）第一学期',
          ffbz: '2000',
          ffzt: '未发放',
          bfje: '0',
          pc: '1',
          hsw: '0822',
          zt: '审核已通过',
          byrq: '2021-07-01'
        },
        {
          xh: '2',
          xm: '王小明',
          ffxq: '2019-2020学年（春）第二学期',
          ffbz: '2000',
          ffzt: '已发放',
          bfje: '0',
          pc: '1',
          hsw: '0822',
          zt: '已完成',
          byrq: '2021-07-01'
        },
        {
          xh: '3',
          xm: '王小明',
          ffxq: '2018-2019学年（秋）第二学期',
          ffbz: '2000',
          ffzt: '已发放',
          bfje: '0',
          pc: '1',
          hsw: '0822',
          zt: '已完成',
          byrq: '2021-07-01'
        },
        {
          xh: '4',
          xm: '王小明',
          ffxq: '2018-2019学年（春）第一学期',
          ffbz: '2000',
          ffzt: '已发放',
          bfje: '0',
          pc: '1',
          hsw: '0822',
          zt: '已完成',
          byrq: '2021-07-01'
        }
      ],
      myform: {},
      dialogVisible: false
    }
  },
  methods: {
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
