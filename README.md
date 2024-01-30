# Repro for issue 6720

## Setup

OS: macOS Sonoma 14.2.1<br>
firebase-tools: v13.1.0<br>
node: v18.18.0<br>
npm: v9.8.1

## Steps

1. Install dependencies for `functions`
   - Run `cd functions`
   - RUn `npm i`
1. Run `cd ../`
1. Run `npm run serve`
1. Emulators start up without any issues
1. Open "http://127.0.0.1:5001/PROJECT_ID/us-central1/helloWorld"
