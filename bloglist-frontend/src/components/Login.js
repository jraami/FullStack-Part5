import React from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>

                <form onSubmit={this.login}>
                    <div>
                        Username
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div>
                        Password
                        <InputField text="Nimi:" value={this.state.newName} onChange={this.handleNameChange} />
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;