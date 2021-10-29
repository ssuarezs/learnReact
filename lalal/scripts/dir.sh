#!/bin/bash

if [ ! -d $1 ]; then
	echo "Directory doesn't exist"
	exit 1
fi

total=0
for f in `ls $1`; do
	name=$1/$f
	if [ -f $name ]; then
		bytes=`ls -l $name | cut -d " " -f 5`
		echo "File $name have $bytes bytes" | tr -s /
		(( total = $total + $bytes ))
	fi
done

echo -e "\nTotal: $total"
exit 0
