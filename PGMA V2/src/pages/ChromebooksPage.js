import Page from 'components/Page';
import React from 'react';

const Chromebooks = () => {
  return (
    <Page title="Chromebooks" breadcrumbs={[{ name: 'Chromebooks', active: true }]}>
      <div>
        Aqui chromebooks
      </div>
    </Page>
  );
};

export default Chromebooks;
