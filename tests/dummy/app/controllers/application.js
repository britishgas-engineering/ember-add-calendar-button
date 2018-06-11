import Controller from '@ember/controller';
import moment from 'moment';
import EmberObject, {computed} from '@ember/object';

const Event = EmberObject.extend({
  start: moment().add(1,'d'), //moment or string
  end: moment().add(1,'d').add(4, 'hours'),
  title: 'British Gas - Repair appointment',
  description: '<p>Our engineer will call ahead on 0712345678 to let you know that they\'re on the way.</p><p><a href="https://www.britishgas.co.uk/identity/">Manage your repair appointment</a></p>',
  plainDescription: 'Our engineer will call ahead on 0712345678 to let you know that they\'re on the way. \n Please visit https://www.britishgas.co.uk/identity/ to manage your repair appointment',
  location: '1234 North Port, Nowhere USA'
})

export default Controller.extend({
  event: computed(function() {
    return Event.create()
  }),
  pojoEvent: {
    start: moment().add(6,'M'), //moment or string
    end: moment().add(6,'M').add(4, 'hours'),
    title: 'British Gas - First service appointment',
    description: '<p>Our engineer will call ahead on 0712345678 to let you know that they\'re on the way.</p><p><a href="https://www.britishgas.co.uk/identity/">Manage your booking</a></p>',
    plainDescription: 'Our engineer will call ahead on 0712345678 to let you know that they\'re on the way.\nPlease visit https://www.britishgas.co.uk/identity/ to manage your first service appointment',
    location: '1234 North Port, Nowhere USA'
  }
});
