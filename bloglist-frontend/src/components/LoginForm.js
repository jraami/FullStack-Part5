import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={this.login}>
                <div>
                    <InputField text="Username: " value={usernameInput} onChange={handleFieldChange} />
                </div>
                <div>
                    <InputField text="Password: " value={passwordInput} onChange={handleFieldChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
}

export default LoginForm;