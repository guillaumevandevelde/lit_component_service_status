import { LitElement } from 'lit';
export declare class StatusElement extends LitElement {
    static styles: import("lit").CSSResult;
    apiToCheck: string;
    status: string;
    statusText?: string | undefined;
    onlineText?: string | undefined;
    offlineText?: string | undefined;
    onlineColor?: string | undefined;
    offlineColor?: string | undefined;
    getServiceStatus(): Promise<void>;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lit-service-status-component': StatusElement;
    }
}
//# sourceMappingURL=lit-service-status-component.d.ts.map