import Filters from "./Filters";
import Card from "./Card";

function ExtensionsList(props) {
    return (
        <>
            <Filters handleFilter={props.handleFilter} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">

                {/* Todo - Use once   */}
                {props.extensionData && props.extensionData.map(item => (
                    <Card key={item.id} extensionsItem={item} handleStatusChange={props.handleStatusChange} handleRemoveList={props.handleRemoveList} />
                ))}

            </div>
        </>
    );
}

export default ExtensionsList;