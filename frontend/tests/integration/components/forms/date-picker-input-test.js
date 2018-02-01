import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/date picker input', function() {
  setupComponentTest('forms/date-picker-input', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/date-picker-input}}
    //     template content
    //   {{/forms/date-picker-input}}
    // `);

    this.render(hbs`{{forms/date-picker-input}}`);
    expect(this.$()).to.have.length(1);
  });
});
