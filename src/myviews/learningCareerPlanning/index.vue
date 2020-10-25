<template>
  <div class="app-container">
    <div class="main_container juli">
      <div class="item_content">
        <div class="item zi_border">
          <!--          <span>校科研项目本年度总数（个）</span>-->
          <img style="width: 100px;height: 100px;margin-left: 20px" src="../../assets/icon/jiangxuej.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">奖学金获得次数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">8</span>
            </div>
          </div>
        </div>
        <div class="item lan_border">
          <img style="width: 80px;height: 80px;margin-left: 20px;margin-top: 10px" src="../../assets/icon/zhengshu.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">职业证书获取数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">5</span>
            </div>
          </div>
        </div>
        <div class="item hong_border">
          <img style="width: 80px;height: 80px;margin-left: 20px;margin-top: 10px" src="../../assets/icon/renwu.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">学涯规划完成数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">25</span>
            </div>
          </div>
        </div>
        <div class="item lv_border">
          <img style="width: 80px;height: 80px;margin-left: 20px;margin-top: 10px" src="../../assets/icon/huodong.png">
          <div class="shuzi">
            <div>
              <span style="color: #7c7c7c">校园活动参与数</span><span style="font-weight: bolder;font-size: 20px;color: #33cfe8">13</span>
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
                  label="规划名称"
                />
                <el-table-column
                  prop="ffxq"
                  label="规划级别"
                >
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.ffxq === '中级'" type="success">中级</el-tag>
                    <el-tag v-if="scope.row.ffxq === '低级'" type="info">低级</el-tag>
                    <el-tag v-if="scope.row.ffxq === '高级'" type="warning">高级</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="ffbz"
                  label="规划日期"
                />
                <el-table-column
                  prop="ffzt"
                  label="截止日期"
                />
                <el-table-column
                  prop="zt"
                  label="规划状态"
                />
                <el-table-column
                  prop="status"
                  label="操作"
                >
                  <template slot-scope="scope">
                    <el-button type="text" @click="getDetail(scope.row)">取消规划</el-button>
                    <el-button type="text" @click="getDetail(scope.row)">规划完成</el-button>
                    <el-button type="text" @click="getDetail(scope.row)">查看</el-button>
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
          title="学涯规划"
          :visible.sync="dialogVisible"
          width="40%"
          :before-close="handleClose"
        >
          <el-row>
            <el-form ref="ktxmform" :model="myform" label-width="200px">
              <el-form-item label="规划名称">
                <el-input v-model="myform.name" placeholder="请输入规划名称" />
              </el-form-item>
              <el-form-item label="规划内容">
                <el-input
                  v-model="myform.textarea"
                  type="textarea"
                  :rows="6"
                  placeholder="请输入规划内容"
                />
              </el-form-item>
              <el-form-item label="规划级别">
                <el-select v-model="myform.jibie" placeholder="请选择规划学期">
                  <el-option label="高级" value="大一" />
                  <el-option label="中级" value="大二" />
                  <el-option label="低级" value="大三" />
                </el-select>
              </el-form-item>
              <el-form-item label="规划截止日期">
                <el-date-picker
                  v-model="myform.date"
                  type="date"
                  placeholder="选择日期"
                />
              </el-form-item>
              <el-form-item label="规划学期">
                <el-select v-model="myform.xuenian" placeholder="请选择规划学期">
                  <el-option label="大一" value="大一" />
                  <el-option label="大二" value="大二" />
                  <el-option label="大三" value="大三" />
                </el-select>
              </el-form-item>
            </el-form>
          </el-row>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">新 建</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      xueqi: '',
      tableData: [
        {
          xh: '1',
          xm: '获得国家奖学金',
          zt: '已完成',
          ffxq: '高级',
          ffbz: '2020-10-01',
          ffzt: '2020-08-12'
        },
        {
          xh: '2',
          xm: '考取护士资格证',
          ffxq: '高级',
          zt: '已完成',
          ffbz: '2020-08-25',
          ffzt: '2020-07-12'
        },
        {
          xh: '3',
          xm: '至少参加三次校园集体活动',
          ffxq: '低级',
          zt: '进行中',
          ffbz: '2020-07-01',
          ffzt: '2020-04-12'
        },
        {
          xh: '4',
          xm: '通过英语4级',
          ffxq: '中级',
          zt: '进行中',
          ffbz: '2020-05-19',
          ffzt: '2020-03-15'

        },
        {
          xh: '5',
          xm: '参加一次实习实践',
          ffxq: '低级',
          zt: '进行中',
          ffbz: '2020-07-14',
          ffzt: '2020-02-22'

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
