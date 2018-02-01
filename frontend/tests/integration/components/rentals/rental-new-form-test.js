import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | rentals/rental new form', function() {
  setupComponentTest('rentals/rental-new-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#rentals/rental-new-form}}
    //     template content
    //   {{/rentals/rental-new-form}}
    // `);

    this.render(hbs`{{rentals/rental-new-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
