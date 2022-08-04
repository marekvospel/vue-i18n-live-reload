## Reproduction
1. install dependencies (`pnpm i`)

2. start vite dev server (`pnpm dev` or `vite`) and open `http://localhost:5173` in your browser

3. update `hello` key in `locale/<currently used language>`

## Expected result
`Hello`/`こんいちは` should be changed to whatever it was changed to.

## Actual result
The message doesn't get updated until vite dev server is restarted.
