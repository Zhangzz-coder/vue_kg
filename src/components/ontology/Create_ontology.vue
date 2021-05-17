<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>本体管理</el-breadcrumb-item>
      <el-breadcrumb-item>创建本体</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索输入框区域 -->
    <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
             size="small">
      <el-form-item label="本体名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="本体描述" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入描述"></el-input>
      </el-form-item>
    </el-form>
    <!-- 本体编辑区域 -->
    <el-row>
      <!-- 左侧显示区域 -->
      <el-col :span="isCollapse ? 18 : 24"><div class="left_area">
        <el-card class="box-card" :body-style="{padding: 0}">
          <div slot="header" class="clearfix">
            <el-link type="primary" @click="showRight=!showRight">概念模式编辑</el-link>
            <el-divider direction="vertical"></el-divider>
            <el-link type="primary" @click="showRight=!showRight">关系模式编辑</el-link>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-zoom-in"></i>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-zoom-out"></i>
            <el-divider direction="vertical"></el-divider>
            <i class="el-icon-help"></i>
            <i class="el-icon-s-unfold" style="float: right; cursor: pointer" @click="rightCollapse"></i>
          </div>
          <!--图谱展示区 -->
          <div>图谱展示区</div>
          <div>图谱展示区</div>
          <div>图谱展示区</div>
          <div>图谱展示区</div>
          <div>图谱展示区</div>
          <div>图谱展示区</div>
          <!-- 底部按钮区 -->
          <div class="leftButton">
            <el-button type="danger">保存</el-button>
            <el-button>取消</el-button>
          </div>
        </el-card>
      </div></el-col>
      <!-- 右侧输入区域-- 关系输入框 -->
      <el-col :span="6"><div class="right_area_relation" v-show="!showRight">
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>关系</span>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="65px" class="demo-ruleForm"
                   size="small" style="margin-top: 20px" >
            <el-form-item label="名称" prop="name" class="formInput" style="width: 90%">
              <el-input v-model="ruleForm.name" placeholder="请输入关系名称"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </div></el-col>
      <!-- 右侧输入区域-- 概念输入框 -->
      <el-col :span="6"><div class="right_area_content" v-show="showRight">
        {{show}}
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>概念</span>
          </div>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="65px" class="demo-ruleForm"
                   size="small" style="margin-top: 20px" >
            <el-form-item label="名称" prop="name" class="formInput" style="width: 90%">
              <el-input v-model="ruleForm.name" placeholder="请输入概念名称"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: ''
      },
      rules: {
        name: [
          { required: true }
        ]
      },
      showRight: true,
      isCollapse: true
    }
  },
  methods: {
    rightCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  //border: solid;
  border-radius: 4px;
}
.el-card{
  height: 478px;
}
.leftButton{
  width: 150px;
  margin: auto;
}
</style>
