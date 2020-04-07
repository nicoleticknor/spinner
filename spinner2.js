const log = (inpt) => process.stdout.write('\r' + inpt + '   ');
const delays = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900]
const input = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '\n'];

for (let i = 0; i < delays.length; i++) {
  setTimeout(() => {
    log(input[i])
  }, delays[i]);
}