<template>
  <div class="article-steps">
    <div class="box">
      <div v-for="(item, index) in scheduleList"
           :key="item.title"
           class="item">
        <div :class="item.activeClass === true ? 'activate' : 'inactive'"
             class="item__wrap">
          <p v-if="type === false"
             class="number">{{ index + 1 }}</p>
          <img v-if="type === true"
               :src="item.img"
               alt="">
        </div>
        <p class="item__font">{{ item.title }}</p>
        <p v-if="explain === true"
           class="item__explain">{{ item.explain }}</p>
        <i :class="{
            'bedeck-first': item.activeClass === true
          }"
           class="bedeck" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleSteps',

  props: {
    list: {
      type: Array,
      required: false
    },
    type: {
      type: Boolean,
      required: false
    },
    step: {
      type: Number,
      default: 0
    },
    activate: {
      type: Boolean,
      default: true
    },
    explain: {
      type: Boolean,
      required: false
    }
  },

  data () {
    return {
      scheduleList: [
        {
          activeClass: true,
          img: '//img11.360buyimg.com/n7/jfs/t19486/23/2438839474/239517/2fafbf44/5af52742Nfa205639.jpg',
          title: '汇款到指定账户',
          explain: '通过网上银行转账或者自行汇款至下方指定账户'
        },
        {
          activeClass: false,
          img: '//img13.360buyimg.com/n7/jfs/t1/9085/2/12381/146200/5c371c5bE08328383/4f4ba51aed682207.jpg',
          title: '录入汇款信息',
          explain: '返回发票申请-税款转账页面录入汇款信息'
        },
        {
          activeClass: false,
          img: '//img13.360buyimg.com/n7/jfs/t1/16813/39/12659/358796/5c99f002Ee7721cc6/a25a0116a081b6e6.jpg',
          title: '系统审核',
          explain: '系统会在1~3个工作日内完成审核，审核通过后即可进入开票环节'
        }
      ]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.article-steps {
  margin-left: 32%;

  .box {
    width: 45%;
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
  }

  .item {
    width: 200px;
    position: relative;
    text-align: center;

    &__wrap {
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      margin: 0 auto;
      position: relative;
      background: #ddd;
      border-radius: 50%;

      > img {
        width: 26px;
        height: 26px;
        margin-top: 12px;
      }

      .number {
        position: absolute;
        top: -23px;
        left: 18px;
      }
    }

    .bedeck {
      width: 100px;
      height: 2px;
      position: absolute;
      top: 28px;
      display: inline-block;
      right: -27%;
      background: #ddd;
    }

    .bedeck-first {
      background: #6dd9d4;
    }

    .activate {
      border: 4px solid #caf4e9;
      background: #8ce1d4;
    }

    .inactive {
      border: 4px solid #eee;
      background: #ddd;
    }

    &__font {
      font-size: 14px;
    }

    &__explain {
      text-align: left;
      color: #6c6c6c;
      font-size: 14px;
      margin-top: 30px;
    }
  }

  .item:nth-last-child(1) .bedeck {
    display: none;
  }
}
</style>
