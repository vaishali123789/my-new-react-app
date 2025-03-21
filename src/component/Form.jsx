import React, { useState } from 'react'

const Contact = () => {

    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");

    return (
        <div className='form col-lg-4 d-flex'>
            <form action="">
                <div>

                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" id="email" autoComplete="off"

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" name="password" id="password" autoComplete="off"

                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit"> Login</button>
            </form>
        </div>
    )
}
export default Contact 