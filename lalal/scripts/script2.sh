#!/bin/bash

intro="Install app [y/n]: "
echo -n $intro
read result

if [[ $result == [yY] ]]; then 
	echo "installing..."
elif [[ $result == [nN] ]]; then
	echo "Cancelled"
else
	echo "Option not validate"
fi




