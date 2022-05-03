# Angular Elements Test

Project as example that show how angular/elements could be managed with a nx monorepro.

There is in the common libs a component "modal-image" that could be uses in any potential app of this project. For this test there is app with the name of the component because the propuse of this is export the component as a web-component to use anywhere. This app was cleaned from files that are don't needed like the app.component, styles or assets (also the outputHash option was removed). The setup to export the component as web-component is in the app.module file.

Command to build:

```shell
npm run ng -- build --project modal-image
node run merge-builded-files modal-image
```

This last command will merge the result "js" files into one.

**There is live example** with the component exported in the "live-test" folder.
