import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | bookings/bookings list', function() {
  setupComponentTest('bookings/bookings-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#bookings/bookings-list}}
    //     template content
    //   {{/bookings/bookings-list}}
    // `);

    this.render(hbs`{{bookings/bookings-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
