import ReactDOM from 'react-dom';
import React from 'react';
import { observer } from 'mobx-react';
import { injectGlobal } from 'react-emotion';
import { Message } from 'semantic-ui-react';
import { AlertContainerStyles } from './style';
import AlertStore from 'js/stores/alertStore';

injectGlobal`
  .alertsPortal {
    position: relative;
    z-index: 999999995;
  }
`;

const alertRoot =
  document.querySelector('#reactPortalSection') || document.body;

@observer
class Alerts extends React.Component {
  node = document.createElement('div');

  componentDidMount() {
    this.node.className = 'alertsPortal';
    alertRoot.appendChild(this.node);
  }

  componentWillUnmount() {
    alertRoot.removeChild(this.node);
  }

  render() {
    return ReactDOM.createPortal(
      <AlertContainerStyles>
        {AlertStore.alerts.map(alert => (
          <Message
            icon="warning"
            key={alert.id}
            header={alert.alertType}
            content={alert.alertText}
            onClick={AlertStore.removeAlert}
            error={alert.alertType === 'Error'}
          />
        ))}
      </AlertContainerStyles>,
      this.node
    );
  }
}

export default Alerts;
