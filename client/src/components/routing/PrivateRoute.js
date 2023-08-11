import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = (auth) => {
    return auth.isAuthenticated && !auth.loading ? <Outlet /> : <Navigate to='/login' />
}

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)