#!/bin/bash

intro="Write number: "
echo -n $intro
read limite

for (( i = 0; i < $limite; i++ )); do
	echo $i
	#codigo
done
