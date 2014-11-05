# hipchat-eraser

Recursivly delete your 1 on 1 chat history with someone for the entire year of 2014 to date.

## install

```sh
npm install --global hipchat-eraser
```

## use
```sh
hipchat-erase
```

`hipchat-erase` will prompt you for your hipchat email address, your hipchat password, and the name of the user who's chat you'd like to remove all messages _to_.  You cannot delete their messages, only yours.  Your personal information is never stored or shared, only used to log into the hipchat account _securely from your own computer_.

Under the covers `hipchat-erase` uses [phantomjs](http://phantomjs.org/) to crawl through your chat history with someone and delete your messages one by one.  It can take several hours to delete a years worth of history.

## contributing

I'd love to expand on the features here, but for now it suits my needs.  If you'd like to add something please fork & send a pull request!  If you find a bug let me know & we can hopefully work together to fix it! :smile:

To stay abreast of changes you can follow me at [@briancarlson](https://twitter.com/briancarlson).

## license

The MIT License (MIT)

Copyright (c) 2014 Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

