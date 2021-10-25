const { expect } = require('chai');
const rgbToHexColor = require('./rgb');

describe('rgbToHexColor checker', ()=>{
    it('converts to black color',()=>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    });

    it('converts to white color',()=>{
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
    });

    it('coverts to red', ()=>{
        expect(rgbToHexColor(247,6,0)).to.equal('#F70600')
    });

    it('returns undefined because takes three elements but one of them is not a integer', ()=>{
        expect(rgbToHexColor(0,0,'0')).to.be.undefined;
        expect(rgbToHexColor('0',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'0',0)).to.be.undefined;
    });

    it('returns undefined because one of the integers is out of the range',()=>{
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
});