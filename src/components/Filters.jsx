import { useState } from "react";

function Filters(props) {
    const list = ["All", "Active", "Inactive"];
    const [activeTab, setActiveTab] = useState('All');


    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
        props.handleFilter(tabName);
    }

    return (
        <section className="filters">
            <h2>Extensions List</h2>
            <div className="filter-buttons">
                {list && list.map(item => (
                    <button className={item == activeTab ? 'filter active' : 'filter'} onClick={() => handleActiveTab(item)}>{item}</button>
                ))}
            </div>
        </section>
    );
}

export default Filters