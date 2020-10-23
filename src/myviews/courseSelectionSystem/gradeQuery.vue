<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">人民医专就读期间课程成绩</span>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <div style="display: flex;align-items: center;margin: 15px 0;">
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">姓名:</div>
                <div>
                  <!--                  <el-input v-model="myform.input" />-->
                  <span style="font-size: 14px;color: #797979">王小明</span>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">学号:</div>
                <div>
                  <!--                  <el-input v-model="myform.input" />-->
                  <span style="font-size: 14px;color: #797979">2018Z083425</span>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">专业:</div>
                <div>
                  <!--                  <el-input v-model="myform.input" />-->
                  <span style="font-size: 14px;color: #797979">护理专业</span>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">所在学院:</div>
                <div>
                  <!--                  <el-input v-model="myform.input" />-->
                  <span style="font-size: 14px;color: #797979">护理学院</span>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">学期:</div>
                <div>
                  <el-select v-model="myform.attr" placeholder="请选择">
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
            <el-table
              :data="tableData"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="kcmc"
                label="课程名称"
              />
              <el-table-column
                prop="kcbm"
                label="课程编码"
              />
              <el-table-column
                prop="fs"
                label="分数"
              />
              <el-table-column
                prop="xf"
                label="学分"
                width="200"
              />
              <el-table-column
                prop="xwk"
                label="学位课"
              />
              <el-table-column
                prop="xq"
                label="学期"
              />
              <el-table-column align="center" label="评估状态">
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.pgzt === '通过'" type="success">通过</el-tag>
                  <el-tag v-else type="danger">未通过</el-tag>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
              <el-button type="primary">导出成绩单</el-button>
            </div>
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
  </div>
</template>

<script>
export default {
  name: 'GradeQuery',
  data() {
    return {
      currentPage: '',
      tableData: [
        {
          kcmc: '生理学',
          kcbm: '011M04001H',
          fs: '87',
          xf: '3.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '护理学基础',
          kcbm: '011M04002H',
          fs: '76',
          xf: '3.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '病理学',
          kcbm: '011M04023H',
          fs: '90',
          xf: '2.5',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '生物化学',
          kcbm: '011M04052H',
          fs: '80',
          xf: '2.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '药理学',
          kcbm: '012M04011H',
          fs: '93',
          xf: '2.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '预防医学',
          kcbm: '011M04452H',
          fs: '83',
          xf: '2.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '专业英语',
          kcbm: '087M09212H',
          fs: '73',
          xf: '1.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        },
        {
          kcmc: '思想政治',
          kcbm: '011M04001H',
          fs: '87',
          xf: '1.0',
          xwk: '是',
          xq: '2020-2021学年（春）第二学期',
          pgzt: '通过'
        }
      ],
      myform: {}
    }
  },
  methods: {
    read: function() {

    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
