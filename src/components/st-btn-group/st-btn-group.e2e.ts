import { newE2EPage } from '@stencil/core/testing';

describe('st-btn-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-btn-group></st-btn-group>');

    const element = await page.find('st-btn-group');
    expect(element).toHaveClass('hydrated');
  });
});
