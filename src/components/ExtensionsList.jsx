import { useEffect, useState } from "react";
import Filters from "./Filters";
import Data from './../data.json';
import Card from "./Card";

function ExtensionsList() {

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




    return (
        <>
            <Filters handleFilter={handleFilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">

                {/* Todo - Use once   */}
                {extensionData && extensionData.map(item => (
                    <Card key={item.id} extensionsItem={item} handleStatusChange={handleStatusChange} handleRemoveList={handleRemoveList} />
                ))}

            </div>
        </>
    );
}

export default ExtensionsList;