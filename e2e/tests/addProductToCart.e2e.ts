import {device, expect, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add to cart', async () => {
    await element(by.id('buttonModalAddCart0')).tap();
    await expect(element(by.id('modal-success'))).toBeVisible();
  });
});