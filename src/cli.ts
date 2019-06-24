import { command } from 'yargs';
import { formatFile } from './format';

command({
  command: `$0 <file>`,
  handler: (argv) => formatFile(argv.file as string),
}).argv;
