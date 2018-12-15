import React from 'react'

const InputField = ({ text, type, value, onChange, name }) => {
    return (
        <div>
            {text}
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name} />
            <br />
        </div>
    )
}

export default InputField