<template>
<div>
<h1>Itunes Coponent is here</h1>
<form @submit.prevent="requestMusic">
<h3>Enter Artist: <input type="text" v-model="artist"></h3>
<button type="submit">Submit</button>    
</form>
</div>
</template>

<script>    
import ItunesService from '../services/itunes-service.js'
export default {
  name: 'home',
  data () {
    return {
        artist: '',
        requestResponse: ''
      
    }
  },
  methods: {
    //   testMethod: function(){
    //       console.log("form triggered")},
requestMusic: function(){
    ItunesService.getMusicByArtist(this.artist)

}
  }
}
</script>

<style> 

</style>