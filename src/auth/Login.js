import React, { useState } from 'react';
import { button, modal, label, input, form, textarea} from 'bootstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <button type="button" class="btn btn-info btn-sm d-grid gap-2 col-4 mx-auto" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-whatever="@mdo">Login</button>
            <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="loginModalLabel">User Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="username" class="col-form-label">Username</label>
                                    <input type="email" class="form-control" id="username" placeholder='user@email.com'></input>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="col-form-label">Password</label>
                                    <input type="text" class="form-control" id="password" placeholder='e.g. ilovetoys123'></input>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;