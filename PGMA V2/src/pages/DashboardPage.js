import FilteredClassroom from '../components/FilteredClassroom.js';
import React, { useState } from 'react';
import '../styles/DashboardPage.css'
import Page from 'components/Page';
import { Row} from 'reactstrap';

const DashboardPage = () => {

  const [planta, setPlanta] = useState('1');
  const [currentTab, setCurrentTab] = useState('1');
  const tabs = [
    {
      id: 1,
      tabTitle: 'Planta 1',
      planta: '1'
    },
    {
      id: 2,
      tabTitle: 'Planta 0',
      planta: '0'
    },
    {
      id: 3,
      tabTitle: 'Planta -1',
      planta: '-1'
    },
    {
      id: 4,
      tabTitle: 'Planta -2',
      planta: '-2'
    }
  ];
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
    setPlanta(e.target.name)
  }

  return (
    <Page
      className="DashboardPage"
      title="Plantas"
      breadcrumbs={[{ name: 'Plantas', active: true }]}
    >
      <Row>
        <div className='containers'>
          <div className='tabs'>
            {tabs.map((tab, i) =>
              <button key={i} id={tab.id} name={tab.planta} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
            )}
          </div>
          <div className='content'>
            {tabs.map((tab, i) =>
              <div key={i}>
                {currentTab === `${tab.id}` &&
                  <div>
                    <FilteredClassroom Planta={planta}  />
                  </div>}
              </div>
            )}
          </div>
        </div>
      </Row>
    </Page>
  );
}
export default DashboardPage;
