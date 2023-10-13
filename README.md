# Microfrontend template
## Gebruik de repository als template om snel een microfrontend op te zetten.

**Let op** Vergeet de volgende dingen niet:
- Naam aanpassen workspace/project

## Getting started
- Voeg in de VIPLive front-end een route toe die naar jouw microfrontend wijst. (Zie `app.routing.ts`)

**Voorbeeld**
>{
  path: 'declaraties',
  loadChildren: () =>
  loadRemoteModule('declaraties', './Module')
  .then(
  (m) => m.RemoteEntryModule
  ),
  },
- .npmrc-template --> .npmrc
- `npm i --legacy-peer-deps`
- Regel certificate (zie hieronder)
- `npm run start`

## HTTPS draaien onder gegenereerd certificaat

-   Start cmd / powershell met admin purposes
-   Navigeer naar de `src` folder van de viplive-chats-frontend repository
-   Installeer mkcert via chocolatey `choco install mkcert` en run de install van mkcert
  -   Op een mac installeer je mkcert via Homebrew, `brew install mkcert`
-   run `mkcert -install`
-   Genereer een certificaat voor localhost
-   run `mkcert localhost`

Je hebt nu als het goed is een localhost-key.pem en een localhost.pem

Die worden gebruikt als je de applicatie start met `npm run start`

> De browsers Chrome en Edge werken nu out-of-the-box met https, maar Firefox behoeft wat extra aanpassingen om het certicaat te vertrouwen.

### Lokaal inloggen via Firefox

Firefox vertrouwt standaard niet de certificaten die geimporteerd zijn in je systeem. Om tegen een lokale https
kestrel (asp.net core) omgeving te mogen praten vanuit angular moet je de stappen van Microsoft
volgen: [trust-of-https-certificate-using-firefox-browser](https://docs.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-6.0&tabs=visual-studio#configure-trust-of-https-certificate-using-firefox-browser)

### Let op:

Nx versie staat tijdelijk vast op versienummer: 15.7.2 (zie: https://github.com/nrwl/nx/issues/12369)
