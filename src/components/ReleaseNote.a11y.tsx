import { mount } from 'enzyme';
import * as React from 'react';

import ReleaseNote from './ReleaseNote';

describe('ReleaseNote', () => {
  const component = mount(
    <ReleaseNote
      date="2021-10-23"
      title="Test Title"
    >
      <p>Hello world</p>
    </ReleaseNote>
  );

  it('has no Pa11y violations', async () => {
    const results = await __pa11y(component, {
      ignore: [
        // See https://github.com/pa11y/pa11y/issues/623
        'color-contrast',
        'region',
        'WCAG2AAA.Principle1.Guideline1_3.1_3_1_AAA.G141',
      ],
    });

    expect(results).toHaveNoPa11yViolations();
  });
});
