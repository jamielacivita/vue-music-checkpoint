<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="container">
    <myTunes class="my-tunes"></myTunes>
    <itunes class="itunes"></itunes>
    </div>
  </div>
</template>

<script>
import MyTunes from './MyTunes'
import Itunes from './Itunes'
export default {
  name: 'home',
  data () {
    return {
    lastupdated: Date.now() 
    }
  },
  components: {MyTunes, Itunes}
}
</script>


<style>
/**
* YOU SHOULD PROBABLY MAKE THIS LOOK BETTER :)
* BOOTSTRAP IS FOR THE WEAK FLEXBOX IS KING
* -- McCall
**/
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: purple;
}

.itunes{
  display: inline-block;
  background: pink;
  min-height: 500px;
  min-width: 45%;
}

</style>
