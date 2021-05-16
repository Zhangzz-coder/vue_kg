<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>本体管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图区域 -->
    <el-card class="box-card">
      <!-- 按钮区 -->
      <el-button size="small">创建本体</el-button>
      <el-button size="small">批量导入</el-button>
      <el-button size="small">删除</el-button>
      <!-- 列表区域 -->
      <el-table
        :data="ontologyList"
        highlight-current-row
        style="width: 100%"
        border stripe>
        <el-table-column type="selection" width="55px"></el-table-column>
        <el-table-column property="kg_name" label="名称" width="135px" align="center" >
        </el-table-column>
        <el-table-column property="update_time" label="更新时间" align="center">
        </el-table-column>
        <el-table-column property="entity_num" label="实体个数" align="center" width="100px">
        </el-table-column>
        <el-table-column property="relation_num" label="关系个数" align="center" width="100px">
        </el-table-column>
        <el-table-column property="description" label="描述" align="center">
        </el-table-column>
        <el-table-column property="action" label="操作" align="center" width="280px">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">预览</el-button>
            <el-button
              size="mini"
              @click="addFood(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)">导出</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Ontology_manage',
  data () {
    return {
      // 获取本体列表的参数对象
      queryInfo: {
        // 查阅参数
        query: '',
        // 当前页码
        pagenum: 1,
        // 每页显示条数
        pagesize: 2
      },
      ontologyList: [{
        kg_name: '电力知识图谱',
        update_time: '2021-01-01 12:00:07',
        entity_num: '100000',
        relation_num: '200',
        description: '电力相关知识'
      },
      {
        kg_name: '汽车知识图谱',
        update_time: '2021-02-12 15:30:59',
        entity_num: '200000',
        relation_num: '300',
        description: '汽车相关知识'
      }],
      total: 2
    }
  },
  created () {
    this.getOntologyList()
  },
  methods: {
    async getOntologyList () {
      const { data: res } = await this.$http.get('ontology_manage', { params: this.queryInfo })
      if (res.meta.status !== 200) {
        // 现在后端还没写先使用默认值，因此先注释掉这行
        // return this.$message.error('获取本体列表失败')
      }
      // ontology和total是后端发回的消息中的字段
      this.ontologyList = res.data.ontology
      this.total = res.data.total
    },
    // 监听 pagesize(每页显示多少条数据) 改变的事件
    handleSizeChange (newSize) {
      this.queryInfo.pagesize = newSize
      this.getOntologyList()
    },
    // 监听 页码值 改变的事件
    handleCurrentChange (newPage) {
      this.queryInfo.pagenum = newPage
      this.getOntologyList()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
