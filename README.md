
# lit-service-status-component

This is a web component built with Lit that reveals the status of a service.

The component provides a simple overview of the availability of the service. This by querying the health check of the service.

The following properties of the component are adjustable:

## Properties

| Property                  | Attribute       | Description | Type     | Default     |
| ------------------------- | --------------- | ----------- | -------- | ----------- |
| `apiToCheck` _(required)_ | `api-to-check`  |             | `string` | `undefined` |
| `offlineColor`            | `offline-color` |             | `string` | `'red'`     |
| `offlineText`             | `offline-text`  |             | `string` | `'Offline'` |
| `onlineColor`             | `online-color`  |             | `string` | `'green'`   |
| `onlineText`              | `online-text`   |             | `string` | `'Online'`  |
| `status`                  | `status`        |             | `string` | `undefined` |

----------------------------------------------


## Getting Started

To use the component, first install this package

    npm i lit-service-status-component

Then you add the component in your HTML page and reference the script.</br>
Change the necessary attributes as you wish.</br>
Ready to go!</br>

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test</title>
        <script type="module" src="/node_modules/d09-service-status/dist/d09-service-status/d09-service-status.esm.js"></script>
    </head>
    <body>
        <d09-service-status-component
        api-to-check="https://apidgdv.gent.be/supporting/communication-platform-core/v1/status/am-i-up" 
        online-text="Up"
        offline-text="Down" 
        online-color="#BDD68D"
        offline-color="#E89393"     
        ></d09-service-status-component>    
    </body>
    </html>
```     #   l i t _ c o m p o n e n t _ s e r v i c e _ s t a t u s  
 