#!/bin/bash

error() {
	echo "Error: $1"
	exit 1
}

if [ $# -ne 2 ]; then
	error "must have 2 arguments"
fi

if [ ! -d $2 ]; then
	error "directory doesn't exist"
fi

files=`ls -l $2 | cut -d " " -f 9`

for file in $files ; do
	old=$2/$file
	new=$2/$1$file
	mv $old $new
	echo "moving $old -> $new"
done
