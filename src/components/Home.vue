<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/kg_logo.png" alt="">
        <span>知识图谱管理系统</span>
      </div>
      <span style="margin-left: 800px; font-size: 20px">admin</span>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边导航栏 -->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opened
                 :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <span>模块一</span>
            </template>
            <!-- 二级菜单模板区-->
            <el-menu-item index="module1-1" @click="saveNavState('module1-1')">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>子模块1</span>
              </template>
            </el-menu-item>
            <el-menu-item index="module1-2" @click="saveNavState('module1-2')">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>子模块2</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="ontology_manage" @click="saveNavState('ontology_manage')">
            <i class="el-icon-menu"></i>
            <span slot="title">本体管理</span>
          </el-menu-item>
          <el-menu-item index="module3" @click="saveNavState('module3')">
            <i class="el-icon-menu"></i>
            <span slot="title">模块三</span>
          </el-menu-item>
          <el-menu-item index="module4" @click="saveNavState('module4')">
            <i class="el-icon-menu"></i>
            <span slot="title">模块四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      // 是否折叠
      isCollapse: false,
      // 被激活的链接地址
      activePath: ''
    }
  },
  created () {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 退出功能，清空token，然后跳转到login页面
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 点击按钮切换
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.home_container{
  height: 100%
}

.el-header{
  background-color: #373d41;
  display: flex;
  // 左右贴边对齐
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 25px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 20px;
    }
  }
}

.el-aside{
  background-color: #333744;
  .el-menu{
    border-right: none;
  }
}

.el-main{
  background-color: #eaedf1
}

.toggle-button{
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
