import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('types/yahoo-cal', 'Integration | Component | types/yahoo cal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{types/yahoo-cal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#types/yahoo-cal}}
      template block text
    {{/types/yahoo-cal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
