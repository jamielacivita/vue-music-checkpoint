<template>
<div>
<h1>MyTunes Coponent is here</h1>
<h3>{{trackData}}</h3>
<!--<h4 v-for="obj in trackData">{{obj}}</h4>-->

</div>
</template>

<script>    
import MyTunesService from '../services/mytunes-service.js'
export default {
  name: 'home',
  data () {
    return {
        testData: 'This is test data',
    }
  },
  methods: {},
  computed: {
        trackData: function()
        
        {
            this.$parent.lastupdated;
            return MyTunesService.getTracks()
    }


  }
}
</script>

<style> 

</style>