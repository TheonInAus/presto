'use client';

export default function SignInForm () {
    return (
        <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Sign In</button>
        </form>
    )
};