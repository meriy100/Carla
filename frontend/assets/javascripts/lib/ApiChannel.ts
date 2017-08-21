import * as ActionCable from 'actioncable';
import { dispatch } from '../application'

const CableApp = { cable: ActionCable.createConsumer(" ws://localhost:3000/cable") };
export default CableApp.cable.subscriptions.create("ApiChannel", {
  connected:  function() {
  },
  disconnected: function() {
  },
  received: function(data:any) {
    dispatch(data);
  }
})

