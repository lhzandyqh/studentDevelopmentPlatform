<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">奖助类型:</div>
        <div>
          <el-select v-model="myform.type" placeholder="请选择">
            <el-option label="奖学金" value="奖学金" />
            <el-option label="助学金" value="助学金" />
            <el-option label="校园奖励" value="校园奖励" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">获奖状态:</div>
        <div>
          <el-select v-model="myform.zhuangtai" placeholder="请选择">
            <el-option label="申请中" value="申请中" />
            <el-option label="已获得" value="已获得" />
            <el-option label="未获得" value="未获得" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">获奖学期:</div>
        <div>
          <el-select v-model="myform.time" placeholder="请选择">
            <el-option label="2020-2021学年（秋）第一学期" value="2020-2021学年（秋）第一学期" />
            <el-option label="2020-2021学年（春）第二学期" value="2020-2021学年（春）第二学期" />
            <el-option label="2020-2021学年（夏）第三学期" value="2020-2021学年（夏）第三学期" />
            <el-option label="2019-2020学年（秋）第一学期" value="2019-2020学年（秋）第一学期" />
            <el-option label="2019-2020学年（春）第二学期" value="2019-2020学年（春）第二学期" />
            <el-option label="2019-2020学年（夏）第三学期" value="2019-2020学年（夏）第三学期" />
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-divider />
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="xh"
          label="序号"
          width="120"
        />
        <el-table-column
          prop="jzmc"
          label="奖助名称"
        />
        <el-table-column
          prop="jzlx"
          label="奖助类型"
        />
        <el-table-column
          prop="zt"
          label="状态"
          show-overflow-tooltip
        />
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button type="primary">导出我获得的奖助</el-button>
      </div>
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
  </div>
</template>

<script>
export default {
  name: 'MyGrant',
  data() {
    return {
      tableData: [
        {
          xh: '1',
          jzmc: '国家奖学金',
          jzlx: '奖学金',
          zt: '申请中'
        },
        {
          xh: '2',
          jzmc: '助学金',
          jzlx: '助学金',
          zt: '已获得'
        },
        {
          xh: '3',
          jzmc: '年度优秀毕业生',
          jzlx: '校园奖项',
          zt: '申请中'
        },
        {
          xh: '4',
          jzmc: '专业学习模范',
          jzlx: '校园奖项',
          zt: '已获得'
        },
        {
          xh: '5',
          jzmc: '入党积极分子',
          jzlx: '校园奖项',
          zt: '已获得'
        }
      ],
      myform: {},
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped>
.fenye{
  text-align: center;
}
</style>
