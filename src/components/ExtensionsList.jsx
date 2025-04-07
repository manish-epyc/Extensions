import { useEffect, useState } from "react";
import Filters from "./Filters";
import Data from './../data.json';
import Card from "./Card";

function ExtensionsList() {

    const [extensionsList, setExtensionsList] = useState();
    const [filterData, setFilterData] = useState();

    useEffect(() => {
        if (Data) {
            setExtensionsList(Data);
        }
    }, []);


    // Handle the Switch functionality
    const handleStatusChange = (id, event) => {
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




    return (
        <>
            <Filters handleFilter={handleFilter} />
            <div className="extensions-grid">

                {filterData && filterData.map(item => (
                    <Card key={item.id} extensionsItem={item} handleStatusChange={handleStatusChange} handleRemoveList={handleRemoveList} />
                ))}

                {!filterData && extensionsList && extensionsList.map(item => (
                    <Card key={item.id} extensionsItem={item} handleStatusChange={handleStatusChange} handleRemoveList={handleRemoveList} />
                ))}
            </div>
        </>
    );
}

export default ExtensionsList;