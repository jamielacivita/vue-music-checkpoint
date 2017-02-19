<template>
<div>

<!--<h3>{{trackData}}</h3>-->

    <div v-for="obj in trackData">
    {{obj.trackId}}
    {{obj.artistName}}
    {{obj.trackName}}
    {{obj._position}}
    <!--{{obj.artworkUrl30}}-->
    <img v-bind:src="obj.artworkUrl30">
    <button @click="removeTrack(obj.trackId)">Remove</button>
    <button @click="up(obj.trackId)">Promote</button>
    <button @click="down(obj.trackId)">Demote</button>
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
        MyTunesService.removeTrack(Id)
        this.$parent.lastupdated = Date.now()},
    
    up: function(Id){
    MyTunesService.promoteTrack(Id)
    this.$parent.lastupdated = Date.now()
},

    down: function(Id){
    MyTunesService.demoteTrack(Id)
    this.$parent.lastupdated = Date.now()
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