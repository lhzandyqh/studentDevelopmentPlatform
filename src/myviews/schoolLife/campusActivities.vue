<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">校园活动通知</span>
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
            <span style="font-weight: bolder;color:#409EFF ">校园活动列表</span>
          </div>
          <div class="card-container">
            <el-row :gutter="20">
              <div style="display: flex;align-items: center;margin: 15px 0;">
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">活动名称:</div>
                <div>
                  <el-input v-model="myform.input" />
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">参与对象:</div>
                <div>
                  <el-select v-model="myform.attr" placeholder="请选择">
                    <el-option label="全校学生" value="全校学生" />
                    <el-option label="本学院学生" value="本学院学生" />
                  </el-select>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">活动类型:</div>
                <div>
                  <el-select v-model="myform.type" placeholder="请选择">
                    <el-option label="技能竞赛" value="技能竞赛" />
                    <el-option label="文化文娱" value="文化文娱" />
                    <el-option label="创业创新" value="创业创新" />
                    <el-option label="社团活动" value="社团活动" />
                    <el-option label="体育竞赛" value="体育竞赛" />
                  </el-select>
                </div>
                <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">活动时间:</div>
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
                label="活动名称"
                width="300"
              />
              <el-table-column
                prop="xs"
                label="活动类型"
              />
              <el-table-column
                prop="jzsj"
                label="活动时间"
              />
              <el-table-column
                prop="mxdx"
                label="参与对象"
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
                  <el-button type="text">报名参加</el-button>
                  <el-button type="text" @click="read(scope.row)">查看详情</el-button>
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
          bt: '迎国庆暨中秋晚会向全校征集表演节目',
          ydcs: '5203',
          fbbm: '教务部',
          fbsj: '2020-09-02'
        },
        {
          xh: '2',
          bt: '第六届护理技能比赛开幕',
          ydcs: '5203',
          fbbm: '教务部',
          fbsj: '2020-09-12'
        }
      ],
      tableDataTwo: [
        {
          jzmc: '第六届护理技能比赛',
          xs: '技能竞赛',
          jzsj: '2020-10-22 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '护理学院',
          bm: '进行中'
        },
        {
          jzmc: '迎国庆暨中秋晚会',
          xs: '文体娱乐',
          jzsj: '2020-09-30 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '护理学院',
          bm: '已结束'
        },
        {
          jzmc: '红巾杯专业信息抢答竞赛',
          xs: '技能竞赛',
          jzsj: '2020-09-27 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '已结束'
        },
        {
          jzmc: '第三届全院篮球团体赛',
          xs: '体育竞技',
          jzsj: '2020-09-12 19:00-20:40',
          mxdx: '本院学生',
          fbbm: '教务处',
          bm: '已结束'
        },
        {
          jzmc: '河北省创业创新大赛',
          xs: '创业创新',
          jzsj: '2020-08-22 19:00-20:40',
          mxdx: '全校学生',
          fbbm: '教务处',
          bm: '已结束'
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
