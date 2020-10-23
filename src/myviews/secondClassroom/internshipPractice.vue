<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">实习实践类别:</div>
        <div>
          <el-select v-model="myform.type" placeholder="请选择">
            <el-option label="理论宣讲" value="理论宣讲" />
            <el-option label="社会调查" value="省级" />
            <el-option label="学习参观" value="市级" />
            <el-option label="社会服务" value="校级" />
            <el-option label="预就业实习" value="院级" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">申请对象:</div>
        <div>
          <el-select v-model="myform.duixiang" placeholder="请选择">
            <el-option label="在校所有学生" value="在校所有学生" />
            <el-option label="本院所有学生" value="本院所有学生" />
            <el-option label="其他" value="其他" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">申请状态:</div>
        <div>
          <el-select v-model="myform.zhuangtai" placeholder="请选择">
            <el-option label="可申请" value="可申请" />
            <el-option label="不可申请" value="不可申请" />
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px">查询</el-button>
        </div>
        <div>
          <el-button type="success" style="margin-left:15px" @click="jilu">申请记录</el-button>
        </div>
      </div>
    </el-row>
    <el-divider />
    <el-table
      :data="tableDataTea"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="xh"
        label="序号"
        width="50"
      />
      <el-table-column
        prop="name"
        label="实习实践名称"
      />
      <el-table-column
        prop="year"
        label="年度"
      />
      <el-table-column
        prop="type"
        label="实习实践类别"
      />
      <el-table-column
        prop="status"
        label="状态"
      />
      <el-table-column
        prop="num"
        label="实习人数"
      />
      <el-table-column
        prop="renum"
        label="已申请人数"
      />
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="shenqing(scope.row)">申请</el-button>
          <el-button type="text" @click="selectCourse(scope.row)">下载实习实践申请表</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
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
        title="奖学金申请"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <div>
          <span style="font-size: 14px;font-weight: bolder">个人信息</span>
        </div>
        <el-row style="margin-top: 20px">
          <el-table
            :data="oneData"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="name"
              label="姓名"
            />
            <el-table-column
              prop="sex"
              label="性别"
            />
            <el-table-column
              prop="date"
              label="出生年月"
            />
            <el-table-column
              prop="zzmm"
              label="政治面貌"
            />
          </el-table>
        </el-row>
        <el-row>
          <el-table
            :data="twoData"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="zy"
              label="专业"
            />
            <el-table-column
              prop="xh"
              label="学号"
            />
            <el-table-column
              prop="sfz"
              label="身份证"
            />
            <el-table-column
              prop="xz"
              label="学制"
            />
          </el-table>
        </el-row>
        <el-row style="margin-top: 20px">
          <el-form ref="ktxmform" :model="myform" label-width="200px">
            <el-form-item label="附件上传">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">点击上传实习实践申请表</el-button>
                <div slot="tip" class="el-upload__tip">只能上传word文件，且不超过1000kb</div>
              </el-upload>
            </el-form-item>
          </el-form>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">提 交 申 请</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        title="实习实践申请记录"
        :visible.sync="dialogVisibleTwo"
        width="50%"
        :before-close="handleClose"
      >
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="申请中" name="first">
            <el-table
              :data="tableDataThree"
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="实习实践名称"
              />
              <el-table-column
                prop="year"
                label="年度"
              />
              <el-table-column
                prop="date"
                label="申请日期"
              />
              <el-table-column
                prop="status"
                label="状态"
              >
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.status === '申请成功'" type="success">申请成功</el-tag>
                  <el-tag v-if="scope.row.status === '待审核'" type="info">待审核</el-tag>
                  <el-tag v-if="scope.row.status === '申请失败'" type="warning">申请失败</el-tag>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="历史申请" name="second">
            <el-table
              :data="tableDataFour"
              style="width: 100%"
            >
              <el-table-column
                prop="name"
                label="实习实践名称"
              />
              <el-table-column
                prop="year"
                label="年度"
              />
              <el-table-column
                prop="date"
                label="申请日期"
              />
              <el-table-column
                prop="status"
                label="状态"
              >
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.status === '申请成功'" type="success">申请成功</el-tag>
                  <el-tag v-if="scope.row.status === '待审核'" type="info">待审核</el-tag>
                  <el-tag v-if="scope.row.status === '申请失败'" type="warning">申请失败</el-tag>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisibleTwo = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisibleTwo = false">确 定</el-button>
        </span>
      </el-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: 'InternshipPractice',
  data() {
    return {
      activeName: 'first',
      oneData: [{
        name: '王小明',
        sex: '男',
        date: '1995-02-21',
        zzmm: '中国共产主义青年团团员'
      }],
      twoData: [{
        zy: '护理',
        xh: '2018Z2354',
        sfz: '4304821995022101111',
        xz: '3'
      }],
      tableDataThree: [
        {
          name: '人民医院护理实习',
          year: '2020',
          date: '2020-10-02',
          status: '待审核'
        },
        {
          name: '周末志愿者',
          year: '2020',
          date: '2020-08-22',
          status: '申请成功'
        }
      ],
      tableDataFour: [],
      currentPage: '',
      dialogVisible: false,
      dialogVisibleTwo: false,
      tableDataTea: [
        {
          xh: '1',
          name: '人民医院护理实习',
          year: '2020',
          type: '预就业实习',
          status: '申请中',
          num: '100',
          renum: '73'
        },
        {
          xh: '2',
          name: '石家庄口腔医院实习',
          year: '2020',
          type: '预就业实习',
          status: '申请中',
          num: '100',
          renum: '43'
        },
        {
          xh: '3',
          name: '石家庄妇产医院实习',
          year: '2020',
          type: '预就业实习',
          status: '申请中',
          num: '50',
          renum: '13'
        },
        {
          xh: '4',
          name: '护理健康三下乡',
          year: '2020',
          type: '社会服务',
          status: '申请中',
          num: '50',
          renum: '9'
        },
        {
          xh: '5',
          name: '正确急救走进社区',
          year: '2020',
          type: '理论宣讲',
          status: '申请中',
          num: '50',
          renum: '8'
        },
        {
          xh: '6',
          name: '周末志愿者',
          year: '2020',
          type: '社会服务',
          status: '申请中',
          num: '50',
          renum: '8'
        },
        {
          xh: '7',
          name: '庆国庆河北省博物馆参观',
          year: '2020',
          type: '学习参观',
          status: '申请中',
          num: '64',
          renum: '16'
        }
      ],
      myform: {},
      input: ''
    }
  },
  methods: {
    selectCourse: function(row) {
      console.log(row.kcmc)
    },
    shenqing: function(row) {
      console.log(row)
      this.dialogVisible = true
    },
    jilu: function() {
      this.dialogVisibleTwo = true
    },
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
