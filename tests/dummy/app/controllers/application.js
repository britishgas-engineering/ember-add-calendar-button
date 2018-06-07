import Controller from '@ember/controller';
import moment from 'moment';
import EmberObject, {computed} from '@ember/object';

const Event = EmberObject.extend({
  start: moment().add(6,'M'), //moment or string
  end: moment().add(6,'M').add(4, 'hours'),
  title: 'Meeting with Tomster',
  description: '<p>You will receive a call by our engineer before 15 minutes of appointment.</p><p><a href="https://www.britishgas.co.uk/identity">Manage your booking</a></p>',
  plainDescription: 'You will receive a call by our engineer before 15 minutes of appointment. \n\n Please visit https://www.britishgas.co.uk/identity to manage your booking',
  location: '1234 North Port, Nowhere USA'
})

export default Controller.extend({
  event: computed(function() {
    return Event.create()
  }),
  pojoEvent: {
    start: moment().add(6,'M'), //moment or string
    end: moment().add(6,'M').add(4, 'hours'),
    title: 'Meeting with Tomster',
    description: '<p>You will receive a call by our engineer before 15 minutes of appointment.</p><p><a href="https://www.britishgas.co.uk/identity">Manage your booking</a></p>',
    plainDescription: 'You will receive a call by our engineer before 15 minutes of appointment. \n\n Please visit https://www.britishgas.co.uk/identity to manage your booking',
    location: '1234 North Port, Nowhere USA'
  }
});
