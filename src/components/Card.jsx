import Button from "./Common/Button";
import Switch from "./Common/Switch";

function Card(props) {

    return (
        <div className="flex flex-col justify-between p-6 rounded-lg border bg-[#131a26] text-white border-gray-700 light-mode:bg-gray-50 light-mode:border-gray-200 light-mode:text-gray-900">
            <h3 className="text-lg font-bold mb-2">{props.extensionsItem.title}</h3>
            <p className="text-sm text-gray-400 mb-4 light-mode:text-gray-600">
                {props.extensionsItem.description}
            </p>
            <div className="flex justify-between items-center">
                <Button id={props.extensionsItem.id} handleRemoveList={props.handleRemoveList} />
                <Switch id={props.extensionsItem.id} status={props.extensionsItem.status} handleStatusChange={props.handleStatusChange} />
            </div>
        </div>
    )
}

export default Card;