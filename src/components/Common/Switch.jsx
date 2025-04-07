function Switch(props) {
    return <label className="switch">
        <input type="checkbox" checked={props.status} onChange={(e) => props.handleStatusChange(props.id, e)} />
        <span className="slider"></span>
    </label>;
}

export default Switch;