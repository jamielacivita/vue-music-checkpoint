<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6">
          <myTunes class="my-tunes"></myTunes>
        </div>
        <div class="col-xs-6">
          <itunes class="itunes"></itunes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyTunes from './MyTunes'
  import Itunes from './Itunes'
  export default {
    name: 'home',
    data() {
      return {
        lastupdated: Date.now()
      }
    },
    components: { MyTunes, Itunes }
  }

</script>


<style>
  /**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
  
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 100%;
    background: purple;
  }
  
  .itunes {
    display: inline-block;
    background: pink;
    min-height: 500px;
    min-width: 100%;
  }
</style>