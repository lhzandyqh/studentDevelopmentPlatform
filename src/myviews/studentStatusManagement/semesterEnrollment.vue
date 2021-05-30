<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">学期注册记录表</div>
        <div>
          <el-button type="primary" style="margin-left:15px" @click="openThisDialog">学期注册</el-button>
        </div>
      </div>
    </el-row>
    <el-divider />
    <el-table
      :data="tableData.slice((currentPage4-1)*pagesize,currentPage4*pagesize)"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="registerNo"
        label="注册编号"
      />
      <el-table-column
        prop="registerPerson"
        label="注册人"
      />
      <el-table-column
        prop="registerDate"
        label="注册日期"
      />
      <el-table-column
        prop="registerYear"
        label="注册学年"
      />
      <el-table-column
        prop="registerTerm"
        label="注册学期"
      />
      <el-table-column
        prop="college"
        label="学院"
      />
      <el-table-column align="center" label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.auditStatus === '审核通过'" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.auditStatus === '待审核'" type="warning">暂未审核</el-tag>
          <el-tag v-if="scope.row.auditStatus === '审核未通过' " type="danger">审核未通过</el-tag>
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
    <div>
      <el-dialog
        title="学期注册"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <el-row>
          <el-form ref="ktxmform" :model="myform" label-width="200px">
            <el-form-item label="注册人" style="width: 400px">
              <el-input v-model="myform.registerPerson" />
            </el-form-item>
            <el-form-item label="所在学院" style="width: 400px">
              <el-input v-model="myform.college" />
            </el-form-item>
            <el-form-item label="注册学期">
              <el-select v-model="myform.registerTerm" placeholder="请选择注册学期">
                <el-option label="秋季学期" value="秋季学期" />
                <el-option label="春季学期" value="春季学期" />
              </el-select>
            </el-form-item>
            <el-form-item label="注册学年">
              <el-select v-model="myform.registerYear" placeholder="请选择注册学期">
                <el-option label="大一" value="大一" />
                <el-option label="大二" value="大二" />
                <el-option label="大三" value="大三" />
              </el-select>
            </el-form-item>
            <el-form-item label="注册日期" style="width: 400px">
              <el-date-picker
                v-model="myform.registerDate"
                type="date"
                placeholder="选择日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
              />
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="beginRes">注 册</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getRegisterInfo, beginTermRegister } from '@/api/studentStatusInformation'
export default {
  name: 'SemesterEnrollment',
  data() {
    return {
      dialogVisible: false,
      pagesize: '10',
      currentPage4: 1,
      myform: {
        username: localStorage.getItem('jwt'),
        registerPerson: '',
        college: '',
        registerTerm: '',
        registerYear: '',
        registerDate: ''
      },
      tableData: []
    }
  },
  mounted() {
    this.getRegData()
  },
  methods: {
    getRegData: function() {
      const prams = {
        username: localStorage.getItem('jwt')
      }
      getRegisterInfo(prams).then(response => {
        console.log('测试注册信息')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    beginRes: function() {
      var flag = true
      for (const i in this.myform) {
        if (this.myform[i] === '') {
          flag = false
        }
      }
      if (flag) {
        this.dialogVisible = false
        // const prmas = {
        //   sTermRegisterDto: this.myform
        // }
        var sTermRegisterDto = this.myform
        // console.log(prmas)
        console.log(sTermRegisterDto)
        beginTermRegister(sTermRegisterDto).then(response => {
          console.log('测试注册')
          console.log(response.data)
          this.getRegData()
          for (const i in this.myform) {
            this.myform[i] = ''
          }
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
      } else {
        this.$message({
          message: '注册信息未填写完整',
          type: 'warning'
        })
      }
      // this.dialogVisible = false
      // // const prmas = {
      // //   sTermRegisterDto: this.myform
      // // }
      // var sTermRegisterDto = this.myform
      // // console.log(prmas)
      // console.log(sTermRegisterDto)
      // beginTermRegister(sTermRegisterDto).then(response => {
      //   console.log('测试注册')
      //   console.log(response.data)
      //   this.getRegData()
      // })
    },
    handleClose(done) {
      this.myform = {}
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage4 = val
    },
    openThisDialog: function() {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
