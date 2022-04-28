import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import FacebookImg from '../../../Images/social/facebook.png'
import GoogleImg from '../../../Images/social/google.png';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    useEffect(() => {
        if (googleUser || facebookUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, facebookUser]);

    if (googleLoading || facebookLoading) {
        return <Loading></Loading>;
    }


    if (googleError || facebookError) {
        const error = googleError?.message || facebookError?.message;
        errorElement = <p className='text-danger text-center py-2'>{error}</p>
    }

    return (
        <div>
            {errorElement}
            <div className='mt-4 d-flex justify-content-center align-items-center'>
                <button onClick={() => signInWithGoogle()} className='btn me-3' style={{ backgroundColor: 'lightgray' }}><img style={{ width: '25px' }} src={GoogleImg} alt="" /> Continue With Google</button>
                <button onClick={() => signInWithFacebook()} className='btn' style={{ backgroundColor: 'lightgray' }}><img style={{ width: '25px' }} src={FacebookImg} alt="" /> Continue With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;