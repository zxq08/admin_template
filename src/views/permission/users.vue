<template>
  <div class="app-container">
    <el-button type="primary" @click="handleAddRole">新建用户</el-button>

    <el-table :data="userList" style="width: 100%;margin-top:30px;" border>
      <el-table-column align="center" label="用户名称" width="220">
        <template slot-scope="scope">
          <!-- {{ scope.row.key }} -->
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="用户介绍" width="220">
        <template slot-scope="scope">
          <!-- {{ scope.row.name }} -->
          {{ scope.row.introduction }}
        </template>
      </el-table-column>
      <el-table-column align="header-center" label="用户权限">
        <template slot-scope="scope">
          <!-- {{ scope.row.description }} -->
          {{ scope.row.roles }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUsers } from '@/api/user'
export default {
  data() {
    return {
      userList: []
    }
  },
  created() {
    // Mock: get all users
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const res = await getUsers()
      this.userList = res.data
    },
    handleAddRole() {
      console.log('add')
    },
    handleEdit() {
      console.log('edit')
    },
    handleDelete() {
      console.log('delete')
    }
  }

}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
</style>
