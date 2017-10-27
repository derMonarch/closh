#!/usr/bin/env node
'use strict';
var spawn = require('child_process').spawn;
var path = require('path');
var os = require('os');
var fs = require('fs');

var bin = 'lumo';
var args = [
  '--classpath', path.join(__dirname, '../src'),
  '--cache', path.join(os.homedir(), '.lumo_cache'),
  '-m', 'closh.main',
];

spawn(bin, args, { stdio: 'inherit' }).on('exit', process.exit);
