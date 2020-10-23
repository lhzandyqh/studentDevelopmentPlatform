<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <p>所选课学分上下限：最高<span style="color: red">30</span>分，最低<span style="color: red">3</span>分</p>
            <p>选课有效时限: <span style="color: red">2020年9月1日01:59:00至2022年9月1日01:59:00</span></p>
            <p>你总共的选课学分为： <span style="font-weight: bolder;color: red">21</span>，其中学位课学分为：<span style="font-weight: bolder;color: red">17</span></p>
          </div>
          <div class="card-container">
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
                prop="kcbh"
                label="课程编号"
              />
              <el-table-column
                prop="kcmc"
                label="课程编号"
              />
              <el-table-column
                prop="xs"
                label="学时"
                show-overflow-tooltip
              />
              <el-table-column
                prop="xf"
                label="学分"
                show-overflow-tooltip
              />
              <el-table-column
                prop="xwk"
                label="学位课"
                show-overflow-tooltip
              />
              <el-table-column
                prop="xwk"
                label="考核方式"
                show-overflow-tooltip
              />
              <el-table-column
                prop="js"
                label="讲师"
                show-overflow-tooltip
              />
              <el-table-column
                prop="kkxy"
                label="开课学院"
                show-overflow-tooltip
              />
            </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection()">取消选择</el-button>
              <el-button type="primary">导出我的课表</el-button>
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
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MySchedule',
  data() {
    return {
      currentPage: '',
      tableData: [
        {
          xh: '1',
          kcmc: '生理学',
          kcbh: '011M04001H',
          xs: '40',
          xf: '3.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '李老师',
          kkxy: '护理学院'
        },
        {
          xh: '2',
          kcmc: '护理学基础',
          kcbh: '011M04002H',
          xs: '40',
          xf: '3.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '王老师',
          kkxy: '护理学院'
        },
        {
          xh: '3',
          kcmc: '病理学',
          kcbh: '011M04023H',
          xs: '40',
          xf: '2.5',
          xwk: '是',
          khfs: '闭卷考试',
          js: '李老师',
          kkxy: '护理学院'
        },
        {
          xh: '4',
          kcmc: '生物化学',
          kcbh: '011M04052H',
          xs: '40',
          xf: '2.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '王老师',
          kkxy: '护理学院'
        },
        {
          xh: '5',
          kcmc: '药理学',
          kcbh: '012M04011H',
          xs: '40',
          xf: '2.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '杨老师',
          kkxy: '护理学院'
        },
        {
          xh: '6',
          kcmc: '预防医学',
          kcbh: '011M04452H',
          xs: '40',
          xf: '2.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '赵老师',
          kkxy: '护理学院'
        },
        {
          xh: '7',
          kcmc: '专业英语',
          kcbh: '087M09212H',
          xs: '40',
          xf: '1.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '骆老师',
          kkxy: '外国语学院'
        },
        {
          xh: '8',
          kcmc: '思想政治',
          kcbh: '011M04001H',
          xs: '40',
          xf: '1.0',
          xwk: '是',
          khfs: '闭卷考试',
          js: '李老师',
          kkxy: '马克思学院'
        }
      ],
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
