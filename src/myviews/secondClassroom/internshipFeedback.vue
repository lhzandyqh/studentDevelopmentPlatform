<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">实习实践类别:</div>
        <div>
          <el-select v-model="myform.type" placeholder="请选择">
            <el-option label="所有" value="所有" />
            <!--            <el-option label="理论宣讲" value="理论宣讲" />-->
            <!--            <el-option label="社会调查" value="省级" />-->
            <!--            <el-option label="学习参观" value="市级" />-->
            <!--            <el-option label="社会服务" value="校级" />-->
            <el-option label="预就业实习" value="院级" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">实习时间:</div>
        <div>
          <el-date-picker
            v-model="myform.time"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">实习状态:</div>
        <div>
          <el-select v-model="myform.zhuangtai" placeholder="请选择">
            <el-option label="所有" value="所有" />
            <el-option label="实习中" value="已反馈" />
            <el-option label="待反馈" value="待反馈" />
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-divider />
    <el-table
      :data="tableDataTea.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="序号"
        width="50"
      />
      <el-table-column
        prop="practiceName"
        label="实习名称"
      />
      <el-table-column
        prop="practiceType"
        label="实习实践类别"
      />
      <el-table-column
        prop="practiceUnit"
        label="实习单位"
      />
      <el-table-column
        prop="practiceStartTime"
        label="实习时间"
      />
      <el-table-column
        prop="feedbackStatus"
        label="反馈状态"
      />
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="beginFeedback(scope.row)">提交反馈</el-button>
          <!--          <el-button v-else type="text" disabled>开始反馈</el-button>-->
          <el-button type="text" @click="lookDetails(scope.row)">查看反馈详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="10"
        style="margin-top:20px;"
        :total="tableDataTea.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div>
      <el-dialog
        title="实习反馈"
        :visible.sync="dialogVisibleOne"
        width="50%"
        :before-close="handleClose"
      >
        <div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="实习单位">
              <el-input v-model="form.practiceUnit" />
            </el-form-item>
            <el-form-item label="实习部门">
              <el-input v-model="form.practiceDepartment" />
            </el-form-item>
            <el-form-item label="开始时间">
              <el-date-picker
                v-model="form.practiceStartDate"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <el-form-item label="结束时间">
              <el-date-picker
                v-model="form.practiceEndDate"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <el-form-item label="反馈日期">
              <el-date-picker
                v-model="form.feedbackDate"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
            <el-form-item label="单位反馈">
              <el-input v-model="form.unitFeedback" type="textarea" :rows="5" />
            </el-form-item>
            <el-form-item label="导师反馈">
              <el-input v-model="form.advisorFeedback" type="textarea" :rows="5" />
            </el-form-item>
            <el-form-item label="其他反馈">
              <el-input v-model="form.otherFeedback" type="textarea" :rows="5" />
            </el-form-item>
          </el-form>
        </div>
        <el-row style="margin-top: 20px" />
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleOne = false">取 消</el-button>
          <el-button type="primary" @click="submitNewFeedBack">提 交</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        title="反馈详情"
        :visible.sync="dialogVisibleTwo"
        width="50%"
        :before-close="handleClose"
      >
        <div>
          <div>
            <el-table
              :data="tableDataOne"
              style="width: 100%"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-row>
                    <el-col :span="3">
                      <span style="font-weight: bolder">单位反馈：</span>
                    </el-col>
                    <el-col :span="21">
                      <p style="margin-top: 0px">{{ props.row.unitFeedback }}</p>
                    </el-col>
                  </el-row>
                  <el-row style="margin-top: 20px">
                    <el-col :span="3">
                      <span style="font-weight: bolder">导师反馈：</span>
                    </el-col>
                    <el-col :span="21">
                      <p style="margin-top: 0px">{{ props.row.advisorFeedback }}</p>
                    </el-col>
                  </el-row>
                  <el-row style="margin-top: 20px">
                    <el-col :span="3">
                      <span style="font-weight: bolder">其他反馈：</span>
                    </el-col>
                    <el-col :span="21">
                      <p style="margin-top: 0px">{{ props.row.otherFeedback }}</p>
                    </el-col>
                  </el-row>
                </template>
              </el-table-column>
              <el-table-column
                label="序号"
                prop="id"
              />
              <el-table-column
                label="实习单位"
                prop="practiceUnit"
              />
              <el-table-column
                label="实习部门"
                prop="practiceDepartment"
              />
              <el-table-column
                label="反馈时间"
                prop="feedbackDate"
              />
            </el-table>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" style="" @click="dialogVisibleTwo = false">关 闭</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getStudentInternshipInfo, submitNewInternshipFeedback, getInternshipFeedbackDetail } from '@/api/studentStatusInformation'
export default {
  name: 'InternshipFeedback',
  data() {
    return {
      pagesize: '10',
      currentPage4: 1,
      dialogVisibleOne: false,
      dialogVisibleTwo: false,
      myform: {},
      form: {
        practiceDepartment: '',
        practiceUnit: '',
        practiceStartDate: '',
        practiceEndDate: '',
        unitFeedback: '',
        advisorFeedback: '',
        otherFeedback: '',
        // id: '',
        feedbackDate: '',
        practiceId: ''
      },
      tableDataTea: [
        {
          xh: '1',
          name: '人民医院护理实习',
          danwei: '人民医院',
          year: '2019-09-12至2020-02-20',
          type: '预就业实习',
          status: '已反馈',
          fankui: '1',
          num: '100',
          renum: '73'
        },
        {
          xh: '2',
          name: '石家庄口腔医院实习',
          danwei: '石家庄口腔医院',
          year: '2020-09-15',
          type: '预就业实习',
          status: '未反馈',
          fankui: '0',
          num: '100',
          renum: '43'
        }
      ],
      tableDataOne: [],
      feedback: {}
    }
  },
  mounted() {
    this.getAllIntern()
  },
  methods: {
    getAllIntern: function() {
      const prams = {
        username: localStorage.getItem('jwt')
      }
      getStudentInternshipInfo(prams).then(resposne => {
        console.log('测试获取所有的实习实践信息')
        console.log(resposne.data)
        this.tableDataTea = resposne.data.data
      })
    },
    beginFeedback: function(row) {
      this.dialogVisibleOne = true
      console.log(row)
      this.form.practiceId = row.id
    },
    lookDetails: function(row) {
      this.dialogVisibleTwo = true
      const prams = {
        practiceId: row.id
      }
      getInternshipFeedbackDetail(prams).then(response => {
        console.log('测试根据id获取所有的反馈详情')
        console.log(response.data)
        this.tableDataOne = response.data.data
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    },
    submitNewFeedBack: function() {
      var flag = true
      for (const i in this.form) {
        if (this.form[i] === '') {
          flag = false
        }
      }
      if (flag) {
        this.dialogVisibleOne = false
        const sPracticeFeedback = this.form
        submitNewInternshipFeedback(sPracticeFeedback).then(response => {
          console.log('测试提交新的反馈')
          console.log(response.data)
          this.getAllIntern()
          for (const i in this.form) {
            this.form[i] = ''
          }
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
      // this.dialogVisibleOne = false
      // const sPracticeFeedback = this.form
      // submitNewInternshipFeedback(sPracticeFeedback).then(response => {
      //   console.log('测试提交新的反馈')
      //   console.log(response.data)
      //   this.getAllIntern()
      // })
    }
  }
}
</script>

<style scoped>
  .fenye {
    text-align: center;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
