<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row title">
        <div class="col-xs-12 text-center">
My <i class="fa fa-apple" aria-hidden="true"></i> Wishlist
        </div>
        </div>
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
  
.title {
font-family: 'Montserrat', sans-serif;
font-size: 35px;  
padding-bottom: 15px; 
}


  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 100%;
    background:#9d9daf;
    padding-bottom: 20px;
    border-radius: 5px;
    box-shadow: 4px 4px 5px grey;
  }
  
  .itunes {
    display: inline-block;
    background: #9d9daf;
    min-height: 120px;
    min-width: 100%;
    border-radius: 5px;
    box-shadow: 4px 4px 5px grey;
  }

  body {padding-top: 20px}
</style>