import renderer from 'react-test-renderer'
import BackBtn from '@/components/buttons/back-btn'


describe('buttons', () => {
    it('should render', () => {
        const tree = renderer.create(<BackBtn/>).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
