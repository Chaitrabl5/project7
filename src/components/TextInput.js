import React from "react";

import PropTypes from "prop-types";
import classnames from 'classnames'
const TextInput = (
{
label,
name,
value,
placeholder,
type,
onChange,
error
}
)=>{
return (
<div className="form-group">
<label htmlFor={name}>{label}</label>
<input type={type} name={name}
className={classnames('form-control form-control-lg',{
'is-invalid':error
})} placeholder={placeholder} value={value} onChange={onChange}/>
{error && <div className="invalid-feedback">{error}</div>}
</div>
)
}

TextInput.propTypes = {
label: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
placeholder: PropTypes.string.isRequired,
value: PropTypes.any.isRequired,
type: PropTypes.string,
onChange: PropTypes.func,
error: PropTypes.string
}
TextInput.defaultProps = {
type: 'text'
}
export default TextInput