#!/bin/bash
# create repetive files
# name, ext, num, rute

error() {
	echo "Error: $1"
	exit 1
}

if [ $# -ne 4 ]; then
	error "must have 4 arguments"
fi

if [ ! -d $4 ]; then
	error "directory doesn't exist"
fi

if [ $3 -lt 1 ]; then
	error "number of files lower than 1"
fi

for (( i=1; i <= $3; i++ )); do
	name="$4/$1-$i.$2"
	if [ $i -lt 10 ]; then
		name="$4/$1-0$i.$2"
	fi
	touch $name
	echo "Creating... $name" | tr -s /
done

