function Button(props) {
    return <button className="remove" onClick={() => props.handleRemoveList(props.id)}>Remove</button>
}

export default Button;