import Question from '../src/components/Question'
import { shallow } from 'enzyme';

describe('Question', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme();
    wrapper = mount(<Question/>)
  });

  it('should have the specified inital state', () => {
    pending()
  });

  it('should render an h3 (<h3>) with the title of the page', () => {
    pending()
  });

  it('should render the GameTable', () => {
    pending()
  });

  it('should render an X when a cell is clicked during X\'s turn', () => {
    pending()
  });

  it("should update who's turn it is when a cell is clicked during X\'s turn", () => {
    pending();
  });
});
