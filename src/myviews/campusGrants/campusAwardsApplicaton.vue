<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">奖项级别:</div>
        <div>
          <el-select v-model="myform.type" placeholder="请选择">
            <el-option label="校级" value="校级" />
            <el-option label="院级" value="院级" />
            <el-option label="社团级" value="冠名奖学金" />
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
        prop="jxmc"
        label="奖项名称"
      />
      <el-table-column
        prop="nd"
        label="年度"
      />
      <el-table-column
        prop="jb"
        label="级别"
      />
      <el-table-column
        prop="zt"
        label="状态"
      />
      <el-table-column
        prop="psfs"
        label="评审方式"
      />
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="shenqing(scope.row)">申请</el-button>
          <el-button type="text" @click="selectCourse(scope.row)">查看申请要求</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="5"
        style="margin-top:20px;"
        :total="tableDataTea.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <div>
      <el-dialog
        title="校园奖项申请"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose"
      >
        <el-row>
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
            <el-form-item label="具体原因">
              <el-input
                v-model="myform.textarea"
                type="textarea"
                :rows="5"
                placeholder="请输入具体原因"
              />
            </el-form-item>
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
                <el-button size="small" type="primary">点击上传成绩单和相关证明</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
  </div>
</template>

<script>
export default {
  name: 'CampusAwardsApplicaton',
  data() {
    return {
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
      currentPage: '',
      dialogVisible: false,
      tableDataTea: [
        {
          xh: '1',
          jxmc: '年度优秀毕业生',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '2',
          jxmc: '年度优秀团干',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '3',
          jxmc: '三好学生',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '4',
          jxmc: '入党积极分子',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '5',
          jxmc: '社会实践先进个人',
          nd: '2020',
          jb: '校级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '6',
          jxmc: '年度护理之星',
          nd: '2020',
          jb: '院级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '7',
          jxmc: '优秀志愿者',
          nd: '2020',
          jb: '院级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '8',
          jxmc: '优秀共青团员',
          nd: '2020',
          jb: '院级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '9',
          jxmc: '专业学习模范',
          nd: '2020',
          jb: '院级',
          zt: '申请中',
          psfs: '其他'
        },
        {
          xh: '10',
          jxmc: '学生协会工作优秀个人',
          nd: '2020',
          jb: '社团级',
          zt: '申请中',
          psfs: '其他'
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
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
</style>
