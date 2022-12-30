/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-service-status-component')
export class StatusElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    .label {
      font-weight: bold;
      border-radius: 1em;
      padding: 0.5em;
      color: white;
      width: 100px;
      text-align: center;
      font-family: 'Fira Sans', sans-serif;
    }

    .label {
      background-color: green;
    }

    .label.offline {
      background-color: red;
    }
  `;

  @property()
  apiToCheck!: string;
  @property()
  status!: string;
  @property()
  statusText? = 'Status';
  @property()
  onlineText? = 'Online';
  @property()
  offlineText? = 'Offline';
  @property()
  onlineColor? = 'green';
  @property()
  offlineColor? = 'red';
 

  async getServiceStatus() {

    try {
      fetch(this.apiToCheck, {
        headers: {
          Accept: 'application/json',
          apiKey:  '',
        },
      }).then((response) => (this.status = response.statusText));
    } catch (error) {
      console.error(error);
    }
  }

  override connectedCallback(){
    super.connectedCallback();
    this.getServiceStatus();
  }


  override render() {
    return html`
      <div class="label ${this.status === 'OK' ? '' : 'offline'}">
        ${this.status === 'OK' ? this.onlineText : this.offlineText}
      </div>
    `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'lit-service-status-component': StatusElement;
  }
}
