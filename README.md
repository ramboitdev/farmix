# farmix - Clean Architecture React Native (skeleton)

Skeleton project for a React Native app structured using Clean Architecture.

## Structure
See `src/` for the layered structure: domain, data, infra, presentation, app, core.

## Quick start
1. Install dependencies: `npm install`
2. iOS pods: `npx pod-install` (macOS)
3. Start metro: `npm run start`

Replace the MongoDB URI and adapt infra/database code depending on whether you use Realm or remote API.