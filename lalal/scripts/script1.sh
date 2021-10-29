#!/bin/bash

intro="Write number: "
echo -n $intro
read valor


if [ $valor -lt 5 -o $valor -gt 10 ]; then
	echo "Number is not on range [5, 10]"
else
	echo "Number is on range [5, 10]"
fi

# -a and
# -o or
