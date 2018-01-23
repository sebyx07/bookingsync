import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | rentals/rentals list', function() {
  setupComponentTest('rentals/rentals-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#rentals/rentals-list}}
    //     template content
    //   {{/rentals/rentals-list}}
    // `);

    this.render(hbs`{{rentals/rentals-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
