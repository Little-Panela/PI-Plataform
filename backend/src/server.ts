import { handler } from './app';

const port = process.env.PORT || 8085;
handler.listen(port, () => console.log(`Running on port ${port}`))