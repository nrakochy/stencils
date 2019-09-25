import { newE2EPage } from '@stencil/core/testing';

describe('st-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<st-btn></st-btn>');

    const element = await page.find('st-btn');
    expect(element).toHaveClass('hydrated');
  });
});
