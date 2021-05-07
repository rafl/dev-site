import { useLocation } from '@reach/router';
import { mount  } from 'enzyme';
import { useStaticQuery } from 'gatsby';
import * as React from 'react';

import Home from './Home';

(useLocation as jest.Mock).mockReturnValue({
  hash: '',
  key: '',
  pathname: '/',
  search: '',
  state: {},
});

(useStaticQuery as jest.Mock).mockReturnValue({
  site: {
    siteMetadata: {
      description: 'description',
    },
  },
});

describe('Overview', () => {
  it('type of `error` has no Pa11y violations', async () => {
    const component = mount(
      <Home
        pageContext={{
          frontmatter: {
            description: 'Foo',
            draft: false,
            keywords: [],
            title: 'Foo',
          },
        }}
      />
    );
    const results = await pa11y(component, {
      hideElements: [
        /* eslint-disable max-len */

        /**
         * Skip testing for these four heading elements, which have a gradient
         * background and drop shadow behind the text. Pa11y doesn't take these
         * properties into account when asserting contrast.
         */
        '#content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > h2',
        '#content > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > h3',
        '#content > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > h2',
        '#content > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > h3',

        /**
         * Skip testing of these false positives.
         */
        '#content > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > p > a',
        '#content > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > p > a:nth-child(1)',
        '#content > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > p > a:nth-child(2)',

        /* eslint-enable max-len */
      ].join(', '),
    });
    expect(results).toHaveNoPa11yViolations();
  });
});
