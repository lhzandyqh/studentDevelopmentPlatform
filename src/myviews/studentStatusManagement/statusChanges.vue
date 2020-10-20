<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">所在学院：</span>
                  </div>
                  <div class="content">
                    <span>护理学院</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学号：</span>
                  </div>
                  <div class="content">
                    <span>2018Z083425</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">姓&#8195;&#8195;名：</span>
                  </div>
                  <div class="content">
                    <span>王小明</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">学生状态：</span>
                  </div>
                  <div class="content">
                    <span>在校</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin-top: 10px">
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">证件号码：</span>
                  </div>
                  <div class="content">
                    <span>430425199508110001</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">性&#8195;&#8195;别：</span>
                  </div>
                  <div class="content">
                    <span>男</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">录取类型：</span>
                  </div>
                  <div class="content">
                    <span>非定向</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">生源地区：</span>
                  </div>
                  <div class="content">
                    <span>北京市海淀区</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px">
              <div>
                <el-button type="primary" @click="openDialog">学籍变动申请<i class="el-icon-upload el-icon--right" /></el-button>
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
                prop="xmbh"
                label="所在学院"
              />
              <el-table-column
                prop="xmmc"
                label="学院"
              />
              <el-table-column
                prop="zdjs"
                label="姓名"
              />
              <el-table-column
                prop="ssxy"
                label="学生状态"
              />
              <el-table-column
                prop="xmjd"
                label="学籍变动类型"
              />
              <el-table-column
                prop="xmys"
                label="申请原因"
              />
              <el-table-column
                prop="qzsj"
                label="说明"
              />
              <el-table-column
                prop="qzsj"
                label="申请状态"
              />
              <el-table-column
                prop="qzsj"
                label="操作"
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
        title="新增学籍变动信息"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose"
      >
        <el-row>
          <el-form ref="ktxmform" :model="myform" label-width="200px">
            <el-form-item label="学籍变动类型">
              <el-select v-model="myform.type" placeholder="请选择注册学籍变动类型">
                <el-option label="休学" value="休学" />
                <el-option label="保留入学资格" value="保留入学资格" />
                <el-option label="退学" value="退学" />
                <el-option label="提前毕业" value="提前毕业" />
                <el-option label="调整专业" value="调整专业" />
                <el-option label="调整院系" value="调整院系" />
              </el-select>
            </el-form-item>
            <el-form-item label="学籍变动原因" style="width: 600px">
              <el-select v-model="myform.reason" placeholder="请选择学籍变动原因">
                <el-option label="身体原因" value="身体原因" />
                <el-option label="成绩原因" value="成绩原因" />
                <el-option label="其他原因" value="其他原因" />
              </el-select>
            </el-form-item>
            <el-form-item label="具体原因">
              <el-input
                v-model="myform.textarea"
                type="textarea"
                :rows="5"
                placeholder="请输入具体原因"
              />
            </el-form-item>
            <el-form-item label="家庭住址">
              <el-input v-model="myform.address" placeholder="请输入家庭住址" />
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
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">提 交 审 核</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusChanges',
  data() {
    return {
      tableData: [],
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
