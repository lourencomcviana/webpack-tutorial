const express = require('express');
const configureServer = require('../../base/base-server')

const port = 3001;

configureServer(express, __dirname, 'hello-world', port);
