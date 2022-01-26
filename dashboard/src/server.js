const express = require('express');
const configureServer = require('../../base/base-server')

const port = 9000;

configureServer(express, __dirname, 'dashboard', port, '*');
