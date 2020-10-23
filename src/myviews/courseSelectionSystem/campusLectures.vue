<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">讲座通知</span>
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
            <span style="font-weight: bolder;color:#409EFF ">讲座预告</span>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <div style="display: flex;align-items: center;margin: 15px 0;">
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">讲座名称:</div>
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
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">讲座时间:</div>
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
                  <el-button type="primary" style="margin-left:15px">查询</el-button>
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
                label="讲座名称"
              />
              <el-table-column
                prop="xs"
                label="学时"
              />
              <el-table-column
                prop="jzsj"
                label="讲座时间"
              />
              <el-table-column
                prop="mxdx"
                label="面向对象"
                width="200"
              />
              <el-table-column
                prop="zjr"
                label="主讲人"
              />
              <el-table-column
                prop="bm"
                label="部门"
              />
              <el-table-column align="center" label="操作">
                <template slot-scope="scope">
                  <el-button type="text" @click="read(scope.row)">查看详情</el-button>
                  <el-button type="text" @click="read(scope.row)">预约讲座</el-button>
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
  name: 'CampusLectures',
  data() {
    return {
      myform: {
        attr: '',
        input: ''
      },
      tableData: [
        {
          xh: '1',
          bt: '关于图书馆三楼报告厅使用说明',
          ydcs: '5803',
          fbbm: '教务部',
          fbsj: '2020-10-12'
        }
      ],
      tableDataTwo: [
        {
          jzmc: '医疗大数据在临床上的应用',
          xs: '2',
          jzsj: '2020-10-22 19:00-20:40',
          mxdx: '全校学生',
          zjr: '李老师',
          bm: '护理学院'
        },
        {
          jzmc: '如何捍卫护理道德',
          xs: '2',
          jzsj: '2020-09-27 19:00-20:40',
          mxdx: '全校学生',
          zjr: '李老师',
          bm: '护理学院'
        },
        {
          jzmc: '医疗污染物在环境中的行为及效应',
          xs: '2',
          jzsj: '2020-09-12 19:00-20:40',
          mxdx: '全校学生',
          zjr: '胡老师',
          bm: '护理学院'
        },
        {
          jzmc: '防疫关键时期的日常行为',
          xs: '2',
          jzsj: '2020-08-22 19:00-20:40',
          mxdx: '全校学生',
          zjr: '刘老师',
          bm: '护理学院'
        },
        {
          jzmc: '护理学及其前沿热点问题',
          xs: '2',
          jzsj: '2020-08-12 19:00-20:40',
          mxdx: '全校学生',
          zjr: '杨老师',
          bm: '护理学院'
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
