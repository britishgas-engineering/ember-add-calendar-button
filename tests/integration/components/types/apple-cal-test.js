import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import EmberObject from '@ember/object';

moduleForComponent('types/apple-cal', 'Integration | Component | types/apple cal', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const event = EmberObject.extend({
    start: moment().add(1, 'd'), //moment or string
    end: moment().add(1, 'd').add(4, 'hours'),
    title: `British Gas - Annual service appointment`,
    description: `<p>Our engineer will call ahead on 0712345678 to let you know that they're on the way.</p><p><a href="https://www.britishgas.co.uk/identity/">Manage your annual service appointment</a></p>`,
    plainDescription: `Our engineer will call ahead on 0712345678 to let you know that they're on the way. \r\nPlease visit https://www.britishgas.co.uk/identity/ to manage your annual service appointment`,
    location: '1234 North Port, Nowhere & Somewhere USA'
  });
  this.set('event', event);
  this.render(hbs`{{types/apple-cal event=event}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#types/apple-cal event=event}}
      template block text
    {{/types/apple-cal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
