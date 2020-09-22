const spinner = () => {
  let spins = ['|', '/', '-', '|', '/', '-', '|', '\n'];
  let timer = 100;
  spins.forEach(spin => {
    setTimeout(() => {
      spin !== '\n' ? process.stdout.write(`\r${spin}   `) : process.stdout.write(spin);
    }, timer)
    timer += 200;
  });
};

spinner();