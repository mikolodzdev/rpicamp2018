import { expect } from 'chai';
import 'mocha';

import * as helloWorld from './helloWorldMod';

describe('HelloWorld.getHelloMsg', () => {
   it('should return hello <world map icon>', () => {
      const result = helloWorld.getHelloMsg();
      expect(result).to.equal('Hello 🗺️! ');
   });
});
