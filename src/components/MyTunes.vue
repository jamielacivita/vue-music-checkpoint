<template>
    <div>

        <!--<h3>{{trackData}}</h3>-->
        <!--<div class="container">-->
        <div class="row">
            <div class="col-xs-12 text-center">
                <h3>My Favorites</h3>
            </div>
        </div>
        <div v-for="obj in trackData">
            <div class="row">
                <div class="col-xs-1 ">
                </div>
                <div class="col-xs-1 ">
                    <img @click="playMusic(obj.previewUrl)" v-bind:src="obj.artworkUrl60">
                </div>
                <div class="col-xs-4 ">
                    {{obj.trackName}}
                </div>
                <div class="col-xs-2 ">
                    {{obj.artistName}}
                </div>
                <div class="col-xs-1 ">
                    <button @click="removeTrack(obj.trackId)">Remove</button>
                </div>
                <div class="col-xs-1 ">
                    <button @click="up(obj.trackId)">Promote</button>
                </div>
                <div class="col-xs-1 ">
                    <button @click="down(obj.trackId)">Demote</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MyTunesService from '../services/mytunes-service.js'
    export default {
        name: 'home',
        data() {
            return {
                testData: 'This is test data',
            }
        },
        methods: {
            removeTrack: function (Id) {
                MyTunesService.removeTrack(Id)
                this.$parent.lastupdated = Date.now()
            },

            up: function (Id) {
                MyTunesService.promoteTrack(Id)
                this.$parent.lastupdated = Date.now()
            },

            down: function (Id) {
                MyTunesService.demoteTrack(Id)
                this.$parent.lastupdated = Date.now()
            },

            playMusic: function (URL) {
                //console.log("in playMusic with: ", URL)
                var songURL = URL
                if (typeof (this.x) != 'undefined') // Check is playing or not.
                {
                    if (songURL == this.x.src) //Has user selected the same URL a second time (if so stop playing.)
                    {
                        this.x.pause()
                        this.x.src = ''
                        return false //returning here to exit function so song will not replay
                    }
                    else
                    { this.x.load() }
                }
                this.x = document.createElement("AUDIO");
                //console.log(this.x)
                this.x.src = songURL
                this.x.play()

            }



        },
        computed: {
            trackData: function () {
                this.$parent.lastupdated;
                return MyTunesService.getTracks()
            }


        }
    }

</script>

<style>
    /*.row {border: 1px solid black}*/
</style>