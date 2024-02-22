import {memo} from 'react';

import SessionListContent from '../../features/SessionListContent';

const Sessions = memo(() => {
  return (
    <>
      {/*<div style={{ padding: '8px 16px' }}>*/}
      {/*  <SessionSearchBar />*/}
      {/*</div>*/}
      <SessionListContent />
    </>
  );
});

export default Sessions;
