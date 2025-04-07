import Button from "./Common/Button";
import Switch from "./Common/Switch";

function Card(props) {

    return (
        <div className="card">
            <h3>{props.extensionsItem.title}</h3>
            <p>{props.extensionsItem.description}</p>
            <div className="actions">
                <Button id={props.extensionsItem.id} handleRemoveList={props.handleRemoveList} />
                <Switch id={props.extensionsItem.id} status={props.extensionsItem.status} handleStatusChange={props.handleStatusChange} />
            </div>
        </div>
    )
}

export default Card;