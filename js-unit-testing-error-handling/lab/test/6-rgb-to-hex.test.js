const assert = require('chai').assert;
const rgbToHexColor = require('../6-rgb-to-hex');

describe('RGB to Hex convertor', () => {
    it('Should convert successfully from rgb values to hex number', () => {
        assert.equal(rgbToHexColor(108, 157, 99), '#6C9D63');
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });

    it('Should accept number type only parameters', () => {
        assert.isUndefined(rgbToHexColor('100', 200, 150))
        assert.isUndefined(rgbToHexColor('100', '200', 150))
        assert.isUndefined(rgbToHexColor('100', '200', '150'))
        assert.isUndefined(rgbToHexColor(100, '200', '150'))
        assert.isUndefined(rgbToHexColor(100, 200, '150'))
        assert.isUndefined(rgbToHexColor([100, 200, 100]))
        assert.isUndefined(rgbToHexColor({ number1: 100, number2: 200, number3: 100 }))
    });

    it('Should accept exactly 3 parameters', () => {
        assert.isUndefined(rgbToHexColor(0))
        assert.isUndefined(rgbToHexColor(100, 200))
    });

    it('Should have range on number parameters from 0 to 255', () => {
        assert.isUndefined(rgbToHexColor(256, 100, 150))
        assert.isUndefined(rgbToHexColor(210, 300, 150))
        assert.isUndefined(rgbToHexColor(210, 150, 612))
        assert.isUndefined(rgbToHexColor(-210, 150, 150))
        assert.isUndefined(rgbToHexColor(210, -150, 612))
    })
});