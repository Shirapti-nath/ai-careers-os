import { useEffect } from 'react';
import { ANALYTICS } from '../data/content';

export default function Analytics() {
  useEffect(() => {
    if (!ANALYTICS.clarityProjectId) return;

    if (window.clarity) return;

    ((c, l, a, r, i, t, y) => {
      c[a] =
        c[a] ||
        function clarityStub(...args) {
          (c[a].q = c[a].q || []).push(args);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = `https://www.clarity.ms/tag/${i}`;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', ANALYTICS.clarityProjectId);
  }, []);

  return null;
}
