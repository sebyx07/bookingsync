import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | bookings/booking new form', function() {
  setupComponentTest('bookings/booking-new-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#bookings/booking-new-form}}
    //     template content
    //   {{/bookings/booking-new-form}}
    // `);

    this.render(hbs`{{bookings/booking-new-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
