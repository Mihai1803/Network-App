import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({ alerts }) => {
  return (
    alerts !== null && alerts.length > 0 && alerts.map((alert) => (
        <section className='container'>
            <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                { alert.msg }
            </div>
        </section>
    ))
  )
}

Alert.propTypes = {
    alert: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert)