#!/bin/bash

#parametros
echo "Numero de parametros recibidos: $#"
echo $1
echo $2

if [ -f $1 ]; then
	echo "File exist"
	cat $1
else
	echo "File don't exist"
fi

echo ""

if [ -d $1 ]; then
	echo "Directory exist"
	ls -lh $1
else
	echo "Directory don't exist"
fi
