import {memo, useEffect} from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = 'Pastor';
  }, [title]);

  return null;
});

export default PageTitle;
