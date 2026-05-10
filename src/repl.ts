import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(" ");
}

const replInterface = createInterface({
  input: stdin,
  output: stdout,
  prompt: "Pokedex > ",
})
export function startREPL() {
  replInterface.prompt()
  replInterface.on("line", (line:any) => {
    const cleaned = cleanInput(line)
    if (cleaned.length === 0 || cleaned[0] === "") {
      replInterface.prompt();
      return;
    }
    console.log(`Your command was: ${cleaned[0]}`);
    replInterface.prompt();
  });
}
