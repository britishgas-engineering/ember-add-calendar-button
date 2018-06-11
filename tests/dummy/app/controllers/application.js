import Controller from '@ember/controller';
import moment from 'moment';
import EmberObject, {computed} from '@ember/object';

const jobType = 'service & repair';
const Event = EmberObject.extend({
  start: moment().add(1,'d'), //moment or string
  end: moment().add(1,'d').add(4, 'hours'),
  title: `British Gas - ${jobType} appointment`,
  description: `<p>Our engineer will call ahead on 0712345678 to let you know that they're on the way.</p><p><a href="https://www.britishgas.co.uk/identity/">Manage your ${jobType} appointment</a></p>`,
  plainDescription: `Our engineer will call ahead on 0712345678 to let you know that they're on the way. \r\nPlease visit https://www.britishgas.co.uk/identity/ to manage your ${jobType} appointment`,
  location: '1234 North Port, Nowhere & Somewhere USA'
})

export default Controller.extend({
  event: computed(function() {
    return Event.create()
  }),
  pojoEvent: {
    start: moment().add(6,'M'), //moment or string
    end: moment().add(6,'M').add(4, 'hours'),
    title: `British Gas - First  appointment`,
    description: `<p>Our engineer will call ahead on 0712345678 to let you know that they're on the way.</p><p><a href="https://www.britishgas.co.uk/identity/">Manage your booking</a></p>`,
    plainDescription: `Our engineer will call ahead on 0712345678 to let you know that they're on the way.\nPlease visit https://www.britishgas.co.uk/identity/ to manage your first service appointment`,
    location: '1234 North Port, Nowhere USA'
  }
});
