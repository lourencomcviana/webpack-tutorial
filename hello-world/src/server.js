const express = require('express');
const configureServer = require('../../base/base-server')

const port = 9001;

configureServer(express, __dirname, 'hello-world', port);
