import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/auto save form', function() {
  setupComponentTest('forms/auto-save-form', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/auto-save-form}}
    //     template content
    //   {{/forms/auto-save-form}}
    // `);

    this.render(hbs`{{forms/auto-save-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
