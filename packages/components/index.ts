import Button from './src/button';
import { App } from "vue";

// List of components to register globally
const components = [
    Button
];

// Install function to be used with app.use()
const install = (app: App): void => {
    components.forEach(component => {
        app.component(component.name ?? component.displayName, component);
    });
};

export default {
    install,
};

export * from './src/button';