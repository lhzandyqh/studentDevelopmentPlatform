<template>
  <div class="app-container">
    <div class="button_head">
      <div class="button_container">
        <el-button type="primary" plain @click="openLeaveDialog">请假申请</el-button>
      </div>
      <el-divider />
    </div>
    <div class="main_table">
      <div class="table_container">
        <el-table
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
        >
          <el-table-column
            label="编号"
            width="100"
          >
            <template slot-scope="scope">{{ scope.row.id }}</template>
          </el-table-column>
          <el-table-column
            prop="leaveTheme"
            label="请假主题"
            width="600"
          />
          <el-table-column
            prop="leaveType"
            label="请假类型"
          />
          <el-table-column
            prop="startDate"
            label="开始时间"
          />
          <el-table-column
            prop="endDate"
            label="结束时间"
          />
          <el-table-column
            label="状态"
          >
            <template slot-scope="scope">
              <el-tag v-if="scope.row.checkStatus === '待审核'">待审核</el-tag>
              <el-tag v-if="scope.row.checkStatus === '通过'" type="success">通过</el-tag>
              <el-tag v-if="scope.row.checkStatus === '未通过'" type="danger">未通过</el-tag>
              <el-tag v-if="scope.row.checkStatus === '已销假'" type="info">已销假</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
          >
            <template slot-scope="scope">
              <el-button type="text" @click="getLeaveContent(scope.row)">查看请假事由</el-button>
              <el-button v-if="scope.row.checkStatus === '待审核'" type="text" @click="openEditDialog(scope.row)">修改</el-button>
              <el-button v-else type="text" disabled @click="openEditDialog(scope.row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="fenye">
          <el-pagination
            :current-page="currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <el-dialog
      title="请假申请"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="addForm" label-width="80px">
        <el-form-item label="请假主题">
          <el-input v-model="addForm.leaveTheme" />
        </el-form-item>
        <el-form-item label="请假类型">
          <el-select v-model="addForm.leaveType" placeholder="请选择请假类型">
            <el-option label="事假" value="事假" />
            <el-option label="病假" value="病假" />
          </el-select>
        </el-form-item>
        <el-form-item label="请假事由">
          <el-input v-model="addForm.leaveReason" :rows="10" type="textarea" />
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="addForm.startDate" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker v-model="addForm.endDate" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitLeaveForm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改请假申请"
      :visible.sync="dialogVisibleThree"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="editForm" label-width="80px">
        <el-form-item label="请假主题">
          <el-input v-model="editForm.leaveTheme" />
        </el-form-item>
        <el-form-item label="请假类型">
          <el-select v-model="editForm.leaveType" placeholder="请选择请假类型">
            <el-option label="事假" value="事假" />
            <el-option label="病假" value="病假" />
          </el-select>
        </el-form-item>
        <el-form-item label="请假事由">
          <el-input v-model="editForm.leaveReason" :rows="10" type="textarea" />
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="editForm.startDate" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker v-model="editForm.endDate" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="选择日期" style="width: 100%;" />
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleThree = false">取 消</el-button>
        <el-button type="primary" @click="submitEditForm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="请假事由"
      :visible.sync="dialogVisibleTwo"
      width="50%"
      :before-close="handleClose"
    >
      <p>{{ leaveReason }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { studentGetAllLeaveData, studentSubmitLeaveApplication, studentEditLeaveApplication } from '@/api/leaveManagement'
export default {
  name: 'Index',
  data() {
    return {
      dialogVisible: false,
      dialogVisibleTwo: false,
      dialogVisibleThree: false,
      tableData: [],
      currentPage: 1,
      pageSize: 5,
      leaveReason: '',
      addForm: {
        leaveTheme: '',
        leaveType: '',
        leaveReason: '',
        startDate: '',
        endDate: ''
      },
      editForm: {
        leaveTheme: '',
        leaveType: '',
        leaveReason: '',
        startDate: '',
        endDate: ''
      },
      editData: {}
    }
  },
  mounted() {
    this.getAllLeaveData()
  },
  methods: {
    handleSizeChange(val) {
      this.currentPage = 1
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 接下来是自己写的方法
    getLeaveContent: function(row) {
      console.log(row)
      this.dialogVisibleTwo = true
      this.leaveReason = row.leaveReason
    },
    openEditDialog: function(row) {
      this.dialogVisibleThree = true
      this.editData = row
      console.log('测试获取editData')
      console.log(this.editData)
      this.editForm.leaveTheme = row.leaveTheme
      this.editForm.leaveType = row.leaveType
      this.editForm.leaveReason = row.leaveReason
      this.editForm.startDate = row.startDate
      this.editForm.endDate = row.endDate
    },
    goDraftBox: function() {
      this.$router.push({ name: 'draftbox' })
    },
    openLeaveDialog: function() {
      this.dialogVisible = true
    },
    getAllLeaveData: function() {
      const prams = {
        username: '2018140305'
      }
      studentGetAllLeaveData(prams).then(response => {
        console.log('测试学生获取所有请假记录')
        console.log(response.data)
        this.tableData = response.data.data
      })
    },
    submitLeaveForm: function() {
      if (this.addForm.leaveReason === '' || this.addForm.leaveTheme === '' || this.addForm.leaveType === '' || this.addForm.startDate === '' || this.addForm.endDate === '') {
        this.$message({
          message: '请假申请信息未填写完整',
          type: 'warning'
        })
      } else {
        const prams = {
          username: '2018140305',
          leaveTheme: this.addForm.leaveTheme,
          leaveType: this.addForm.leaveType,
          leaveReason: this.addForm.leaveReason,
          startDate: this.addForm.startDate,
          endDate: this.addForm.endDate
        }
        studentSubmitLeaveApplication(prams).then(response => {
          console.log('测试提交请假申请接口')
          console.log(response.data)
          this.$message({
            message: '提交申请完成',
            type: 'success'
          })
          this.dialogVisible = false
          this.getAllLeaveData()
          this.addForm.leaveTheme = ''
          this.addForm.leaveType = ''
          this.addForm.leaveReason = ''
          this.addForm.startDate = ''
          this.addForm.endDate = ''
        })
      }
    },
    submitEditForm: function() {
      if (this.editForm.leaveReason === '' || this.editForm.leaveTheme === '' || this.editForm.leaveType === '' || this.editForm.startDate === '' || this.editForm.endDate === '') {
        this.$message({
          message: '请假申请信息未填写完整',
          type: 'warning'
        })
      } else {
        this.editData.leaveTheme = this.editForm.leaveTheme
        this.editData.leaveType = this.editForm.leaveType
        this.editData.leaveReason = this.editForm.leaveReason
        this.editData.startDate = this.editForm.startDate
        this.editData.endDate = this.editForm.endDate
        console.log('调用提交接口前测试editData')
        console.log(this.editData)
        studentEditLeaveApplication(this.editData).then(response => {
          console.log(response.data)
          this.editData = {}
          this.dialogVisibleThree = false
          this.$message({
            message: '修改申请成功',
            type: 'success'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.button_container{
  text-align: right;
  padding-right: 100px;
}
.main_title span {
  font-size: 15px;
  font-weight: bold;
  color: #666666;
}
.table_container{
  margin-top: 20px;
}
.fenye {
  text-align: center;
  margin-top: 20px;
}
</style>
