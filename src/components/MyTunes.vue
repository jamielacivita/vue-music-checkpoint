<template>
<div>
<h1>MyTunes Coponent is here</h1>
{{trackData}}
</div>
</template>

<script>    
import MyTunesService from '../services/mytunes-service.js'
export default {
  name: 'home',
  data () {
    return {
        testData: 'This is test data',
        trackData: MyTunesService.getTracks()
    }
  },
  methods: {}
}
</script>

<style> 

</style>