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
                label="职业证书名称"
              />
              <el-table-column
                prop="ffxq"
                label="职业证书类别"
                width="300"
              />
              <el-table-column
                prop="ffbz"
                label="获得日期"
              />
              <el-table-column
                prop="ffzt"
                label="上传日期"
              />
              <el-table-column
                prop="zt"
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
                :current-page="currentPage"
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
              <el-input v-model="myform.name" placeholder="请输入职业证书名称" />
            </el-form-item>
            <el-form-item label="职业证书编号">
              <el-input v-model="myform.xueyuan" placeholder="请输入职业证书编号" />
            </el-form-item>
            <el-form-item label="职业证书类别">
              <el-input v-model="myform.num" placeholder="请输入职业证书类别" />
            </el-form-item>
            <el-form-item label="获得日期">
              <el-input v-model="myform.phone" placeholder="请输入获得日期" />
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
                <el-button size="small" type="primary">点击上传职业证书封面页和内容页</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">上 传</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfessionalCertificate',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          xm: '护士资格证',
          zt: '审核通过',
          ffxq: '执业护士',
          ffbz: '2020-10-01',
          ffzt: '2020-08-12'
        },
        {
          xh: '2',
          xm: '初级护师',
          ffxq: '执业护师',
          zt: '审核通过',
          ffbz: '2020-08-25',
          ffzt: '2020-07-12'
        },
        {
          xh: '3',
          xm: '养老护理员职业资格证',
          ffxq: '执业护理员',
          zt: '审核通过',
          ffbz: '2020-07-01',
          ffzt: '2020-04-12'
        },
        {
          xh: '4',
          xm: '育婴师职业资格证',
          ffxq: '执业育婴师',
          zt: '审核通过',
          ffbz: '2020-05-19',
          ffzt: '2020-03-15'

        },
        {
          xh: '5',
          xm: '执业药师资格证',
          ffxq: '执业药师',
          zt: '审核通过',
          ffbz: '2020-07-14',
          ffzt: '2020-02-22'

        },
        {
          xh: '6',
          xm: '理疗师证',
          ffxq: '执业理疗师',
          zt: '审核通过',
          ffbz: '2020-05-01',
          ffzt: '2020-01-12'

        }
      ],
      myform: {},
      dialogVisible: false
    }
  },
  methods: {
    getDetail: function(row) {
      console.log(row)
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
