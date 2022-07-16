import React from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { authApp } from '../../Firebase';

function GoogleLoginWrapper({ render }) {

    const redirect = useNavigate();
    const loginWithGoogle = async e => {
        e.preventDefault();
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(authApp, provider);
            GoogleAuthProvider.credentialFromResult(result);

            redirect('/movies');
        } catch (e) {
            alert(e.message);
        }
    }
    return (
        <>
            {render(loginWithGoogle)}
        </>
    )
}

export default GoogleLoginWrapper