import React from 'react'

function SignIn() {

    function LogIn() {

    }




    return (
        <div class="login-wrap">
            <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign
                    In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Username</label>
                            <input id="user" type="text" class="input username" />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input password" data-type="password" />
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked />
                            <label for="check"><span class="icon"></span> Keep me Signed in</label>
                        </div>
                        <div class="group">
                            <button onclick="signIn()" class="button">Sign in</button>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>


                    <div class="sign-up-htm">
                        <div class="group">
                            <label for="user" class="label ">Username</label>
                            <input id="user" type="text" class="input usernamesignup" />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Password</label>
                            <input id="pass" type="password" class="input passwordsignup" data-type="password" />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Repeat Password</label>
                            <input id="pass" type="password" class="input repeatPass" data-type="password" />
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Email Address</label>
                            <input id="pass" type="text" class="input emailSignUp" />
                        </div>
                        <div class="group">
                            <input type="submit" class="button btn-signup" value="Sign Up" onclick="AddAccount()" />
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a>Already Member?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn