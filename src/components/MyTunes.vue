<template>
<div>
<h1>MyTunes Coponent is here</h1>
<!--<h3>{{trackData}}</h3>-->
<!--<h4 v-for="obj in trackData">{{obj.trackId}}</h4>-->
    <div v-for="obj in trackData">
    {{obj.trackId}}
    {{obj.artistName}}
    <!--{{obj.artworkUrl30}}-->
    <img v-bind:src="obj.artworkUrl30">
    <button @click="removeTrack(obj.trackId)">Remove</button>
    <button @click="up(obj.trackId)">Up</button>
    <button @click="down(obj.trackId)">Down</button>
    <hr>
    </div>

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
  methods: {
    removeTrack: function(Id){
        //console.log("you are in remove track in MyTunes with: ", Id)
        MyTunesService.removeTrack(Id)
        this.$parent.lastupdated = Date.now()},
    
    up: function(Id){
    //console.log("you are in up track in MyTunes with: ", Id)
    MyTunesService.promoteTrack(Id)
},

    down: function(Id){
    console.log("you are in down track in MyTunes with: ", Id)
    MyTunesService.demoteTrack(Id)
}



  },
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