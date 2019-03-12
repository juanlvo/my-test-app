import { ReversePipe } from './reverse.pipe.reverse'

describe('Testing the pipe', function() {
    it('should create the pipe', function() {
        let reversePipe = new ReversePipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');

    });
});