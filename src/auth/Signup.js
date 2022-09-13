import React, { useState } from 'react';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <button type="button" class="btn btn-info btn-sm d-grid gap-2 col-4 mx-auto" data-bs-toggle="modal" data-bs-target="#signupModal" data-bs-whatever="@mdo">Sign Up</button>
            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="signupModalLabel">Create New User</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="email" class="col-form-label">Email Address</label>
                                    <input type="email" class="form-control" id="email" placeholder='user@email.com'></input>
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

export default Signup;