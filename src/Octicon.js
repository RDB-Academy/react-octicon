require('../css/Octicon.css')

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Octicon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    mega: PropTypes.bool,
    spin: PropTypes.bool
  };

  static defaultProps = {
    mega: false,
    spin: false
  };

  render() {
    let {name, className, mega, spin, ...props} = this.props
    let classNames = [mega ? 'mega-octicon' : 'octicon', `octicon-${name}`]
    if (spin) {
      classNames.push('spin-octicon')
    }
    if (className) {
      classNames.push(className)
    }
    return <span {...props} className={classNames.join(' ')}/>
  }
}

export default Octicon
