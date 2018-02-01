import { expect } from 'chai';
import { describe, it } from 'mocha';
import EmberObject from '@ember/object';
import GeneralListMixin from 'bookingsync/mixins/general-list';

describe('Unit | Mixin | general list', function() {
  // Replace this with your real tests.
  it('works', function() {
    let GeneralListObject = EmberObject.extend(GeneralListMixin);
    let subject = GeneralListObject.create();
    expect(subject).to.be.ok;
  });
});
