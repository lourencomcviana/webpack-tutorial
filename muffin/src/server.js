const express = require('express');
const configureServer = require('../../base/base-server')

const port = 9002;

configureServer(express, __dirname, 'muffin', port);
