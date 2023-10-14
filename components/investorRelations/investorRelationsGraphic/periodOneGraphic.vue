<template>
    <client-only>
      <ApexCharts
        class="graphic-content"
        type="line"
        height="350"
        :options="chartOptions"
        :series="series"
      />
    </client-only>
  </template>
  <script>
 import axios from 'axios';
  export default {
    data: function() {
      return {
        userTypeId: 1,
        series: [{
          data: []
        }],
        chartOptions: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            }
          },
          xaxis: {
            categories: []
          }
        },
        dateRange: [],
        count: []
      }
    },
    mounted() {
      this.getDataPeriodOneFromAPI()
    },
    methods: {
    async getDataPeriodOneFromAPI() {
      try {
        const response = await axios.get('https://atayi.idealdata.com.tr:3000/cmd=CHART2?symbol=IDEAS?periyot=1?bar=220?lang=tr');
        if(response){
          for(let index = 0; index < response.data.length; index++){
            this.dateRange.push(response.data[index].Date)
            this.count.push(response.data[index].High)
          }
        } // API URL
        this.chartOptions = {
          ...this.chartOptions,
          ...{
            xaxis: {
              categories: this.dateRange
            }
          }
        }
        this.series = [{
          data: this.count
        }]
        
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  }
  </script>
  <style lang="scss">
  .graphic-title {
    padding-top: 40px;
    color: #304156;
  }
  .graphic-content {
    width: 500px;
  }
  </style>