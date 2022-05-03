export * from './lib/shared.module';

// @index('./lib/components/*/**/*.component.ts', (f, _) => `export { ${_.pascalCase(f.name)}  } from '${f.path}';`)
export { ModalImageComponent } from './lib/components/modal-image/modal-image.component';
// @endindex
