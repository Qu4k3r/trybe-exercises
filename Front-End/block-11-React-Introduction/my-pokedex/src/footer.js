import { createElement, Component } from 'react';

class Footer extends Component {
  render() {
    return(
      createElement('footer', { className: 'footer' },
        createElement('span', null, <em>All rights reserved <i class="far fa-copyright"></i> </em>))
    );
  }
}

export default Footer;
