const express = require('express');
const configureServer = require('../../base/base-server')

const port = 9003;

configureServer(express, __dirname, 'image-caption', port);
