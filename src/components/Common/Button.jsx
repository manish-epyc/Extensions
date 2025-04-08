function Button(props) {
    return (
        <button className="px-4 py-2 rounded-md text-sm font-medium bg-[#0b0f1a] text-white transition-colors hover:bg-orange "
            onClick={() => props.handleRemoveList(props.id)}>Remove</button>
    );
}

export default Button;