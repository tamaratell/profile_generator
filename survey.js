const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('How old are you? ', (age) => {
    rl.question("What's an activity you like doing? ", (favActivity) => {
      rl.question("What do you listen to while doing that? ", (listensTo) => {
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (favMeal) => {
          rl.question("What do you like eating for that meal? ", (favFood) => {
            rl.question("Which sport is your absolute favourite? ", (favSport) => {
              rl.question("If you could have any super power, what would it be? ", (superpower) => {
                console.log(`${name} is ${age} years old. ${name} enjoys ${favActivity} and listens to ${listensTo} while doing that. ${name}'s favorite meal is ${favMeal} and loves to eat ${favFood} for that meal. ${name}'s favorite sport is ${favSport} and would choose ${superpower} as a superpower.`);
                rl.close();
              });
            });
          });
        });
      });

    });
  });

});





