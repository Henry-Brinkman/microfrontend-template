const coreLibraries = new Set([
    '@angular/animations',
    '@angular/cdk',
    '@angular/core',
    '@angular/compiler',
    '@angular/forms',
    '@angular/material',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/common',
    '@angular/common/http',
    '@topicus-rgp-ds/core',
    '@topicus-rgp-ds/informational',
    '@topicus-rgp-ds/interactables',
    '@topicus-rgp-ds/layout',
    '@topicus-rgp-ds/tables',
    '@topicus-rgp-ds/wizards',
    '@fortawesome/angular-fontawesome',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/pro-light-svg-icons',
    '@fortawesome/pro-regular-svg-icons',
    '@fortawesome/pro-solid-svg-icons',
    '@ng-icons/core',
    '@ng-icons/heroicons'
]);

module.exports = {
    name: 'viplive-chats',
    exposes: {
        './Module': ['apps/viplive-chats/src/app/remote-entry/entry.module.ts']
    },
    shared: (libraryName, defaultConfig) => {
        if (coreLibraries.has(libraryName)) {
            return {
                ...defaultConfig,
                eager: true
            };
        }

        // Returning false means the library is not shared.
        return false;
    }
};
