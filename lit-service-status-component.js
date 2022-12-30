var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let StatusElement = class StatusElement extends LitElement {
    constructor() {
        super(...arguments);
        this.statusText = 'Status';
        this.onlineText = 'Online';
        this.offlineText = 'Offline';
        this.onlineColor = 'green';
        this.offlineColor = 'red';
    }
    async getServiceStatus() {
        try {
            fetch(this.apiToCheck, {
                headers: {
                    Accept: 'application/json',
                    apiKey: '',
                },
            }).then((response) => (this.status = response.statusText));
        }
        catch (error) {
            console.error(error);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.getServiceStatus();
    }
    render() {
        return html `
      <div class="label ${this.status === 'OK' ? '' : 'offline'}">
        ${this.status === 'OK' ? this.onlineText : this.offlineText}
      </div>
    `;
    }
};
StatusElement.styles = css `
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
__decorate([
    property()
], StatusElement.prototype, "apiToCheck", void 0);
__decorate([
    property()
], StatusElement.prototype, "status", void 0);
__decorate([
    property()
], StatusElement.prototype, "statusText", void 0);
__decorate([
    property()
], StatusElement.prototype, "onlineText", void 0);
__decorate([
    property()
], StatusElement.prototype, "offlineText", void 0);
__decorate([
    property()
], StatusElement.prototype, "onlineColor", void 0);
__decorate([
    property()
], StatusElement.prototype, "offlineColor", void 0);
StatusElement = __decorate([
    customElement('lit-service-status-component')
], StatusElement);
export { StatusElement };
//# sourceMappingURL=lit-service-status-component.js.map