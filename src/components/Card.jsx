import Button from "./Common/Button";
import Switch from "./Common/Switch";
import { Link } from "react-router";


function Card(props) {

    return (

        <div className="flex flex-col justify-between p-6 rounded-lg border bg-[#131a26] text-white border-borderdark group-[.app]/light:bg-borderlight group-[.app]/light:text-black group-[.app]/light:border-borderlight ">
            <Link to={`/extension/${props.extensionsItem.id}`}>
                <h3 className="text-lg font-bold mb-2">{props.extensionsItem.title}</h3>
                <p className="text-sm text-gray-400 mb-4 light-mode:text-gray-600">
                    {props.extensionsItem.description}
                </p>
            </Link >
            <div className="flex justify-between items-center">
                <Button id={props.extensionsItem.id} handleRemoveList={props.handleRemoveList} />
                <Switch id={props.extensionsItem.id} status={props.extensionsItem.status} handleStatusChange={props.handleStatusChange} />
            </div>
        </div >
    
    )
}

export default Card;