<template>
  <div class="index">
    <el-row>
      <el-col :span="24">
        <router-link :to="{ name: 'ArticleSteps' }">
          <el-button type="primary" size="mini">步骤条</el-button>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
.index {

}
</style>
