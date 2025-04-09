import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Data from './data.json';
// import './App.css'
import Header from './components/Header'
import ExtensionsList from './components/ExtensionsList'
import ExtensionDetails from './components/ExtensionDetails';



function App() {



  const [activeThemeMode, setActiveThemeMode] = useState(true);
  const [extensionsList, setExtensionsList] = useState();
  const [filterData, setFilterData] = useState();

  let extensionData;

  if (filterData) {
    extensionData = filterData;
  } else {
    extensionData = extensionsList;

  }

  useEffect(() => {
    if (Data) {
      setExtensionsList(Data);
    }
  }, []);

  useEffect(() => {
    if (filterData) {
      let status = filterData[0]['status'];

      setFilterData(extensionsList.filter((item) => item.status == status));
    }
  }, [extensionsList]);


  // Handle the Switch functionality
  const handleStatusChange = (id, event) => {
    console.log('here');
    let status = event.target.checked;
    setExtensionsList(listItem =>
      listItem.map(item =>
        item.id === id ? { ...item, status } : item
      )
    );
  }

  // Remove the extension item
  const handleRemoveList = (id) => {
    setExtensionsList(extensionsList.filter((item) => item.id !== id));
  }


  // Filter the extension
  const handleFilter = (tabName) => {
    if (tabName == 'Active') {
      setFilterData(extensionsList.filter((item) => item.status == true));
    } else if (tabName == 'Inactive') {
      setFilterData(extensionsList.filter((item) => item.status == false));
    } else {
      setFilterData(false);
    }
  }


  // Handle the theme mode
  const handleThemeMode = () => {
    if (activeThemeMode) {
      setActiveThemeMode(false);
    } else {
      setActiveThemeMode(true);
    }
    console.log(activeThemeMode);

  }


  return (
    <div className={'app antialiased min-h-svh transition-colors ' + (activeThemeMode ? 'group/dark bg-darkblue text-white' : 'group/light bg-white text-darktext')}>
      <div className="max-w-[1220px] mx-auto px-8 py-8">
        <Header handleThemeMode={handleThemeMode} />
        <Routes>
          {["/", "/extension/"].map((path, index) =>
            <Route key={index} path={path} element={<ExtensionsList handleFilter={handleFilter} extensionData={extensionData} handleStatusChange={handleStatusChange} handleRemoveList={handleRemoveList} />} />
          )}

          <Route path="/extension/:eid" element={<ExtensionDetails extensionData={extensionData} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
