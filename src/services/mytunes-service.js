import Vue from 'vue'

let myTunes = {}

// THESE ARE SIMPLE HELPER FUNCTIONS TO KEEP YOUR MYTUNES IN LOCAL STORAGE
// WE WILL EVENTUALLY BE REPLACING THESE GUYS BUT NOT TODAY :)
// NOTICE HOWEVER THAT THESE FUNCTIONS ARE NOT GOING TO BE EXPORTED BECAUSE 
// THE COMPONENT SHOULD NEVER BE RESPONSIBLE FOR ACTUALLY CALLING saveMytunes
// PERHAPS YOU SHOULD HAVE THE LIST SAVED WHENEVER IT MUTATES ***CHANGES***
function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()   

export default {


  getTracks() 
  {
    //myTunes is an dictionary we need to add this info to an array and sort by votes and return array.  We may be able to write a custom sort function base on the votes property.

    let arr_Output = []
    //output the dictionary into the array.
    //get an array of the keys
    let keys = Object.keys(myTunes)
    //console.log(keys)
    //add the objects to the array
    for (var i = 0; i < keys.length; i++)
    {
      let obj = myTunes[keys[i]]
      arr_Output.push(obj)
    }

    //Need to sort the array by votes. 
    arr_Output.sort(function(a,b){
      return (a._votes - b._votes)*(-1)
    })

    console.log("arr_Output: ", arr_Output)

    //return myTunes;
    return arr_Output;
  },

  addTrack(obj_itunes) {
    console.log(obj_itunes)
    myTunes[obj_itunes['trackId']] = obj_itunes //remember not to wrap this becasue it is alreday obj.
    myTunes[obj_itunes['trackId']]['_votes']=0
    saveMytunes()

    // OCCASIONALLY YOU WILL RUN INTO ISSUES WHERE VUE WILL BE
    // UNAWARE THAT A CHANGE HAS OCCURED TO YOUR DATA
    // TO ELIMINATE THIS PROBLEM YOU CAN USE 
    //Vue.set(myTunes, track.id, track)
    // YOU CAN READ MORE ABOUT VUE.SET HERE
    // https://vuejs.org/v2/api/#Vue-set
   },



  removeTrack(Id) {
  //console.log("you are in remove track in MyTunes-service with: ", Id)
  //console.log(myTunes[Id])
  delete myTunes[Id]
  //console.log(myTunes[Id])
  saveMytunes()


   },
  promoteTrack(Id) { 

  console.log("you are in promote track in MyTunes-service with: ", Id)
  myTunes[Id]['_votes'] = (myTunes[Id]['_votes'] + 1)
  console.log(myTunes[Id]['_votes'])
  saveMytunes()
  this.getTracks()

  },
  demoteTrack(Id) { 
      myTunes[Id]['_votes'] = (myTunes[Id]['_votes'] - 1)
        console.log(myTunes[Id]['_votes'])
  }
}