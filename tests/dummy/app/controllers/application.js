import Controller from '@ember/controller';
import moment from 'moment';
import EmberObject, {computed} from '@ember/object';

const jobType = 'service & repair';
const Event = EmberObject.extend({
  start: moment().add(1, 'd'), //moment or string
  end: moment().add(1, 'd').add(4, 'hours'),
  title: `British Gas - ${jobType} appointment`,
  description: `<p>Thanks for booking to speak with British Gas. During the video call, you’ll take one of our advisers\
  on a virtual tour of your home so they can assess your heating system by looking at your boiler, flue pipe,\
  meters and radiators. They will talk through your needs and provide you with a fixed price quote for your\
  perfect new boiler.</p>\
  <p>Our heating adviser will call ahead on 07411803369 to confirm the appointment.</p>\
  <p>For a successful video call, don’t forget that you’ll need:</p>\
  <ul>\
    <li>To be at home, to guide our adviser around your heating system</li>\
    <li>Safe access to your boiler, without the need for a step ladder</li>\
    <li>Reliable internet connection throughout your home</li>\
  </ul>\
  <h1>Need to rebook?</h1>\
  <p>No problem, just follow the link in your confirmation email to change your appointment online.\
  If you’d prefer to talk to us call 0333 202 9560 or if you use a Textphone it’s 18001 0800 316 3772.</p>`,
  plainDescription: 'Thank you for welcoming British Gas into your home. ' +
  'Our heating adviser will take a look at your current heating system, talk through your needs, ' +
  'and provide you with a fixed price quote for your perfect new boiler.\n\n' +
  'Our heating adviser will call ahead on ${phoneNumber} to let you know they’re on the way.\n\n' +
  'What will happen on the day?\n' +
  'You can see what will be involved by watching our video guide: https://www.youtube.com/watch?v=jsufJlrl6RY&feature=youtu.be\n\n' +
  'Need to rebook?\n' +
  'No problem, just follow the link in your confirmation email to change your appointment online.\n' +
  'If you’d prefer to talk to us call 0333 202 9560 or if you use a Textphone it’s 18001 0800 316 3772.',
  location: `We’ll call you on 07411803369 via WhatsApp`
});

export default Controller.extend({
  event: computed(function () {
    return Event.create();
  }),
  pojoEvent: {
    start: moment().add(6, 'M'), //moment or string
    end: moment().add(6, 'M').add(4, 'hours'),
    title: `British Gas - First  appointment`,
    description: `<p>Our engineer will call ahead on 0712345678 to let you know that they're on the way.</p><p><a href="https://www.britishgas.co.uk/identity/">Manage your booking</a></p>`,
    plainDescription: `Our engineer will call ahead on 0712345678 to let you know that they're on the way.\nPlease visit https://www.britishgas.co.uk/identity/ to manage your first service appointment`,
    location: '1234 North Port, Nowhere USA'
  }
});
