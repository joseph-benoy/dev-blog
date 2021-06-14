var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

let indexPostRouter = require('./routes/indexPost');
let postRouter = require('./routes/post');
let searchRouter = require('./routes/searchPost');
let getCategoryRouter = require('./routes/getCategoryList');
let datePostRouter = require('./routes/postByDate');

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/indexPost',indexPostRouter);
app.use('/post',postRouter);
app.use('/searchPost',searchRouter);
app.use('/categories',getCategoryRouter);
app.use('/postByDate',datePostRouter);



















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.json({error:'Invalid endpoint'});
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //error page
});

module.exports = app;
