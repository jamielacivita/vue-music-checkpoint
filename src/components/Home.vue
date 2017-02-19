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
    background:#ccccff;
    padding-bottom: 20px;
    border-radius: 5px;
  }
  
  .itunes {
    display: inline-block;
    background: #ccccff;
    min-height: 120px;
    min-width: 100%;
    border-radius: 5px;
  }

  body {padding-top: 20px}
</style>