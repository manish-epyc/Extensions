import { useState } from "react";

function Filters(props) {
    const list = ["All", "Active", "Inactive"];
    const [activeTab, setActiveTab] = useState('All');


    const handleActiveTab = (tabName) => {
        setActiveTab(tabName);
        props.handleFilter(tabName);
    }


    const handleButtonClass = (item) => {
        return `px-4 py-2 rounded-xl text-sm font-medium transition-colors ${item === activeTab ? 'bg-orange text-white' : 'bg-dark text-white light-mode:bg-gray-200 light-mode:text-gray-900'}`;
    }

    return (
        <section className="flex justify-between items-center mt-12">
            <h2 className="text-[1.8rem] font-bold text-white light-mode:text-gray-900">Extensions List</h2>
            <div className="flex gap-3">

                {/* Todo - create the function for classes */}
                {list &&
                    list.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleActiveTab(item)}
                            className={handleButtonClass(item)}>
                            {item}
                        </button>
                    ))}
            </div>
        </section>
    );
}

export default Filters