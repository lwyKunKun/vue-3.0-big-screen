<template>
  <div class="home-container">
    <div class="home-bgc"></div>
    <div class="home-content">
      <div class="home-top">
        <div class="home-top-left">
          <div class="head">
            <div class="left-logo">
              <div class="title">全国数据监控</div>
              <div class="date">
                <span class="el-icon-timer themeColor"></span>
                <span>{{ time }}</span>
              </div>
            </div>
            <div
              class="right-data"
              v-for="(item, index) in titleList"
              :key="index"
            >
              <div :class="[`${item.icon}`, 'left-icon']"></div>
              <div class="data">
                <div class="themeColor title">{{ item.title }}</div>
                <div class="dataSize">
                  <span>{{ item.data }}</span>
                  <span>{{ item.unit }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="echarts borderImg">111</div>
        </div>
        <div class="home-top-right">
          <div class="userRetentionEchart borderImg">
            <div class="leftEchart">
              <div class="chartTitle">用户留存率</div>
              <userRetention></userRetention>
            </div>
            <div class="rightEchart">
              <div class="chartTitle">用户分布</div>
            </div>
          </div>
          <div class="newUserEchart borderImg"></div>
        </div>
      </div>
      <div class="home-bottom">
        <div class="bottom-left">
          <div
            class="borderImg data"
            v-for="(item, index) in bottomList"
            :key="index"
          ></div>
        </div>
        <div class="bottom-right borderImg">对面是表格</div>
      </div>
    </div>
  </div>
</template>

<script>
import { nowTime } from '@/util/util.js'
import { $once } from 'vue-happy-bus'
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
      time: '',//当前时间
      timer: '',  // 定时器名称
      titleList: [
        {
          icon: 'el-icon-ice-tea',
          title: '总销售额',
          data: '6,521,324',
          unit: '万元'
        },
        {
          icon: 'el-icon-document',
          title: '总订单量',
          data: '21,324',
          unit: '单'
        },
        {
          icon: 'el-icon-user-solid',
          title: '独立用户数',
          data: '68,576',
          unit: '个'
        },
        {
          icon: 'el-icon-user-solid',
          title: '独立用户数',
          data: '68,576',
          unit: '个'
        },
        {
          icon: 'el-icon-shopping-cart-2',
          title: '商品种类',
          data: '958',
          unit: '万个'
        }
      ],
      bottomList: [
        {
          title: '主站',
          num: '1,234',
          unit: '单'
        },
        {
          title: '平台一',
          num: '987',
          unit: '单'
        },
        {
          title: '平台二',
          num: '1,024',
          unit: '单'
        },
        {
          title: '平台三',
          num: '5,301',
          unit: '单'
        }
      ]

    }
  },
  created () {
    const that = this;
    this.timer = setInterval(function () {  //使用定时器，每一秒执行一次
      that.time = nowTime();
    }, 1000)
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    $once('hook:beforeDestroy', () => {
      clearInterval(this.timer);
    })
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100%;
  .home-bgc {
    width: 100%;
    height: 100%;
    background: url('../assets/img/bg.jpg') 0% 0% / 100% 100%;
    background-size: 100% 100%;
    z-index: -1;
    filter: blur(6px);
    opacity: 0.6;
    position: absolute;
  }
  .home-content {
    position: relative;
    z-index: 99;
    width: 100%;
    padding: 20px;
    .home-top {
      width: 100%;
      display: flex;
      opacity: 1 !important;
      z-index: 999;
      .home-top-left {
        width: 70%;
        height: auto;
        .head {
          display: flex;
          height: 80px;
          .left-logo {
            .title {
              font-size: 27px;
              text-shadow: rgb(255 255 255) 0px 0px 31px;
              font-weight: 700;
              letter-spacing: 4px;
            }
            .date {
              margin-top: 20px;
              span {
                &:first-child {
                  font-size: 20px;
                }
                &:last-child {
                  font-size: 16px;
                  padding-left: 5px;
                }
              }
            }
          }
          .right-data {
            margin-left: auto;
            display: flex;
            align-items: center;
            .left-icon {
              color: rgb(65, 71, 78);
              font-size: 45px;
              margin-right: 5px;
            }
            .data {
              .title {
                font-size: 20px;
              }
            }
            .dataSize {
              span {
                &:first-child {
                  color: #42a5e9;
                  font-size: 32px;
                  font-weight: 700;
                }
                &:last-child {
                  color: rgb(204, 204, 204);
                  padding-left: 5px;
                  font-size: 19px;
                }
              }
            }
          }
        }
        .echarts {
          width: 100%;
          height: 700px;
          margin-top: 20px;
        }
      }
      .home-top-right {
        width: 30%;
        .userRetentionEchart {
          width: 100%;
          height: 280px;
          display: flex;
          .leftEchart {
            width: 50%;
          }
          .rightEchart {
            width: 50%;
          }
        }
        .newUserEchart {
          width: 100%;
          height: 510px;
          margin-top: 10px;
        }
      }
    }
    .home-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 35px;
      .bottom-left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        .data {
          width: calc((100% / 4));
          height: 200px;
        }
      }
      .bottom-right {
        width: 50%;
      }
    }
  }
}
</style>


