const React = require('react');
const { expect } = require('chai');
const { shallow } = require('enzyme');
const { InfoSprinkle } = require('../');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

// For `expect(mySpy).to.have.been.calledWith("foo");` syntax
chai.use(sinonChai);

const HELP_URL = 'https://github.com/mongodb-js/hadron-react/';

describe('<InfoSprinkle />', () => {
  let onClickSpy;
  let component;

  before(()=> {
    onClickSpy = sinon.spy();
    component = shallow(
      <InfoSprinkle helpLink={HELP_URL} onClickHandler={onClickSpy} />
    );
  });

  it('has the info-sprinkle CSS class', () => {
    expect(component.hasClass('info-sprinkle')).to.equal(true);
  });
  it('links to a help URL', () => {
    component.simulate('click');
    expect(onClickSpy).to.have.been.calledWith(HELP_URL);
  });
});
