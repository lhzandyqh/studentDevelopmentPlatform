<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">测评通知</span>
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
                width="100"
              />
              <el-table-column
                prop="bt"
                label="标题"
              />
              <el-table-column
                prop="ydcs"
                label="阅读次数"
              />
              <el-table-column
                prop="fbbm"
                label="发布部门"
                width="200"
              />
              <el-table-column
                prop="fbsj"
                label="发布时间"
              />
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" @click="read(scope.row)">阅读</el-button>
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
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">测评列表</span>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <div style="display: flex;align-items: center;margin: 15px 0;">
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">测评名称:</div>
                <div>
                  <el-input v-model="myform.input" />
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">面向对象:</div>
                <div>
                  <el-select v-model="myform.attr" placeholder="请选择">
                    <el-option label="全校学生" value="全校学生" />
                    <el-option label="本学院学生" value="本学院学生" />
                  </el-select>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">测评类型:</div>
                <div>
                  <el-select v-model="myform.type" placeholder="请选择">
                    <el-option label="素质与能力测评" value="素质与能力测评" />
                    <el-option label="职业规划测评" value="职业规划测评" />
                    <el-option label="人才测评" value="人才测评" />
                    <el-option label="心理测评" value="心理测评" />
                    <el-option label="职业生涯测评" value="职业生涯测评" />
                  </el-select>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">测评时间:</div>
                <div>
                  <el-select v-model="myform.time" placeholder="请选择">
                    <el-option label="全部" value="全部" />
                    <el-option label="本周" value="本周" />
                    <el-option label="下一周" value="下一周" />
                    <el-option label="上一周" value="上一周" />
                    <el-option label="下一月" value="下一月" />
                  </el-select>
                </div>
                <div>
                  <el-button type="primary" style="margin-left:15px">搜索</el-button>
                </div>
              </div>
            </el-row>
            <el-divider />
            <el-table
              :data="tableDataTwo"
              stripe
              style="width: 100%"
            >
              <el-table-column
                prop="jzmc"
                label="测评名称"
                width="300"
              />
              <el-table-column
                prop="xs"
                label="测评类型"
              />
              <el-table-column
                prop="jzsj"
                label="测评时间"
              />
              <el-table-column
                prop="mxdx"
                label="面向对象"
              />
              <el-table-column
                prop="fbbm"
                label="发布部门"
              />
              <el-table-column
                prop="bm"
                label="状态"
              />
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <el-button v-if="scope.row.bm === '已完成'" type="text" disabled @click="read(scope.row)">开始测评</el-button>
                  <el-button v-if="scope.row.bm === '未完成'" type="text" @click="read(scope.row)">开始测评</el-button>
                  <el-button type="text" @click="read(scope.row)">获取报告</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="fenye">
              <el-pagination
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 30]"
                :page-size="5"
                style="margin-top:20px;"
                :total="tableDataTwo.length"
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
  name: 'ComprehensiveEvaluation',
  data() {
    return {
      myform: {
        attr: '',
        input: ''
      },
      tableData: [
        {
          xh: '1',
          bt: '关于医专学生疫情期间心理状况测评使用说明',
          ydcs: '5203',
          fbbm: '教务部',
          fbsj: '2020-09-12'
        }
      ],
      tableDataTwo: [
        {
          jzmc: '关于医专学生疫情期间心理状况测评使用说明',
          xs: '素质测评',
          jzsj: '2020-10-22 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '未完成'
        },
        {
          jzmc: '医学类大专院校职业规划测评',
          xs: '职业规划测评',
          jzsj: '2020-09-27 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '未完成'
        },
        {
          jzmc: '大学生综合能力测评',
          xs: '素质与能力测试',
          jzsj: '2020-09-12 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '未完成'
        },
        {
          jzmc: '大学生日常心理状态测评',
          xs: '心理测评',
          jzsj: '2020-08-22 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '已完成'
        },
        {
          jzmc: 'IQT思维能力测评',
          xs: '素质与能力测评',
          jzsj: '2020-08-12 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '已完成'
        }
      ],
      currentPage: ''
    }
  },
  methods: {
    read: function(row) {
      console.log('开始阅读')
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }

</style>
