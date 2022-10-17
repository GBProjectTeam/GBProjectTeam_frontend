import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loggedOut, loginSelector } from '../../../pages/LoginPage/loginSlice'
import { anotherCompSelector } from '../../../pages/LoginPage/anotherCompSlice'

export const PrivateRoute = (props) => {
    const {
        children,
    } = props

    const { token } = useSelector(loginSelector)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const { rememberMe } = useSelector(loginSelector)
    const anotherComp = useSelector(anotherCompSelector)

    React.useEffect(
        () => {
            if (!rememberMe && !anotherComp) {
                navigate('/login')
                dispatch(
                    loggedOut(),
                )
            }
        },
        [],
    )

    return token ? children : <Navigate to='/login' />
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
