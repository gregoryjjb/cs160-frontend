#!/bin/sh

#echo $GOOGLE_CLIENT_ID >> .env.local

rm -rf /usr/src/app/www/*
cp -R /usr/src/app/build/. /usr/src/app/www
