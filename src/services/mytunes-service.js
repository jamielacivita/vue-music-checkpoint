import Vue from 'vue'

let myTunes = {}

function saveMytunes() {
  localStorage.setItem('myTunes', JSON.stringify(myTunes))
}

function loadMytunes() {
  myTunes = JSON.parse(localStorage.getItem('myTunes')) || {}
}

loadMytunes()

export default {


  getTracks() {

    let arr_output = []
    //output the dictionary into the array so we can sort by _position
    //get an array of the keys
    let keys = Object.keys(myTunes)
    //add the objects to the array
    for (var i = 0; i < keys.length; i++) {
      let obj = myTunes[keys[i]]
      arr_output.push(obj)
    }

    //Need to sort the array by _position. 
    arr_output.sort(function (a, b) {
      return (a._position - b._position) * (-1)
    })

    return arr_output;
  },

  addTrack(obj_itunes) {
    //iterate over objects already in dictionary to incriment their position value to make room for addition.
    let keys = Object.keys(myTunes)
    for (var i = 0; i < keys.length; i++) {
      let obj = myTunes[keys[i]]
      obj._position++
    }

    //add in new track at position zero
    myTunes[obj_itunes['trackId']] = obj_itunes //remember not to wrap this becasue it is alreday obj.
    myTunes[obj_itunes['trackId']]['_position'] = 0

    //save to local storage.
    saveMytunes()
  },

  removeTrack(Id) {
    //determine the position of the track that you are removing.
    let keys = Object.keys(myTunes)
    let positionToRemove = myTunes[Id]['_position']
    //console.log("ptr: ",positionToRemove)
    for (var i = 0; i < keys.length; i++) {
      let obj = myTunes[keys[i]]
      if (obj._position > positionToRemove) {
        obj._position--
      }
    }
    delete myTunes[Id]
    saveMytunes()
  },

  promoteTrack(Id) {
    //determine how many tracks are in the dictionary to verify we will not up position too far. 
    let keys = Object.keys(myTunes)
    let maxVote = keys.length - 1;
    if (myTunes[Id]['_position'] < maxVote) {
      //find the object for the element imeedately greater than the one upvoted.
      let keys = Object.keys(myTunes)
      for (var i = 0; i < keys.length; i++) {
        let obj = myTunes[keys[i]]
        if (obj._position == myTunes[Id]['_position'] + 1) {
          myTunes[keys[i]]['_position']--
          myTunes[Id]['_position']++
          break
        }
        saveMytunes()
        this.getTracks()
      }
    }
  },

  demoteTrack(Id) {
    //Verify that the track we are downvoting is not already at the bottom.  
    if (myTunes[Id]['_position'] > 0) {
      //find the object for the element imeedately less than the one upvoted.
      let keys = Object.keys(myTunes)
      for (var i = 0; i < keys.length; i++) {
        let obj = myTunes[keys[i]]
        if (obj._position == myTunes[Id]['_position'] - 1) {
          myTunes[keys[i]]['_position']++
          myTunes[Id]['_position']--
          break;
        }
      }
    }
  }
}