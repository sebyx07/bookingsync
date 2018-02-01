import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | bookings/bookings list item', function() {
  setupComponentTest('bookings/bookings-list-item', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#bookings/bookings-list-item}}
    //     template content
    //   {{/bookings/bookings-list-item}}
    // `);

    this.render(hbs`{{bookings/bookings-list-item}}`);
    expect(this.$()).to.have.length(1);
  });
});
