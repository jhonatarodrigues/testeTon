import {device, expect, element, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });


  it('should have product list screen', async () => {
    await expect(element(by.text('Lista de Produtos'))).toBeVisible();
  });

  it('should add to cart', async () => {
    await element(by.id('buttonModalAddCart0')).tap();
    await expect(element(by.id('modal-success'))).toBeVisible();

    await element(by.id('modal-success-button')).tap();
  });

  it('should remove from cart', async () => {
    await element(by.id('iconCartHeader')).tap();
    await element(by.id('itemCart0')).tap();

    await expect(element(by.id('modal-success'))).toBeVisible();
  });

});