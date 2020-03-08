import BackgroundTask from 'react-native-background-task';


module.exports = {

    define:async function(){
        
        // get 5 contacts 
        // click picture
        // upload picture and get its url 
        // send sms

        


        console.log('sending alert');
        
    }.bind(this),

    checkStatus: async function() {
        const status = await BackgroundTask.statusAsync()
        
        if (status.available) {
            console.log('running bg');
            return
        }
        
        const reason = status.unavailableReason
        if (reason === BackgroundTask.UNAVAILABLE_DENIED) {
            Alert.alert('Denied', 'Please enable background "Background App Refresh" for this app')
        } else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED) {
            Alert.alert('Restricted', 'Background tasks are restricted on your device')
        }
    }.bind(this),
    
    startAlert: function(){
        console.log('alert started ');

        BackgroundTask.schedule({
            period: 5*60, // Aim to run every 30 mins - more conservative on battery
          });
          
          // Optional: Check if the device is blocking background tasks or not
          this.checkStatus();
    
    }.bind(this),

}

