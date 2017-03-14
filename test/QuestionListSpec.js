import QuestionList from '../src/components/QuestionList'
import { shallow } from 'enzyme';

describe('QuestionList', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<QuestionList/>)
  });

  it('should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({selectedQuestionID: null})
  });

});
