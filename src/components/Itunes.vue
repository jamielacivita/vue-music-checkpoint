<template>
<div>
<h1>Itunes Coponent is here</h1>
<form @submit.prevent="requestMusic">
<h3>Enter Artist: <input type="text" v-model="artist"></h3>
<button type="submit">Submit</button>    
</form>
<!--<h4>{{requestResponse}}</h4>-->
<h4 v-for="(song, index) in requestResponse">
    <button @click="testMethod(index)">To My List</button>
    {{song.trackName}}</h4>
</div>
</template>

<script>    
import ItunesService from '../services/itunes-service.js'
import MyTunesService from '../services/mytunes-service.js'
export default {
  name: 'home',
  data () {
    return {
        artist: '',
        requestResponse: ''
      
    }
  },
  methods: {
requestMusic(){
    ItunesService.getMusicByArtist(this.artist).then(response => {
  // Convert to JSON
	return response.json();
}).then(j => {
	// Yay, `j` is a JavaScript object
	//console.log(j);
  //return j
  this.requestResponse = j['results']
});},

testMethod(index)
{
    console.log("In test Method with", index)
}


  }
}
</script>

<style> 

</style>

 <!--ItunesService.getMusicByArtist(this.artist).then(function(response) {
  // Convert to JSON
	return response.json();
}).then(function(j) {
	// Yay, `j` is a JavaScript object
	console.log(j);
  //return j
  this.requestResponse = j
});-->
