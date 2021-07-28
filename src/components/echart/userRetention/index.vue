<!-- 用户留存率图表 -->
<template>
  <div id="userRetention" class="chartInit"></div>
</template>

<script>
export default {
  name: 'userRetention',
  components: {},

  data () {
    return {
      chart: '',
    };
  },

  mounted () {
    this.init()
    this.$resize(this.init, this.chart)
  },

  computed: {},

  methods: {
    init () {
      let myChart = this.$echarts.init(document.getElementById('userRetention'))
      this.chart = myChart
      var BorderWidth = '10';
      //反方向剩下部分的样式
      var placeHolderStyle = {
        normal: {
          label: {
            show: false,
            position: "left"
          },
          labelLine: {
            show: false
          },
          color: "rgba(0,0,0,0)",
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0
        },
      };
      var options = {
        series: [
          {
            type: 'pie',
            clockWise: true, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [100, 101],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  position: 'outside'
                },
                labelLine: {
                  show: false,
                  length: 100,
                  smooth: 0.5
                },
                borderWidth: 4,
                shadowBlur: 40,
                borderColor: "#0AADE5",
              }
            },
            data: [{
              value: 20,
              name: '99%'
            },
            {
              value: 3,
              name: '',
              itemStyle: placeHolderStyle
            }
            ]
          },
          {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [80, 81],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false,
                  length: 100,
                  smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: "#085977",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
              }
            },
            data: [{
              value: 6,
              name: '60%'
            },
            {
              value: 4,
              name: '',
              itemStyle: placeHolderStyle
            }
            ]
          },
          {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [60, 61],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false,
                  length: 100,
                  smooth: 0.5
                },
                borderWidth: 6,
                shadowBlur: 40,
                borderColor: "#FEB114",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
              }
            },
            data: [{
              value: 5,
              name: '40%'
            },
            {
              value: 5,
              name: '',
              itemStyle: placeHolderStyle
            }
            ]
          },
        ]
      }


      myChart.setOption(options);

    }
  }
}

</script>
<style lang='scss' scoped>
</style>