function Switch(props) {
    return <label className="relative inline-block w-[38px] h-[22px]">
        <input
            type="checkbox"
            checked={props.status}
            onChange={(e) => props.handleStatusChange(props.id, e)}
            className="sr-only peer"
        />
        <span
            className="absolute inset-0 bg-black rounded-full transition-colors peer-checked:bg-orange"
        ></span>
        <span
            className="absolute left-[4px] bottom-[4px] w-[14px] h-[14px] bg-white rounded-full transition-transform transform peer-checked:translate-x-[14px]"
        ></span>
    </label>;
}

export default Switch;