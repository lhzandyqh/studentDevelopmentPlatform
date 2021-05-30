<template>
  <div class="app-container">
    <div class="main_container juli">
      <div class="item_content">
        <div class="item zi_border">
          <!--          <span>校科研项目本年度总数（个）</span>-->
          <img style="width: 100px;height: 100px;margin-left: 20px" src="../../assets/icon/jiangxuej.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">奖学金获得次数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">0</span>
            </div>
          </div>
        </div>
        <div class="item lan_border">
          <img style="width: 80px;height: 80px;margin-left: 20px;margin-top: 10px" src="../../assets/icon/zhengshu.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">职业证书获取数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">0</span>
            </div>
          </div>
        </div>
        <div class="item hong_border">
          <img style="width: 80px;height: 80px;margin-left: 20px;margin-top: 10px" src="../../assets/icon/renwu.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">学涯规划完成数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">0</span>
            </div>
          </div>
        </div>
        <div class="item lv_border">
          <img style="width: 80px;height: 80px;margin-left: 20px;margin-top: 10px" src="../../assets/icon/huodong.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">校园活动参与数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-divider />
    <div>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <el-row style="margin-top: 10px">
                <div style="float: left">
                  <span style="font-weight: bolder;color:#409EFF ">学涯规划记录</span>
                </div>
                <div style="float: left;margin-left: 20px">
                  <el-select v-model="xueqi" placeholder="请选择学期">
                    <el-option label="大一" value="大一" />
                    <el-option label="大二" value="大二" />
                    <el-option label="大三" value="大三" />
                  </el-select>
                </div>
                <div style="float: right">
                  <el-button type="primary" @click="openDialog">新建规划<i class="el-icon-upload el-icon--right" /></el-button>
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
                  prop="planingName"
                  label="规划名称"
                />
                <el-table-column
                  label="规划级别"
                >
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.planingLevel === '中级'" type="success">中级</el-tag>
                    <el-tag v-if="scope.row.planingLevel === '低级'" type="info">低级</el-tag>
                    <el-tag v-if="scope.row.planingLevel === '高级'" type="warning">高级</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="planingDate"
                  label="规划日期"
                />
                <el-table-column
                  prop="closingDate"
                  label="截止日期"
                />
                <el-table-column
                  prop="planingStatus"
                  label="规划状态"
                />
                <el-table-column
                  prop="status"
                  label="操作"
                >
                  <template slot-scope="scope">
                    <el-button v-show="scope.row.planingStatus ==='进行中'" type="text" @click="cancelPlan(scope.row)">取消规划</el-button>
                    <el-button v-show="scope.row.planingStatus ==='已完成'||scope.row.planingStatus ==='已取消'" type="text" disabled="">规划取消</el-button>
                    <el-button v-show="scope.row.planingStatus ==='进行中'" type="text" @click="completePlan(scope.row)">规划完成</el-button>
                    <el-button v-show="scope.row.planingStatus ==='已取消'||scope.row.planingStatus ==='已完成'" type="text" disabled="">规划完成</el-button>
                    <el-button type="text" @click="getDetail(scope.row)">查看</el-button>
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
          title="学涯规划"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose"
        >
          <el-row>
            <el-form ref="ktxmform" :model="myform" label-width="200px">
              <el-form-item label="规划名称">
                <el-input v-model="myform.planingName" placeholder="请输入规划名称" />
              </el-form-item>
              <el-form-item label="规划内容">
                <el-input
                  v-model="myform.planingContent"
                  type="textarea"
                  :rows="6"
                  placeholder="请输入规划内容"
                />
              </el-form-item>
              <el-form-item label="规划级别">
                <el-select v-model="myform.planingLevel" placeholder="请选择规划级别">
                  <el-option label="高级" value="高级" />
                  <el-option label="中级" value="中级" />
                  <el-option label="低级" value="低级" />
                </el-select>
              </el-form-item>
              <el-form-item label="规划开始日期">
                <el-date-picker
                  v-model="myform.planingDate"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                />
              </el-form-item>
              <el-form-item label="规划截止日期">
                <el-date-picker
                  v-model="myform.closingDate"
                  type="date"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                />
              </el-form-item>
              <el-form-item label="规划学期">
                <el-select v-model="myform.planingTerm" placeholder="请选择规划学期">
                  <el-option label="大一" value="大一" />
                  <el-option label="大二" value="大二" />
                  <el-option label="大三" value="大三" />
                </el-select>
              </el-form-item>
            </el-form>
          </el-row>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addPlan">新 建</el-button>
          </span>
        </el-dialog>
      </div>
      <div>
        <el-dialog
          title="规划详情"
          :visible.sync="dialogVisibleTwo"
          width="30%"
          :before-close="handleClose"
        >
          <el-row>
            <div>
              <p>{{ detailContent }}</p>
            </div>
          </el-row>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleTwo = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllStudentPlan, addNewPlan, changePlanStatus } from '@/api/studentStatusInformation'
