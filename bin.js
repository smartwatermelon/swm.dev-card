#!/usr/bin/env node

const chalk = require('chalk');

// Define colors for system stability aesthetic
const primary = chalk.hex('#1B4D5C');      // Deep blue-green for borders
const accent = chalk.hex('#FFB84D');       // Bright amber for critical info
const secondary = chalk.hex('#4ECDC4');    // Muted cyan for technical details
const emphasis = chalk.hex('#F7F7F7').bold; // Warm white for name
const subtle = chalk.hex('#7B8794');       // Subtle gray for dividers

// Card dimensions - fixed width for better alignment
const width = 54;

// Create borders with exact width
const topBorder = primary('╭' + '─'.repeat(width) + '╮');
const bottomBorder = primary('╰' + '─'.repeat(width) + '╯');

// Function to create a line with perfectly aligned borders
const createLine = (text) => {
  // Strip ANSI codes for accurate length calculation
  const cleanText = text.replace(/\u001b\[\d+(;\d+)*m/g, '');
  const padding = width - cleanText.length;
  return primary('│') + text + ' '.repeat(padding) + primary('│');
};

// Empty line and divider
const emptyLine = createLine(' '.repeat(width));
const divider = createLine(' ' + subtle('━'.repeat(width - 2)) + ' ');

// Build the card with precise spacing
const card = [
  '',
  topBorder,
  emptyLine,
  createLine(' ' + emphasis('Andrew Rich') + '  ' + primary('|') + '  ' + secondary('SRE • Automation • CI/CD')),
  divider,
  emptyLine,
  createLine(' ' + accent('🔧') + '  ' + chalk.cyanBright('Role') + '      :: ' + chalk.white('Principal SRE @ Oracle Health')),
  createLine(' ' + secondary('📍') + '  ' + chalk.cyanBright('Location') + '  :: ' + chalk.white('Spokane, WA (Remote Ready)')),
  createLine(' ' + accent('📧') + '  ' + chalk.cyanBright('Contact') + '   :: ' + chalk.greenBright.underline('andrew.rich@gmail.com')),
  createLine(' ' + secondary('🔗') + '  ' + chalk.cyanBright('LinkedIn') + '  :: ' + chalk.greenBright.underline('linkedin.com/in/andrewrich')),
  createLine(' ' + secondary('🔗') + '  ' + chalk.cyanBright('GitHub') + '    :: ' + chalk.greenBright.underline('github.com/smartwatermelon')  + "         "),
//  createLine(' ' + accent('⚡') + '  ' + chalk.cyanBright('GitHub') + '    :: ' + chalk.greenBright.underline('github.com/smartwatermelon')),
  createLine(' ' + secondary('🎯') + '  ' + chalk.cyanBright('Specialty') + ' :: ' + chalk.white('Automation • Toil Reduction')),
  emptyLine,
  divider,
  createLine(' ' + subtle('>') + ' ' + chalk.white('25yrs turning manual processes into code')),
  createLine(' ' + subtle('>') + ' ' + subtle('Run') + ' ' + accent('npx andrewrich') + ' ' + subtle('to see this card')),
  emptyLine,
  bottomBorder,
  ''
].join('\n');

console.log(card);