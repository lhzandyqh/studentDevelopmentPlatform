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
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="zcbh"
        label="注册编号"
      />
      <el-table-column
        prop="zcr"
        label="注册人"
      />
      <el-table-column
        prop="zcrq"
        label="注册日期"
      />
      <el-table-column
        prop="zcxn"
        label="注册学年"
      />
      <el-table-column
        prop="zcxq"
        label="注册学期"
      />
      <el-table-column
        prop="xy"
        label="学院"
      />
      <el-table-column align="center" label="审核状态">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.zhuangtai === 1" type="success">审核通过</el-tag>
          <el-tag v-if="scope.row.zhuangtai === 2" type="warning">暂未审核</el-tag>
          <el-tag v-if="scope.row.zhuangtai === 3" type="danger">审核未通过</el-tag>
        </template>
      </el-table-column>
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
              <el-input v-model="myform.name" />
            </el-form-item>
            <el-form-item label="所在学院" style="width: 400px">
              <el-input v-model="myform.xueyuan" />
            </el-form-item>
            <el-form-item label="注册学期">
              <el-select v-model="myform.xueqi" placeholder="请选择注册学期">
                <el-option label="秋季学期" value="秋季学期" />
                <el-option label="春季学期" value="春季学期" />
              </el-select>
            </el-form-item>
            <el-form-item label="注册学年">
              <el-select v-model="myform.xuenian" placeholder="请选择注册学期">
                <el-option label="大一" value="大一" />
                <el-option label="大二" value="大二" />
                <el-option label="大三" value="大三" />
              </el-select>
            </el-form-item>
            <el-form-item label="注册日期" style="width: 400px">
              <el-date-picker
                v-model="myform.riqi"
                type="date"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">注 册</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemesterEnrollment',
  data() {
    return {
      dialogVisible: false,
      myform: {},
      tableData: [{
        zcbh: '0201011',
        zcr: '王小明',
        zcrq: '2018-09-01',
        zcxn: '大一',
        xy: '护理学院',
        zcxq: '秋季学期',
        zhuangtai: 1
      }, {
        zcbh: '0201012',
        zcr: '王小明',
        zcxn: '大一',
        zcrq: '2019-02-01',
        xy: '护理学院',
        zcxq: '春季学期',
        zhuangtai: 1
      }, {
        zcbh: '0201013',
        zcr: '王小明',
        zcxn: '大二',
        zcrq: '2019-09-01',
        xy: '护理学院',
        zcxq: '秋季学期',
        zhuangtai: 1
      }, {
        zcbh: '0201014',
        zcr: '王小明',
        zcxn: '大二',
        zcrq: '2020-02-01',
        xy: '护理学院',
        zcxq: '春季学期',
        zhuangtai: 1
      }, {
        zcbh: '0201015',
        zcr: '王小明',
        zcxn: '大一',
        zcrq: '2020-10-01',
        xy: '护理学院',
        zcxq: '秋季学期',
        zhuangtai: 2
      }]
    }
  },
  methods: {
    handleClose(done) {
      this.myform = {}
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
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