export default {
  name: 'Index',
  data() {
    return {
      detailContent: '',
      pagesize: '10',
      currentPage4: 1,
      xueqi: '',
      tableData: [],
      myform: {
        stuUsername: localStorage.getItem('jwt'),
        planingContent: '',
        planingLevel: '',
        planingDate: '',
        closingDate: '',
        planingTerm: '',
        planingName: '',
        planingStatus: '进行中'
      },
      dialogVisible: false,
      dialogVisibleTwo: false
    }
  },
  mounted() {
    this.getAllPlan()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    },
    getDetail: function(row) {
      this.dialogVisibleTwo = true
      console.log(row)
      this.detailContent = row.planingContent
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
    getAllPlan: function() {
      const prams = {
        // stuUsername: '20180305'
        stuUsername: localStorage.getItem('jwt')
      }
      getAllStudentPlan(prams).then(response => {
        console.log('测试获取所有的规划')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    addPlan: function() {
      var flag = true
      for (const i in this.myform) {
        if (this.myform[i] === '') {
          flag = false
        }
      }
      if (flag) {
        this.dialogVisible = false
        addNewPlan(this.myform).then(response => {
          console.log('测试添加规划')
          console.log(response.data)
          this.getAllPlan()
          for (const i in this.myform) {
            this.myform[i] = ''
          }
          this.$message({
            message: '提交规划成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '规划未填写完整',
          type: 'warning'
        })
      }
      // this.dialogVisible = false
      // addNewPlan(this.myform).then(response => {
      //   console.log('测试添加规划')
      //   console.log(response.data)
      //   this.getAllPlan()
      // })
    },
    cancelPlan: function(row) {
      console.log(row)
      const prmas = {
        id: row.id,
        planStatus: '已取消'
      }
      changePlanStatus(prmas).then(response => {
        console.log('测试修改规划状态')
        console.log(response.data)
        this.getAllPlan()
      })
    },
    completePlan: function(row) {
      console.log(row)
      const prmas = {
        id: row.id,
        planStatus: '已完成'
      }
      changePlanStatus(prmas).then(response => {
        console.log('测试修改规划状态')
        console.log(response.data)
        this.getAllPlan()
      })
    }
    // handleRemove(file, fileList) {
    //   console.log(file, fileList)
    // },
    // handlePreview(file) {
    //   console.log(file)
    // },
    // handleExceed(files, fileList) {
    //   this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    // },
    // beforeRemove(file, fileList) {
    //   return this.$confirm(`确定移除 ${file.name}？`)
    // }
  }
}
</script>

<style scoped>
  .fenye {
    text-align: center;
  }
  .juli {
    margin-top: 15px;
  }
  .main_container {
    width: 100%;
    /*height: 650px;*/
    background-color: white;
  }
  .item_content {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /*border-bottom-style: solid;*/
    /*border-bottom-color: #bcbcbc;*/
    /*border-bottom-width: 1px;*/
  }
  .item {
    margin-top: 15px;
    /*padding-top: 10px;*/
    height: 100px;
    width: 300px;
    box-shadow: 1px 1px 10px #b4b4b4;
    border-radius: 5px;
    /*border-style: solid;*/
    /*border-width: 1px;*/
    /*border-color: #d7d7d7;*/
  }
  .item span {
    display: block;
    height: 100px;
    line-height: 100px;
    float: left;
    margin-left: 10px;
    font-size: 14px;
  }
  .shuzi {
    display: block;
    height: 100px;
    line-height: 100px;
    float: right;
    margin-right: 25px;
    font-size: 25px;
  }
  .zi_border {
    /*border-top-width: 2px;*/
    /*border-top-color: #d45cf9;*/
  }
  .lan_border {
    /*border-top-width: 2px;*/
    /*border-top-color: #57d8f9;*/
  }
  .hong_border {
    /*border-top-width: 2px;*/
    /*border-top-color: #f93f49;*/
  }
  .lv_border {
    /*border-top-width: 2px;*/
    /*border-top-color: #85ec76;*/
  }
  .block {
    text-align: center;
  }
</style>
