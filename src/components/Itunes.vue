<template>
  <div>
    <div class="row">
      <div class="col-xs-12 text-center">
        <h3>Search Itunes</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 text-center">
        <form @submit.prevent="requestMusic">
          <h3><input type="text" v-model="artist"></h3>
          <!--<button type="submit">Submit</button>    -->
        </form>
      </div>
    </div>
    <!--<h4>{{requestResponse}}</h4>-->
    <div v-for="(song, index) in requestResponse">
      <div class="trackRow">
        <button @click="addToMyTunes(index)">To My List</button> {{song.trackName}}
      </div>
    </div>
  </div>
</template>

<script>
  import ItunesService from '../services/itunes-service.js'
  import MyTunesService from '../services/mytunes-service.js'
  export default {
    name: 'home',
    data() {
      return {
        artist: '',
        requestResponse: ''

      }
    },
    methods: {
      requestMusic() {
        ItunesService.getMusicByArtist(this.artist).then(response => {
          // Convert to JSON
          return response.json();
        }).then(j => {
          // Yay, `j` is a JavaScript object
          //console.log(j);
          //return j
          this.requestResponse = j['results']
        });
      },

      addToMyTunes(index) {
        //console.log(index)
        MyTunesService.addTrack(this.requestResponse[index])
        this.$parent.lastupdated = Date.now()
      }


    }
  }

</script>

<style>
  .trackRow {
    margin-left: 20px
  }
</style>